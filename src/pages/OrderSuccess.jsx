import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { CheckCircle, ShoppingBag, Calendar, MapPin, CreditCard, Sparkles } from 'lucide-react';

const OrderSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { orders } = useAppContext();

  const orderId = searchParams.get('orderId');
  const order = orders.find((o) => o.orderId === orderId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!order) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center font-sans">
        <h2 className="font-serif text-xl font-bold text-deepred">Order Details Not Found</h2>
        <button
          onClick={() => navigate('/products')}
          className="mt-6 bg-saffron text-white py-2 px-6 rounded-full font-bold shadow-md hover:bg-saffron-dark transition"
        >
          Go to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
      {/* Visual Header Banner */}
      <div className="bg-white rounded-3xl border border-marigold/15 p-8 text-center shadow-md relative overflow-hidden flex flex-col items-center gap-4">
        {/* Saffron Sparkles Accent */}
        <div className="absolute top-4 left-4 text-marigold opacity-20">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute top-4 right-4 text-marigold opacity-20">
          <Sparkles className="w-8 h-8" />
        </div>

        {/* Success Icon */}
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 shadow-inner animate-bounce">
          <CheckCircle className="w-10 h-10" />
        </div>

        <h1 className="font-serif text-2xl md:text-3xl font-extrabold text-deepred leading-tight">
          Aapka Puja Samagri Order Safalta Purvak Place Ho Gaya Hai
        </h1>
        <p className="text-sm text-gray-500 font-light max-w-md">
          Thank you for choosing PujaSewa. Your order has been registered, and we will package your pure samagri with care.
        </p>

        <div className="bg-cream-light/60 border border-marigold/20 rounded-2xl py-3 px-6 text-sm font-bold text-gray-800 flex gap-6 mt-2">
          <div>
            <span className="text-[10px] text-gray-400 block font-normal uppercase">Order ID</span>
            <span className="text-deepred text-base">{order.orderId}</span>
          </div>
          <div className="border-r border-marigold/20"></div>
          <div>
            <span className="text-[10px] text-gray-400 block font-normal uppercase">Total Paid</span>
            <span className="text-gray-800 text-base">₹{order.total}</span>
          </div>
          <div className="border-r border-marigold/20"></div>
          <div>
            <span className="text-[10px] text-gray-400 block font-normal uppercase">Status</span>
            <span className="text-emerald-600 text-xs bg-emerald-50 px-2 py-0.5 rounded font-extrabold mt-0.5 inline-block">PLACED</span>
          </div>
        </div>
      </div>

      {/* Detailed Order Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        
        {/* Left Card: Shipment & Items */}
        <div className="bg-white rounded-3xl border border-marigold/15 p-6 shadow-sm flex flex-col gap-4">
          <h3 className="font-serif text-sm font-bold text-deepred border-b border-marigold/10 pb-2 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-saffron" />
            <span>Ordered Items</span>
          </h3>
          <div className="flex flex-col gap-3 max-h-60 overflow-y-auto pr-1">
            {order.items.map((item) => (
              <div
                key={`${item.id}-${item.selectedSize || ''}-${item.selectedColor || ''}`}
                className="flex gap-3 text-xs border-b border-gray-50 pb-3 last:border-0 last:pb-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-10 object-cover rounded-lg border border-marigold/10 shrink-0 bg-cream-light"
                />
                <div className="flex-1">
                  <p className="font-bold text-gray-800 line-clamp-1">{item.name}</p>
                  <p className="text-[10px] text-gray-400 font-light mt-0.5">
                    Qty: {item.quantity} {item.selectedSize ? `| Size: ${item.selectedSize}` : ''}
                  </p>
                </div>
                <span className="font-bold text-deepred">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card: Shipping & Billing Details */}
        <div className="bg-white rounded-3xl border border-marigold/15 p-6 shadow-sm flex flex-col gap-4">
          <h3 className="font-serif text-sm font-bold text-deepred border-b border-marigold/10 pb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-saffron" />
            <span>Delivery & Billing</span>
          </h3>
          
          <div className="flex flex-col gap-3 text-xs text-gray-600 font-light leading-relaxed">
            <div>
              <span className="font-semibold text-gray-800 block">Recipient Address:</span>
              <p>{order.billingDetails.fullName}</p>
              <p>{order.billingDetails.addressLine}</p>
              <p>{order.billingDetails.city}, {order.billingDetails.state} - {order.billingDetails.pincode}</p>
              <p>📞 Phone: {order.billingDetails.mobile}</p>
            </div>
            
            <div className="border-t border-marigold/10 pt-3 flex items-center justify-between">
              <span className="font-semibold text-gray-800 flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-saffron" />
                Payment Option:
              </span>
              <span className="font-bold text-deepred uppercase">{order.paymentMethod}</span>
            </div>

            <div className="border-t border-marigold/10 pt-3 flex items-center justify-between">
              <span className="font-semibold text-gray-800 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-saffron" />
                Estimated Delivery:
              </span>
              <span className="text-emerald-600 font-extrabold bg-emerald-50 px-2 py-0.5 rounded">3-5 Days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Button Row */}
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => navigate('/products')}
          className="bg-gradient-to-r from-deepred to-saffron hover:from-saffron hover:to-deepred text-white font-bold py-3.5 px-8 rounded-full shadow-md transition hover:scale-105 active:scale-95 border-b-2 border-orange-800 cursor-pointer text-sm"
        >
          Continue Shopping
        </button>
        <button
          onClick={() => navigate('/orders')}
          className="bg-white border border-marigold text-deepred hover:bg-cream font-bold py-3.5 px-8 rounded-full transition text-sm"
        >
          View Order History
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
