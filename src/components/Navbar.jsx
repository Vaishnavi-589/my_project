import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Search, Heart, ShoppingCart, User, LogOut, BellRing } from 'lucide-react';

const Navbar = () => {
  const { cart, wishlist, user, logout } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/products');
    }
  };

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-marigold/30 shadow-md marigold-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo: PujaSewa */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="bg-saffron text-white p-2 rounded-xl shadow-md group-hover:bg-saffron-dark transition-all duration-300">
            <BellRing className="w-6 h-6 bell-hover" />
          </div>
          <span className="font-serif text-2xl font-bold tracking-wider bg-gradient-to-r from-deepred to-saffron bg-clip-text text-transparent group-hover:from-saffron group-hover:to-deepred transition-all duration-300">
            PujaSewa
          </span>
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex-1 max-w-lg relative group hidden md:block">
          <input
            type="text"
            placeholder="Search puja kits, cloth, diya, gangajal..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-cream-light border border-marigold/50 focus:border-saffron focus:ring-2 focus:ring-saffron/20 rounded-full py-2 px-5 pr-12 outline-none text-sm transition-all duration-300 font-sans shadow-sm"
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-deepred hover:text-saffron transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>

        {/* Action Icons */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Mobile search toggle */}
          <button
            onClick={() => navigate('/products')}
            className="p-2 hover:bg-cream rounded-full text-deepred md:hidden transition"
            title="Search Products"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative p-2 hover:bg-cream rounded-full text-deepred hover:text-saffron transition-all duration-300"
            title="Wishlist"
          >
            <Heart className="w-6 h-6" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-deepred text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative p-2 hover:bg-cream rounded-full text-deepred hover:text-saffron transition-all duration-300"
            title="Shopping Cart"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-saffron text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {cartItemsCount}
              </span>
            )}
          </Link>

          {/* User Session profile / login */}
          {user ? (
            <div className="flex items-center gap-3">
              <Link
                to="/profile"
                className="hidden lg:flex flex-col items-end text-right font-sans"
              >
                <span className="text-[10px] text-gray-500 font-medium">Namaste,</span>
                <span className="text-sm font-semibold text-deepred">{user.name}</span>
              </Link>
              <div className="relative group">
                <Link
                  to="/profile"
                  className="flex items-center justify-center bg-cream border border-marigold text-deepred hover:bg-saffron hover:text-white w-10 h-10 rounded-full transition-all duration-300 shadow-sm"
                  title="Profile Settings"
                >
                  <User className="w-5 h-5" />
                </Link>
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-marigold/20 py-2 hidden group-hover:block transition-all duration-300">
                  <div className="px-4 py-2 border-b border-gray-100 font-sans">
                    <p className="text-xs text-gray-400">Signed in as</p>
                    <p className="text-sm font-semibold text-deepred truncate">{user.name}</p>
                  </div>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-cream-light hover:text-saffron font-sans"
                  >
                    Profile Settings
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-cream-light hover:text-saffron font-sans"
                  >
                    Ordered Products
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 font-sans border-t border-gray-100"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 bg-gradient-to-r from-deepred to-saffron hover:from-saffron hover:to-deepred text-white py-2 px-5 rounded-full font-semibold text-sm transition-all duration-300 shadow-md border-b-2 border-orange-700 hover:scale-105 active:scale-95"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
      {/* Mobile search bar */}
      <div className="md:hidden px-4 pb-3">
        <form onSubmit={handleSearchSubmit} className="relative w-full">
          <input
            type="text"
            placeholder="Search puja kits, cloth, diya..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-cream-light border border-marigold/40 focus:border-saffron focus:ring-1 focus:ring-saffron/20 rounded-full py-1.5 px-4 pr-10 outline-none text-xs font-sans"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-deepred"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Navbar;
