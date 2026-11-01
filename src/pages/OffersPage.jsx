import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Sidebar from '../components/Sidebar';
import { offers } from '../data/mockData';
import { Tag, Sparkles, Copy, Check, ArrowLeft } from 'lucide-react';

const OffersPage = () => {
  const { applyCoupon, activeCoupon } = useAppContext();
  const navigate = useNavigate();

  const handleApplyCoupon = (code) => {
    applyCoupon(code);
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      {/* Title */}
      <div className="text-center mb-8 flex flex-col items-center">
        <div className="flex items-center gap-1 mb-2">
          <Sparkles className="w-4 h-4 text-saffron" />
          <span className="text-xs font-bold text-saffron uppercase tracking-widest">Festive Celebrations</span>
          <Sparkles className="w-4 h-4 text-saffron" />
        </div>
        <h1 className="font-serif text-2xl md:text-3xl font-extrabold text-deepred">
          Sacred Discounts & Offers
        </h1>
        <p className="text-xs text-gray-500 font-light mt-1 max-w-sm">
          Save on your auspicious purchases with our handpicked festive coupon combinations.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Navigation Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-deepred hover:text-saffron font-bold text-sm mb-6 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          {/* Grid Layout of Offers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offers.map((off) => {
              const isActive = activeCoupon && activeCoupon.code === off.code;

              return (
                <div
                  key={off.id}
                  className="bg-white rounded-3xl border border-marigold/20 p-5 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow border-b-4 border-b-saffron"
                >
                  {/* Decorative background circle */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-saffron/5 rounded-full group-hover:scale-110 transition-transform duration-300"></div>

                  <div>
                    {/* Header Card */}
                    <div className="flex items-start justify-between mb-3">
                      <span className="bg-saffron/10 border border-saffron/20 text-deepred text-xs font-extrabold px-3 py-1 rounded-lg flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5" />
                        <span>{off.value}</span>
                      </span>
                      {isActive && (
                        <span className="text-[10px] bg-emerald-50 text-emerald-600 font-bold border border-emerald-200 px-2 py-0.5 rounded-md">
                          ACTIVE IN SESSION
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-base font-bold text-gray-800 mb-1.5">
                      {off.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-500 font-light leading-relaxed mb-4">
                      {off.description}
                    </p>
                  </div>

                  {/* Coupon Code copy and apply row */}
                  <div className="flex items-center justify-between border-t border-marigold/10 pt-3.5 mt-2 bg-cream-light/35 p-3 rounded-xl">
                    <div className="font-mono text-sm font-bold text-deepred uppercase tracking-wider select-all">
                      {off.code}
                    </div>

                    <button
                      onClick={() => handleApplyCoupon(off.code)}
                      className={`text-xs font-bold py-1.5 px-4 rounded-lg transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-deepred hover:bg-deepred-light text-white shadow-sm active:scale-95'
                      }`}
                    >
                      {isActive ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Applied</span>
                        </>
                      ) : (
                        <span>Apply Coupon</span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
