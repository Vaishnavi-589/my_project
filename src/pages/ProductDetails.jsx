import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { products } from '../data/mockData';
import { Star, Heart, ShoppingCart, ArrowLeft, ShieldCheck, Truck, RotateCcw, MessageSquare } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useAppContext();

  // Find product by ID
  const product = products.find((p) => p.id === id);

  // States
  const [activeImage, setActiveImage] = useState('');
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setActiveImage(product.image);
      if (product.sizes) setSelectedSize(product.sizes[0]);
      if (product.colors) setSelectedColor(product.colors[0]);
      setQty(1);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center font-sans">
        <h2 className="font-serif text-2xl font-bold text-deepred">Product Not Found</h2>
        <p className="text-gray-500 font-light mt-2">The product you are looking for does not exist or has been removed.</p>
        <button
          onClick={() => navigate('/products')}
          className="mt-6 bg-gradient-to-r from-deepred to-saffron text-white py-2.5 px-6 rounded-full font-bold shadow-md hover:scale-105 transition"
        >
          View All Products
        </button>
      </div>
    );
  }

  const isWish = isInWishlist(product.id);
  const discountRate = product.discount || 0;

  const handleAddToCart = () => {
    addToCart(product, qty, selectedSize, selectedColor);
  };

  const handleBuyNow = () => {
    addToCart(product, qty, selectedSize, selectedColor);
    navigate('/checkout');
  };

  // Mock Reviews
  const mockReviews = [
    { id: 1, author: "Rahul Sharma", rating: 5, date: "July 2, 2026", comment: "The quality of the samagri is pure and authentic. The brass thali was polished beautifully. Delivery was prompt." },
    { id: 2, author: "Anjali Gupta", rating: 4, date: "June 28, 2026", comment: "Really liked the Satyanarayan Katha book, the print is bold and very readable. The banana leaves were fresh when they arrived." },
    { id: 3, author: "Pandit Hari Prasad", rating: 5, date: "June 15, 2026", comment: "Bhasma aur kapoor ki sugandh bilkul satvik hai. Shastri ji approved it for the ceremony. Highly recommended." }
  ];

  // Find related products (same category, excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-deepred hover:text-saffron font-bold text-sm mb-8 transition-colors group cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back</span>
      </button>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-3xl border border-marigold/15 p-6 md:p-8 shadow-sm">
        {/* Left Side: Product Images */}
        <div className="flex flex-col gap-4">
          {/* Active Image Frame */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-marigold/15 bg-cream-light">
            <img
              src={activeImage || product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {discountRate > 0 && (
              <span className="absolute top-4 left-4 bg-deepred text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm animate-pulse">
                {discountRate}% OFF
              </span>
            )}
          </div>

          {/* Thumbnail Gallery */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex items-center gap-3">
              {product.gallery.map((imgUrl, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`w-20 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === imgUrl ? 'border-saffron scale-105 shadow-sm' : 'border-marigold/20 hover:border-marigold/60'
                  }`}
                >
                  <img src={imgUrl} alt={`thumbnail-${index}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Category Breadcrumb */}
            <span className="text-[10px] uppercase font-bold text-saffron tracking-widest bg-saffron/10 py-1 px-3 rounded-full w-fit">
              {product.category.replace('-', ' ')}
            </span>

            {/* Name */}
            <h1 className="font-serif text-2xl md:text-3xl font-extrabold text-gray-800 mt-3.5 leading-tight">
              {product.name}
            </h1>

            {/* Ratings */}
            <div className="flex items-center gap-2 mt-2 border-b border-marigold/10 pb-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'text-marigold fill-current' : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-500">({product.rating} Rating)</span>
              <span className="text-gray-300">|</span>
              <span className="text-xs text-gray-500 font-light flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5 text-saffron" />
                {mockReviews.length} Verified Reviews
              </span>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-extrabold text-deepred">₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                  <span className="text-xs bg-emerald-50 text-emerald-600 font-bold px-2 py-0.5 rounded">
                    Save ₹{product.originalPrice - product.price}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Specifications Details */}
            <div className="bg-cream-light border border-marigold/20 rounded-2xl p-4 mb-6 text-xs flex flex-col gap-2 font-medium text-gray-600">
              <div className="flex justify-between">
                <span>Material / Composition:</span>
                <span className="text-gray-800 font-bold">{product.material || 'Traditional Pure'}</span>
              </div>
              <div className="flex justify-between">
                <span>Standard Dimensions:</span>
                <span className="text-gray-800 font-bold">{product.size || 'Pack Unit'}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipment Status:</span>
                <span className="text-emerald-600 font-bold">{product.inStock ? 'Ready in stock' : 'Out of stock'}</span>
              </div>
            </div>

            {/* Options Selection (Sizes & Colors if available) */}
            {product.sizes && (
              <div className="mb-4">
                <span className="text-xs font-bold text-gray-700 block mb-2 uppercase tracking-wide">Available Sizes:</span>
                <div className="flex gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`py-1 px-3 rounded-lg text-xs font-bold border transition ${
                        selectedSize === s
                          ? 'border-saffron bg-saffron/10 text-deepred shadow-sm'
                          : 'border-marigold/20 hover:border-marigold text-gray-600 bg-white'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.colors && (
              <div className="mb-6">
                <span className="text-xs font-bold text-gray-700 block mb-2 uppercase tracking-wide">Color Variants:</span>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`py-1 px-3 rounded-lg text-xs font-bold border transition ${
                        selectedColor === c
                          ? 'border-saffron bg-saffron/10 text-deepred shadow-sm'
                          : 'border-marigold/20 hover:border-marigold text-gray-600 bg-white'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="border-t border-marigold/10 pt-6 mt-6 flex flex-col gap-4">
            {product.inStock ? (
              <>
                <div className="flex items-center gap-4">
                  {/* Quantity controls */}
                  <div className="flex items-center justify-between border border-marigold/30 rounded-xl p-1 bg-cream-light font-sans w-32 shrink-0">
                    <button
                      onClick={() => setQty((prev) => (prev > 1 ? prev - 1 : 1))}
                      className="w-8 h-8 flex items-center justify-center hover:bg-marigold/20 text-deepred font-bold rounded-lg transition"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold text-gray-800 w-4 text-center">{qty}</span>
                    <button
                      onClick={() => setQty((prev) => prev + 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-marigold/20 text-deepred font-bold rounded-lg transition"
                    >
                      +
                    </button>
                  </div>

                  {/* Wishlist toggle icon */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`p-3 rounded-xl border border-marigold/25 shadow-sm transition hover:scale-105 active:scale-95 bg-white ${
                      isWish ? 'text-rose-600 border-rose-200' : 'text-gray-400 hover:text-rose-600'
                    }`}
                    title={isWish ? "Remove from Wishlist" : "Add to Wishlist"}
                  >
                    <Heart className={`w-5 h-5 ${isWish ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Primary Button group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer text-sm"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-deepred to-deepred-light hover:from-deepred-light hover:to-deepred text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer text-sm border-b-2 border-orange-950"
                  >
                    <span>Buy Now</span>
                  </button>
                </div>
              </>
            ) : (
              <button
                disabled
                className="w-full bg-gray-100 text-gray-400 py-3.5 rounded-xl font-bold font-sans cursor-not-allowed text-sm text-center"
              >
                Out of Stock - Coming Soon
              </button>
            )}

            {/* Quick Guarantees */}
            <div className="grid grid-cols-3 gap-2 mt-4 text-[10px] text-gray-500 font-light text-center border-t border-marigold/10 pt-4">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-saffron" />
                <span className="font-semibold text-gray-700">Delivery in 3–5 days</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-saffron" />
                <span className="font-semibold text-gray-700">100% Satvik Quality</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RotateCcw className="w-4 h-4 text-saffron" />
                <span className="font-semibold text-gray-700">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Review Section */}
      <div className="bg-white rounded-3xl border border-marigold/15 p-6 md:p-8 mt-8 shadow-sm">
        <h2 className="font-serif text-lg md:text-xl font-bold text-deepred mb-6 pb-2 border-b border-marigold/10 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-saffron" />
          <span>Customer Reviews</span>
        </h2>
        <div className="flex flex-col gap-6">
          {mockReviews.map((rev) => (
            <div key={rev.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-sm font-bold text-gray-800">{rev.author}</span>
                  <span className="text-[10px] text-gray-400 ml-3 font-light">{rev.date}</span>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < rev.rating ? 'text-marigold fill-current' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed">{rev.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="font-serif text-lg md:text-xl font-bold text-deepred mb-6 flex items-center gap-2">
            <span>Related Puja Samagri</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
