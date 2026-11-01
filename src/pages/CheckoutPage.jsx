import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { ShieldCheck, ArrowLeft, CreditCard, Landmark, Truck } from 'lucide-react';

const CheckoutPage = () => {
  const {
    cart,
    user,
    getSubtotal,
    getDeliveryCharge,
    getDiscountAmount,
    getTotal,
    placeOrder,
    activeCoupon
  } = useAppContext();

  const navigate = useNavigate();

  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart');
    }
  }, [cart, navigate]);

  // Form states
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [addressLine, setAddressLine] = useState('');
  const [city, setCity] = useState('');
  const [stateName, setStateName] = useState('');
  const [pincode, setPincode] = useState('');
  const [paymentOption, setPaymentOption] = useState('cod'); // cod, upi, card

  // Autofill if user profile has saved address
  useEffect(() => {
    if (user) {
      setFullName(user.name || '');
      setMobile(user.mobile || '');
      setEmail(user.email || '');

      const defaultAddress = user.addresses?.find(addr => addr.isDefault) || user.addresses?.[0];
      if (defaultAddress) {
        setAddressLine(defaultAddress.addressLine || '');
        setCity(defaultAddress.city || '');
        setStateName(defaultAddress.state || '');
        setPincode(defaultAddress.pincode || '');
      }
    }
  }, [user]);

  const handleSavedAddressSelect = (addr) => {
    setAddressLine(addr.addressLine);
    setCity(addr.city);
    setStateName(addr.state);
    setPincode(addr.pincode);
    setFullName(addr.fullName || user.name);
    setMobile(addr.mobile || user.mobile);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!fullName || !mobile || !email || !addressLine || !city || !stateName || !pincode) {
      alert("Please fill in all the shipping address fields.");
      return;
    }

    const billingDetails = {
      fullName,
      mobile,
      email,
      addressLine,
      city,
      state: stateName,
      pincode
    };

    const orderId = placeOrder(billingDetails, paymentOption);
    if (orderId) {
      navigate(`/order-success?orderId=${orderId}`);
    }
  };

  if (cart.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      {/* Back button */}
      <button
        onClick={() => navigate('/cart')}
        className="inline-flex items-center gap-2 text-deepred hover:text-saffron font-bold text-sm mb-8 transition-colors group cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Cart</span>
      </button>

      <h1 className="font-serif text-2xl md:text-3xl font-extrabold text-deepred mb-8 pb-2 border-b border-marigold/10">
        Checkout & Payment
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Address Form & Payment */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Saved Addresses list if logged in */}
          {user && user.addresses && user.addresses.length > 0 && (
            <div className="bg-white rounded-3xl border border-marigold/15 p-6 shadow-sm">
              <h3 className="font-serif text-base font-bold text-deepred mb-3">
                Deliver to Saved Address
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {user.addresses.map((addr) => (
                  <button
                    key={addr.id}
                    onClick={() => handleSavedAddressSelect(addr)}
                    className="text-left p-3.5 rounded-xl border border-marigold/30 hover:border-saffron bg-cream-light/35 hover:bg-cream-light/60 transition flex flex-col gap-1 font-sans text-xs"
                  >
                    <div className="font-bold text-gray-800 flex items-center gap-1.5 justify-between w-full">
                      <span>{addr.fullName}</span>
                      {addr.isDefault && <span className="text-[9px] bg-saffron text-white px-1.5 py-0.5 rounded font-semibold uppercase">Default</span>}
                    </div>
                    <span className="text-gray-500 font-light truncate w-full">{addr.addressLine}</span>
                    <span className="text-gray-500 font-light">{addr.city}, {addr.state} - {addr.pincode}</span>
                    <span className="text-gray-500 font-light mt-1">📞 {addr.mobile}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Shipping Address Form */}
          <div className="bg-white rounded-3xl border border-marigold/15 p-6 shadow-sm">
            <h3 className="font-serif text-base font-bold text-deepred mb-4">
              Shipping Address
            </h3>

            <form onSubmit={handlePlaceOrder} className="flex flex-col gap-4 text-xs font-medium text-gray-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter recipient's name"
                    className="border border-marigold/45 focus:border-saffron rounded-lg py-2.5 px-3 outline-none text-gray-800 font-sans"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="border border-marigold/45 focus:border-saffron rounded-lg py-2.5 px-3 outline-none text-gray-800 font-sans"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="border border-marigold/45 focus:border-saffron rounded-lg py-2.5 px-3 outline-none text-gray-800 font-sans"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="addressLine">Delivery Address (House No, Building, Street, Area)</label>
                <input
                  type="text"
                  id="addressLine"
                  required
                  value={addressLine}
                  onChange={(e) => setAddressLine(e.target.value)}
                  placeholder="Complete street address"
                  className="border border-marigold/45 focus:border-saffron rounded-lg py-2.5 px-3 outline-none text-gray-800 font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City name"
                    className="border border-marigold/45 focus:border-saffron rounded-lg py-2.5 px-3 outline-none text-gray-800 font-sans"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    required
                    value={stateName}
                    onChange={(e) => setStateName(e.target.value)}
                    placeholder="State name"
                    className="border border-marigold/45 focus:border-saffron rounded-lg py-2.5 px-3 outline-none text-gray-800 font-sans"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    type="text"
                    id="pincode"
                    required
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="6-digit pincode"
                    className="border border-marigold/45 focus:border-saffron rounded-lg py-2.5 px-3 outline-none text-gray-800 font-sans"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Payment Method Option Selector */}
          <div className="bg-white rounded-3xl border border-marigold/15 p-6 shadow-sm">
            <h3 className="font-serif text-base font-bold text-deepred mb-4">
              Select Payment Method
            </h3>

            <div className="flex flex-col sm:flex-row gap-3">
              {/* Cash on Delivery */}
              <button
                onClick={() => setPaymentOption('cod')}
                className={`flex-1 flex items-center justify-between p-4 rounded-xl border transition ${
                  paymentOption === 'cod'
                    ? 'border-saffron bg-saffron/5 text-deepred font-bold'
                    : 'border-marigold/30 bg-white hover:bg-cream-light/35'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-saffron shrink-0" />
                  <span className="text-xs font-sans">Cash on Delivery (COD)</span>
                </div>
                <span className="w-4.5 h-4.5 rounded-full border-2 border-saffron flex items-center justify-center">
                  {paymentOption === 'cod' && <span className="w-2.5 h-2.5 bg-saffron rounded-full"></span>}
                </span>
              </button>

              {/* UPI */}
              <button
                onClick={() => setPaymentOption('upi')}
                className={`flex-1 flex items-center justify-between p-4 rounded-xl border transition ${
                  paymentOption === 'upi'
                    ? 'border-saffron bg-saffron/5 text-deepred font-bold'
                    : 'border-marigold/30 bg-white hover:bg-cream-light/35'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Landmark className="w-5 h-5 text-saffron shrink-0" />
                  <span className="text-xs font-sans">Scan UPI QR / VPA</span>
                </div>
                <span className="w-4.5 h-4.5 rounded-full border-2 border-saffron flex items-center justify-center">
                  {paymentOption === 'upi' && <span className="w-2.5 h-2.5 bg-saffron rounded-full"></span>}
                </span>
              </button>

              {/* Credit/Debit Card */}
              <button
                onClick={() => setPaymentOption('card')}
                className={`flex-1 flex items-center justify-between p-4 rounded-xl border transition ${
                  paymentOption === 'card'
                    ? 'border-saffron bg-saffron/5 text-deepred font-bold'
                    : 'border-marigold/30 bg-white hover:bg-cream-light/35'
                }`}
              >
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-saffron shrink-0" />
                  <span className="text-xs font-sans">Credit / Debit Card</span>
                </div>
                <span className="w-4.5 h-4.5 rounded-full border-2 border-saffron flex items-center justify-center">
                  {paymentOption === 'card' && <span className="w-2.5 h-2.5 bg-saffron rounded-full"></span>}
                </span>
              </button>
            </div>

            {/* UPI detail visualizer */}
            {paymentOption === 'upi' && (
              <div className="bg-cream-light border border-marigold/20 rounded-xl p-4 mt-4 text-center flex flex-col items-center justify-center gap-2">
                <p className="text-xs font-bold text-gray-700">Scan QR Code at Delivery or Pay Online:</p>
                <div className="w-28 h-28 bg-white border border-marigold/20 p-2 shadow-inner flex items-center justify-center">
                  {/* Styled fake QR box */}
                  <div className="w-full h-full bg-[radial-gradient(#8b0000_1.5px,transparent_1.5px)] bg-[size:10px_10px] opacity-70"></div>
                </div>
                <span className="text-[10px] text-gray-500 font-light">pujasewa@ybl (100% Secure Gateway)</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Order summary */}
        <div>
          <div className="bg-white rounded-3xl border border-marigold/15 p-6 shadow-sm flex flex-col gap-4 font-sans">
            <h3 className="font-serif text-base font-bold text-deepred border-b border-marigold/10 pb-3">
              Items in Order
            </h3>

            {/* List of items */}
            <div className="flex flex-col gap-3 max-h-56 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize || ''}-${item.selectedColor || ''}`}
                  className="flex items-center gap-3 border-b border-gray-50 pb-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-10 object-cover rounded-lg bg-cream-light border border-marigold/10"
                  />
                  <div className="flex-1">
                    <p className="text-xs font-bold text-gray-800 truncate">{item.name}</p>
                    <p className="text-[10px] text-gray-400 font-light">
                      Qty: {item.quantity} {item.selectedSize ? `| Size: ${item.selectedSize}` : ''}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-deepred shrink-0">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="flex flex-col gap-2.5 text-xs text-gray-600 border-t border-marigold/10 pt-4 font-light">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-gray-800">₹{getSubtotal()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery:</span>
                {getDeliveryCharge() === 0 ? (
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[10px]">FREE</span>
                ) : (
                  <span className="font-bold text-gray-800">₹{getDeliveryCharge()}</span>
                )}
              </div>
              {getDiscountAmount() > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Promo Discount ({activeCoupon?.code}):</span>
                  <span>- ₹{getDiscountAmount()}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-extrabold text-gray-800 border-t border-marigold/10 pt-3 mt-1.5">
                <span>Amount Payable:</span>
                <span className="text-base text-deepred">₹{getTotal()}</span>
              </div>
            </div>

            {/* Place Order Trigger */}
            <button
              onClick={handlePlaceOrder}
              className="w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-deepred to-saffron hover:from-saffron hover:to-deepred text-white font-bold py-3.5 rounded-xl shadow-md transition hover:scale-[1.02] active:scale-95 border-b-2 border-orange-800 cursor-pointer text-sm"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Place Order (₹{getTotal()})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
