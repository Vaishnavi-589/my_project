import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Trash2, ShoppingBag, ArrowRight, Tag, X, Heart } from 'lucide-react';

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    updateCartQuantity,
    getSubtotal,
    getDeliveryCharge,
    getDiscountAmount,
    getTotal,
    activeCoupon,
    couponError,
    applyCoupon,
    removeCoupon,
    toggleWishlist,
    isInWishlist
  } = useAppContext();

  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim()) {
      applyCoupon(couponCode.trim());
      setCouponCode('');
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center font-sans">
        <div className="w-20 h-20 bg-cream border border-marigold/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <ShoppingBag className="w-10 h-10 text-saffron" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-deepred">Aapka Cart Khaali Hai</h2>
        <p className="text-gray-500 font-light mt-2 max-w-sm mx-auto">
          You haven't added any products to your cart yet. Explore our auspicious collections and start buying!
        </p>
        <Link
          to="/products"
          className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-deepred to-saffron text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition hover:scale-105"
        >
          <span>Continue Shopping</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const subtotal = getSubtotal();
  const delivery = getDeliveryCharge();
  const discount = getDiscountAmount();
  const total = getTotal();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <h1 className="font-serif text-2xl md:text-3xl font-extrabold text-deepred mb-8 pb-2 border-b border-marigold/10">
        Shopping Cart ({cart.length} Items)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Cart Items Table */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cart.map((item, index) => {
            const hasOptions = item.selectedSize || item.selectedColor;
            const isWish = isInWishlist(item.id);

            return (
              <div
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                className="bg-white rounded-2xl border border-marigold/15 p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow relative"
              >
                {/* Product Image */}
                <div className="w-24 h-20 sm:w-28 sm:h-24 bg-cream-light rounded-xl overflow-hidden shrink-0 border border-marigold/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info and Actions */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header: Title and Trash */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-sm sm:text-base font-bold text-gray-800 line-clamp-1 hover:text-saffron transition-colors">
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                        className="text-gray-400 hover:text-rose-500 transition p-1 hover:bg-rose-50 rounded-full shrink-0"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Options (Size, Color) */}
                    {hasOptions && (
                      <div className="flex flex-wrap gap-2 text-[10px] font-bold text-gray-500 mt-1">
                        {item.selectedSize && (
                          <span className="bg-cream border border-marigold/20 px-2 py-0.5 rounded">
                            Size: {item.selectedSize}
                          </span>
                        )}
                        {item.selectedColor && (
                          <span className="bg-cream border border-marigold/20 px-2 py-0.5 rounded">
                            Color: {item.selectedColor}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Footer Row: Quantity and Price */}
                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity controls */}
                    <div className="flex items-center justify-between border border-marigold/30 rounded-xl p-0.5 bg-cream-light w-24">
                      <button
                        onClick={() =>
                          updateCartQuantity(item.id, item.quantity - 1, item.selectedSize, item.selectedColor)
                        }
                        className="w-6.5 h-6.5 flex items-center justify-center hover:bg-marigold/20 text-deepred font-bold rounded-lg transition text-xs"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-gray-800 w-3 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateCartQuantity(item.id, item.quantity + 1, item.selectedSize, item.selectedColor)
                        }
                        className="w-6.5 h-6.5 flex items-center justify-center hover:bg-marigold/20 text-deepred font-bold rounded-lg transition text-xs"
                      >
                        +
                      </button>
                    </div>

                    {/* Price total */}
                    <div className="text-right">
                      <span className="text-sm font-extrabold text-deepred block">
                        ₹{item.price * item.quantity}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        (₹{item.price} each)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Continue Shopping button */}
          <Link
            to="/products"
            className="w-full text-center border-2 border-marigold text-deepred hover:bg-cream font-bold py-3 rounded-xl transition mt-2 flex items-center justify-center gap-2 text-sm"
          >
            <span>Continue Shopping</span>
          </Link>
        </div>

        {/* Right Side: Order Summary Card */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-3xl border border-marigold/15 p-6 shadow-sm flex flex-col gap-5">
            <h3 className="font-serif text-base font-bold text-deepred border-b border-marigold/10 pb-3">
              Order Summary
            </h3>

            {/* Calculations List */}
            <div className="flex flex-col gap-3 text-sm text-gray-600 font-light">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-gray-800">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges:</span>
                {delivery === 0 ? (
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded text-xs">
                    FREE
                  </span>
                ) : (
                  <span className="font-bold text-gray-800">₹{delivery}</span>
                )}
              </div>
              {delivery > 0 && (
                <p className="text-[10px] text-saffron font-bold text-right -mt-2">
                  Add ₹{999 - subtotal} more for FREE Delivery
                </p>
              )}
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Discount Applied ({activeCoupon?.code}):</span>
                  <span>- ₹{discount}</span>
                </div>
              )}

              {/* Total Row */}
              <div className="border-t border-marigold/10 pt-4 mt-2 flex justify-between text-base font-extrabold text-gray-800">
                <span>Total Amount:</span>
                <span className="text-lg text-deepred">₹{total}</span>
              </div>
            </div>

            {/* Coupon Code Input */}
            <div className="border-t border-marigold/10 pt-4 mt-1">
              {activeCoupon ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-emerald-800">
                        {activeCoupon.code} Applied!
                      </p>
                      <p className="text-[10px] text-emerald-600 font-light">
                        {activeCoupon.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="p-1 hover:bg-emerald-100 rounded-full text-emerald-700"
                    title="Remove coupon"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Coupon (PUJA10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 bg-cream-light border border-marigold/45 focus:border-saffron rounded-lg py-2 px-3 text-xs outline-none uppercase font-bold"
                  />
                  <button
                    type="submit"
                    className="bg-deepred hover:bg-deepred-light text-white font-bold py-2 px-4 rounded-lg text-xs transition cursor-pointer"
                  >
                    Apply
                  </button>
                </form>
              )}
              {couponError && (
                <p className="text-[10px] text-rose-500 font-semibold mt-1.5 pl-1">
                  {couponError}
                </p>
              )}
            </div>

            {/* Checkout CTA */}
            <button
              onClick={handleCheckout}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-deepred to-saffron hover:from-saffron hover:to-deepred text-white font-bold py-3.5 rounded-xl shadow-md transition hover:scale-[1.02] active:scale-95 border-b-2 border-orange-800 cursor-pointer text-sm"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Info Box */}
          <div className="bg-cream-light border border-marigold/20 rounded-2xl p-4 text-[11px] text-gray-500 font-light flex flex-col gap-1">
            <p className="font-bold text-gray-700">📌 Demo Offers:</p>
            <p>• Apply <span className="font-bold text-deepred">PUJA10</span> at checkout for 10% discount.</p>
            <p>• Shipping is free for orders above ₹999.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
