import React, { createContext, useContext, useState, useEffect } from 'react';
import { offers } from '../data/mockData';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  // Load state from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('pujasewa_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('pujasewa_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [user, setUser] = useState(() => {
    const savedSession = localStorage.getItem('pujasewa_session');
    return savedSession ? JSON.parse(savedSession) : null;
  });

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('pujasewa_orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Coupon state
  const [activeCoupon, setActiveCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');

  // Toast notifications state
  const [toasts, setToasts] = useState([]);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('pujasewa_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('pujasewa_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('pujasewa_session', JSON.stringify(user));
      // Save users database as well so editing works
      const users = JSON.parse(localStorage.getItem('pujasewa_users') || '[]');
      const userIndex = users.findIndex(u => u.email === user.email);
      if (userIndex > -1) {
        users[userIndex] = user;
      } else {
        users.push(user);
      }
      localStorage.setItem('pujasewa_users', JSON.stringify(users));
    } else {
      localStorage.removeItem('pujasewa_session');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('pujasewa_orders', JSON.stringify(orders));
  }, [orders]);

  // Toast helper
  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart actions
  const addToCart = (product, qty = 1, size = '', color = '') => {
    setCart((prevCart) => {
      // Find if item already exists with same options
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor === color
      );

      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += qty;
        showToast(`Increased quantity of ${product.name} in cart.`);
        return newCart;
      } else {
        showToast(`${product.name} added to cart.`);
        return [...prevCart, { ...product, quantity: qty, selectedSize: size, selectedColor: color }];
      }
    });
  };

  const removeFromCart = (productId, size = '', color = '') => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find(
        (item) =>
          item.id === productId &&
          item.selectedSize === size &&
          item.selectedColor === color
      );
      const newCart = prevCart.filter(
        (item) =>
          !(item.id === productId &&
            item.selectedSize === size &&
            item.selectedColor === color)
      );
      if (itemToRemove) {
        showToast(`${itemToRemove.name} removed from cart.`, 'info');
      }
      return newCart;
    });
  };

  const updateCartQuantity = (productId, qty, size = '', color = '') => {
    if (qty <= 0) {
      removeFromCart(productId, size, color);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId &&
        item.selectedSize === size &&
        item.selectedColor === color
          ? { ...item, quantity: qty }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setActiveCoupon(null);
  };

  // Wishlist actions
  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const isAlreadyIn = prevWishlist.some((item) => item.id === product.id);
      if (isAlreadyIn) {
        showToast(`${product.name} removed from wishlist.`, 'info');
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        showToast(`${product.name} added to wishlist!`);
        return [...prevWishlist, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const moveToCart = (product, size = '', color = '') => {
    // Add to cart
    addToCart(product, 1, size, color);
    // Remove from wishlist
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== product.id));
  };

  // Coupons
  const applyCoupon = (code) => {
    setCouponError('');
    if (!code) {
      setActiveCoupon(null);
      return;
    }
    const matchedOffer = offers.find(
      (off) => off.code.toLowerCase() === code.trim().toLowerCase()
    );

    if (matchedOffer) {
      if (matchedOffer.code === 'PUJA10') {
        setActiveCoupon({
          code: matchedOffer.code,
          type: 'percentage',
          value: 10,
          description: matchedOffer.description
        });
        showToast('Coupon PUJA10 applied! 10% discount will be applied.');
      } else if (matchedOffer.code === 'NAVRATRI20') {
        setActiveCoupon({
          code: matchedOffer.code,
          type: 'percentage',
          value: 20,
          description: matchedOffer.description
        });
        showToast('Navratri Coupon applied! 20% discount will be applied.');
      } else {
        // Generic 10% discount for others
        setActiveCoupon({
          code: matchedOffer.code,
          type: 'percentage',
          value: 10,
          description: matchedOffer.description
        });
        showToast(`Promo applied! ${matchedOffer.title}`);
      }
    } else {
      setCouponError('Invalid Coupon Code');
      setActiveCoupon(null);
      showToast('Invalid Coupon Code', 'error');
    }
  };

  const removeCoupon = () => {
    setActiveCoupon(null);
    setCouponError('');
    showToast('Coupon removed.', 'info');
  };

  // Calculations
  const getSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const getDeliveryCharge = () => {
    const subtotal = getSubtotal();
    if (subtotal === 0) return 0;
    return subtotal >= 999 ? 0 : 70; // Free delivery above 999
  };

  const getDiscountAmount = () => {
    const subtotal = getSubtotal();
    if (!activeCoupon) return 0;
    if (activeCoupon.type === 'percentage') {
      return parseFloat(((subtotal * activeCoupon.value) / 100).toFixed(2));
    }
    return 0;
  };

  const getTotal = () => {
    const subtotal = getSubtotal();
    const delivery = getDeliveryCharge();
    const discount = getDiscountAmount();
    return Math.max(0, subtotal + delivery - discount);
  };

  // Auth actions
  const login = (email, password) => {
    // Check local database of registered users
    const users = JSON.parse(localStorage.getItem('pujasewa_users') || '[]');
    const matchedUser = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (matchedUser) {
      setUser(matchedUser);
      showToast(`Welcome back, ${matchedUser.name}!`);
      return { success: true };
    } else {
      // Create a default demo user for testing if database is empty and credentials match demo values
      if (email.toLowerCase() === 'demo@pujasewa.com' && password === 'demo123') {
        const demoUser = {
          name: 'Shastri Ji',
          email: 'demo@pujasewa.com',
          mobile: '9876543210',
          password: 'demo123',
          addresses: [
            {
              id: '1',
              fullName: 'Shastri Ji',
              mobile: '9876543210',
              addressLine: '108, Mandir Marg, Near Hanuman Temple',
              city: 'Varanasi',
              state: 'Uttar Pradesh',
              pincode: '221001',
              isDefault: true
            }
          ]
        };
        setUser(demoUser);
        showToast('Logged in as Shastri Ji!');
        return { success: true };
      }
      showToast('Invalid email or password.', 'error');
      return { success: false, error: 'Invalid email or password' };
    }
  };

  const signup = (name, email, mobile, password) => {
    const users = JSON.parse(localStorage.getItem('pujasewa_users') || '[]');
    const emailExists = users.some((u) => u.email.toLowerCase() === email.toLowerCase());

    if (emailExists) {
      showToast('Email already registered!', 'error');
      return { success: false, error: 'Email already registered' };
    }

    const newUser = {
      name,
      email,
      mobile,
      password,
      addresses: []
    };

    users.push(newUser);
    localStorage.setItem('pujasewa_users', JSON.stringify(users));
    setUser(newUser);
    showToast(`Account created! Welcome, ${name}.`);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    clearCart();
    showToast('Logged out successfully.', 'info');
  };

  const updateProfile = (updatedDetails) => {
    if (!user) return;
    const newUserState = { ...user, ...updatedDetails };
    setUser(newUserState);
    showToast('Profile updated successfully!');
  };

  const saveAddress = (address) => {
    if (!user) return;
    const addresses = user.addresses ? [...user.addresses] : [];
    if (address.id) {
      // Edit
      const index = addresses.findIndex(a => a.id === address.id);
      if (index > -1) {
        addresses[index] = address;
      }
    } else {
      // Add new
      const newAddress = { ...address, id: Date.now().toString() };
      if (addresses.length === 0) {
        newAddress.isDefault = true;
      }
      addresses.push(newAddress);
    }
    updateProfile({ addresses });
  };

  const deleteAddress = (addressId) => {
    if (!user || !user.addresses) return;
    const addresses = user.addresses.filter(a => a.id !== addressId);
    updateProfile({ addresses });
  };

  // Place order
  const placeOrder = (billingDetails, paymentMethod) => {
    if (cart.length === 0) {
      showToast('Your cart is empty.', 'error');
      return null;
    }

    const orderId = 'PS-' + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
      orderId,
      items: [...cart],
      subtotal: getSubtotal(),
      deliveryCharge: getDeliveryCharge(),
      discount: getDiscountAmount(),
      total: getTotal(),
      couponCode: activeCoupon ? activeCoupon.code : null,
      billingDetails,
      paymentMethod,
      orderDate: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      deliveryStatus: 'Order Placed (Delivery in 3-5 days)'
    };

    setOrders((prevOrders) => [newOrder, ...prevOrders]);
    clearCart();
    showToast('Aapka Puja Samagri Order Safalta Purvak Place Ho Gaya Hai!');
    return orderId;
  };

  // Reorder
  const reorder = (order) => {
    order.items.forEach((item) => {
      addToCart(item, item.quantity, item.selectedSize || '', item.selectedColor || '');
    });
    showToast('Items from order added back to cart.');
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        user,
        orders,
        toasts,
        activeCoupon,
        couponError,
        showToast,
        removeToast,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        moveToCart,
        applyCoupon,
        removeCoupon,
        getSubtotal,
        getDeliveryCharge,
        getDiscountAmount,
        getTotal,
        login,
        signup,
        logout,
        updateProfile,
        saveAddress,
        deleteAddress,
        placeOrder,
        reorder
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
