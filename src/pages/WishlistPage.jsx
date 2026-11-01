import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Heart, Trash2, ShoppingCart, ArrowLeft, ArrowRight } from 'lucide-react';

const WishlistPage = () => {
  const { wishlist, toggleWishlist, moveToCart } = useAppContext();
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center font-sans">
        <div className="w-20 h-20 bg-cream border border-marigold/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Heart className="w-10 h-10 text-rose-500 fill-rose-100" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-deepred">Aapka Wishlist Khaali Hai</h2>
        <p className="text-gray-500 font-light mt-2 max-w-sm mx-auto">
          You haven't saved any products to your wishlist yet. Tag products you love to purchase later!
        </p>
        <button
          onClick={() => navigate('/products')}
          className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-deepred to-saffron text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition hover:scale-105"
        >
          <span>Explore Products</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

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

      <h1 className="font-serif text-2xl md:text-3xl font-extrabold text-deepred mb-8 pb-2 border-b border-marigold/10">
        My Wishlist ({wishlist.length} Items)
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl border border-marigold/15 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Image Box */}
            <div className="relative pt-[75%] bg-cream-light overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button
                onClick={() => toggleWishlist(item)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-white text-rose-500 shadow-md hover:scale-110 active:scale-95 transition"
                title="Remove from Wishlist"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1 justify-between gap-4">
              <div>
                <h3 className="font-serif text-sm font-bold text-gray-800 line-clamp-1 group-hover:text-saffron transition-colors">
                  <Link to={`/product/${item.id}`}>{item.name}</Link>
                </h3>
                <div className="flex items-baseline gap-2 mt-1 font-sans">
                  <span className="text-base font-extrabold text-deepred">₹{item.price}</span>
                  {item.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">₹{item.originalPrice}</span>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-2 pt-2 border-t border-marigold/10">
                {item.inStock ? (
                  <button
                    onClick={() => moveToCart(item)}
                    className="w-full flex items-center justify-center gap-1.5 bg-saffron hover:bg-saffron-dark text-white py-2 rounded-xl font-bold text-xs transition active:scale-95"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Move to Cart</span>
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-50 text-gray-400 py-2 rounded-xl text-xs font-bold font-sans cursor-not-allowed"
                  >
                    Out of Stock
                  </button>
                )}
                <button
                  onClick={() => navigate(`/product/${item.id}`)}
                  className="w-full text-center border border-deepred text-deepred hover:bg-deepred hover:text-white py-2 rounded-xl font-bold text-xs transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
