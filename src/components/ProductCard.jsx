import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useAppContext();
  const [qty, setQty] = useState(1);

  const discountRate = product.discount || 0;
  const isWish = isInWishlist(product.id);

  const incrementQty = () => setQty((prev) => prev + 1);
  const decrementQty = () => setQty((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    // Default to first size and color if available
    const defaultSize = product.sizes ? product.sizes[0] : '';
    const defaultColor = product.colors ? product.colors[0] : '';
    addToCart(product, qty, defaultSize, defaultColor);
    setQty(1); // Reset qty
  };

  return (
    <div className="group bg-white rounded-2xl border border-marigold/15 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1 relative">
      {/* Discount Badge */}
      {discountRate > 0 && (
        <span className="absolute top-3 left-3 bg-deepred text-white text-xs font-bold px-2.5 py-1 rounded-full z-10 shadow-sm font-sans animate-pulse">
          {discountRate}% OFF
        </span>
      )}

      {/* Wishlist Button */}
      <button
        onClick={() => toggleWishlist(product)}
        className={`absolute top-3 right-3 p-2 rounded-full shadow-md z-10 transition-all duration-300 hover:scale-110 active:scale-95 bg-white ${
          isWish ? 'text-rose-600' : 'text-gray-400 hover:text-rose-600'
        }`}
        title={isWish ? "Remove from Wishlist" : "Add to Wishlist"}
      >
        <Heart className={`w-5 h-5 ${isWish ? 'fill-current' : ''}`} />
      </button>

      {/* Product Image */}
      <div className="relative pt-[80%] bg-cream-light overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            to={`/product/${product.id}`}
            className="bg-white/90 hover:bg-white text-deepred p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            title="View Details"
          >
            <Eye className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Details Area */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 mb-1.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'text-marigold fill-current'
                    : 'text-gray-200'
                }`}
              />
            ))}
            <span className="text-xs text-gray-500 font-medium ml-1 font-sans">
              ({product.rating})
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-base font-bold text-gray-800 line-clamp-1 group-hover:text-saffron transition-colors">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>

          {/* Pricing */}
          <div className="flex items-baseline gap-2 mt-1.5 font-sans">
            <span className="text-lg font-extrabold text-deepred">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
            )}
          </div>

          {/* Delivery Note & Stock */}
          <div className="flex items-center justify-between mt-2.5 text-[11px] font-sans">
            <span className="text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
              Delivery in 3–5 days
            </span>
            <span
              className={`font-bold ${
                product.inStock ? 'text-emerald-500' : 'text-rose-500'
              }`}
            >
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-4 pt-3 border-t border-marigold/10 flex flex-col gap-2">
          {product.inStock ? (
            <>
              {/* Quantity Selector */}
              <div className="flex items-center justify-between border border-marigold/30 rounded-xl p-1 bg-cream-light font-sans">
                <span className="text-xs font-semibold pl-2 text-gray-500">Qty:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={decrementQty}
                    className="w-7 h-7 flex items-center justify-center hover:bg-marigold/20 text-deepred font-bold rounded-lg transition"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-gray-800 w-4 text-center">{qty}</span>
                  <button
                    onClick={incrementQty}
                    className="w-7 h-7 flex items-center justify-center hover:bg-marigold/20 text-deepred font-bold rounded-lg transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-1.5 bg-saffron hover:bg-saffron-dark text-white py-2 px-3 rounded-xl font-bold text-xs transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Add Cart</span>
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="flex items-center justify-center gap-1.5 border border-deepred text-deepred hover:bg-deepred hover:text-white py-2 px-3 rounded-xl font-bold text-xs transition-all duration-300 active:scale-95"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Details</span>
                </Link>
              </div>
            </>
          ) : (
            <button
              disabled
              className="w-full bg-gray-100 text-gray-400 py-2.5 rounded-xl text-center font-bold text-xs font-sans cursor-not-allowed"
            >
              Temporarily Unavailable
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
