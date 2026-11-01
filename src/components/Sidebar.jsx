import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { 
  Home, 
  ShoppingBag, 
  History, 
  Tag, 
  User, 
  Settings, 
  Heart, 
  ShoppingCart, 
  LogOut, 
  LogIn 
} from 'lucide-react';

const Sidebar = () => {
  const { user, logout, cart, wishlist } = useAppContext();
  const navigate = useNavigate();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/products', label: 'All Products', icon: ShoppingBag },
    { to: '/orders', label: 'Ordered Products', icon: History, private: true },
    { to: '/offers', label: 'Offers', icon: Tag },
    { to: '/profile', label: 'Profile Settings', icon: Settings, private: true },
    { to: '/wishlist', label: 'Wishlist', icon: Heart, count: wishlistCount },
    { to: '/cart', label: 'Cart', icon: ShoppingCart, count: cartCount },
  ];

  return (
    <aside className="w-full lg:w-64 shrink-0 bg-white border-r border-marigold/20 shadow-sm font-sans flex flex-col justify-between py-6 rounded-2xl lg:sticky lg:top-24 h-fit">
      <div className="flex flex-col gap-2 px-3">
        <div className="px-4 py-2 border-b border-marigold/10 mb-4 text-xs font-semibold uppercase tracking-wider text-deepred/60 font-serif">
          Quick Navigation
        </div>

        {navItems.map((item) => {
          // If private and no user, do not render or redirect to login (or render, and clicking redirects)
          if (item.private && !user) return null;

          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-saffron/10 to-marigold/15 text-deepred border-l-4 border-saffron shadow-sm'
                    : 'text-gray-600 hover:bg-cream-light hover:text-saffron hover:translate-x-1'
                }`
              }
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-saffron shrink-0" />
                <span>{item.label}</span>
              </div>
              {item.count !== undefined && item.count > 0 && (
                <span className="bg-saffron/20 text-deepred text-xs px-2 py-0.5 rounded-full font-bold">
                  {item.count}
                </span>
              )}
            </NavLink>
          );
        })}
      </div>

      <div className="px-3 mt-6 border-t border-marigold/10 pt-4">
        {user ? (
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-rose-600 hover:bg-rose-50 hover:text-rose-700 transition-all duration-300"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            <span>Logout</span>
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-saffron/10 to-marigold/15 text-deepred border-l-4 border-saffron'
                  : 'text-gray-600 hover:bg-cream-light hover:text-saffron'
              }`
            }
          >
            <LogIn className="w-5 h-5 text-saffron shrink-0" />
            <span>Login / Signup</span>
          </NavLink>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
