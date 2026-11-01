import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Sidebar from '../components/Sidebar';
import { Calendar, ShoppingBag, Truck, RefreshCw, ArrowLeft } from 'lucide-react';

const OrderHistory = () => {
  const { orders, reorder } = useAppContext();
  const navigate = useNavigate();

  const handleReorderClick = (order) => {
    reorder(order);
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="font-serif text-2xl md:text-3xl font-extrabold text-deepred">
          Ordered Products & History
        </h1>
        <p className="text-xs text-gray-500 font-light mt-1">
          Review your past purchases and track active deliveries.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Navigation Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Back button */}
          <button
            onClick={() => navigate('/categories')}
            className="inline-flex items-center gap-2 text-deepred hover:text-saffron font-bold text-sm mb-6 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Explore Categories</span>
          </button>

          {orders.length === 0 ? (
            <div className="bg-white rounded-3xl border border-marigold/15 p-12 text-center shadow-sm">
              <div className="w-16 h-16 bg-cream border border-marigold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-saffron" />
              </div>
              <h3 className="font-serif text-lg font-bold text-deepred">Koi Order History Nahi Hai</h3>
              <p className="text-gray-500 font-light mt-1.5 text-xs max-w-xs mx-auto">
                You haven't placed any orders yet. Add items to your cart and place an order to see it here!
              </p>
              <button
                onClick={() => navigate('/products')}
                className="mt-6 bg-gradient-to-r from-deepred to-saffron text-white py-2 px-6 rounded-full font-bold text-xs shadow-md transition hover:scale-105 active:scale-95"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {orders.map((order) => (
                <div
                  key={order.orderId}
                  className="bg-white rounded-3xl border border-marigold/15 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Order Top Bar Header */}
                  <div className="bg-cream-light/70 border-b border-marigold/10 py-3.5 px-5 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
                    <div className="flex items-center gap-5">
                      <div>
                        <span className="text-gray-400 block font-light">ORDER PLACED</span>
                        <span className="font-bold text-gray-700 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-saffron shrink-0" />
                          {order.orderDate}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400 block font-light">TOTAL PAID</span>
                        <span className="font-bold text-deepred">₹{order.total}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block font-light">ORDER ID</span>
                        <span className="font-bold text-gray-700">{order.orderId}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleReorderClick(order)}
                      className="inline-flex items-center gap-1.5 bg-saffron/15 text-deepred hover:bg-saffron hover:text-white py-1.5 px-4 rounded-xl font-bold transition duration-300"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Reorder Items</span>
                    </button>
                  </div>

                  {/* Order Items list */}
                  <div className="p-5 flex flex-col gap-4">
                    {/* Status header */}
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 py-1.5 px-3.5 rounded-lg w-fit">
                      <Truck className="w-4 h-4 shrink-0" />
                      <span>{order.deliveryStatus}</span>
                    </div>

                    <div className="flex flex-col gap-4 mt-2">
                      {order.items.map((item) => (
                        <div
                          key={`${item.id}-${item.selectedSize || ''}-${item.selectedColor || ''}`}
                          className="flex gap-4 text-xs font-sans pb-4 last:pb-0 border-b border-gray-50 last:border-0"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-12 object-cover rounded-xl border border-marigold/10 bg-cream-light shrink-0"
                          />
                          <div className="flex-1">
                            <h4 className="font-serif text-sm font-bold text-gray-800 line-clamp-1">
                              {item.name}
                            </h4>
                            <p className="text-[10px] text-gray-400 font-light mt-0.5">
                              Quantity: {item.quantity} {item.selectedSize ? `| Size: ${item.selectedSize}` : ''} {item.selectedColor ? `| Color: ${item.selectedColor}` : ''}
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="font-bold text-deepred block">₹{item.price * item.quantity}</span>
                            <span className="text-[10px] text-gray-400">₹{item.price} each</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Billing footer */}
                  <div className="bg-cream-light/35 border-t border-marigold/5 py-3 px-5 text-[11px] text-gray-500 font-light">
                    <span>Delivered to: </span>
                    <span className="font-bold text-gray-700">{order.billingDetails.fullName}</span>
                    <span> | address: </span>
                    <span className="font-light text-gray-600">
                      {order.billingDetails.addressLine}, {order.billingDetails.city}, {order.billingDetails.state} - {order.billingDetails.pincode}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
