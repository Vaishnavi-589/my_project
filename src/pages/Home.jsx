import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Flame, ArrowRight, Sun, Sparkles } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream-light font-sans relative overflow-hidden flex flex-col items-center">
      {/* Decorative floral topper (Garland) */}
      <div className="w-full h-3 bg-repeating-linear-gradient(90deg, #FFC61A, #FFC61A 20px, #FF9933 20px, #FF9933 40px)"></div>

      {/* Hero Section */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col lg:flex-row items-center gap-12 z-10">
        
        {/* Left Side: Call to Action */}
        <div className="flex-1 text-center lg:text-left flex flex-col gap-6 items-center lg:items-start">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron/10 to-marigold/20 border border-saffron/30 py-1.5 px-4 rounded-full text-deepred font-bold text-sm tracking-wide shadow-sm animate-pulse">
            <Sun className="w-4 h-4 text-saffron" />
            <span>100% Satvik & Divine Quality</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-deepred leading-tight">
            Har Puja Ka Samaan, <br />
            <span className="bg-gradient-to-r from-saffron to-marigold bg-clip-text text-transparent drop-shadow-sm">
              Ek Hi Jagah
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-xl font-light leading-relaxed">
            Puja, Katha, Havan aur Har Shubh Avsar ke liye Sampoorna Samagri. Directly sourced from holy shrines and pure organic farms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <button
              onClick={() => navigate('/categories')}
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-deepred to-saffron hover:from-saffron hover:to-deepred text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border-b-4 border-orange-700 cursor-pointer"
            >
              <span>Start Buying</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/products"
              className="flex items-center justify-center gap-2 bg-white border-2 border-marigold text-deepred hover:bg-cream font-bold py-4 px-8 rounded-full shadow-md transition-all duration-300"
            >
              Explore All Items
            </Link>
          </div>
        </div>

        {/* Right Side: Devotional Banner & Diya Animation */}
        <div className="flex-1 relative w-full max-w-lg md:max-w-xl">
          {/* Saffron Aura Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-saffron/20 to-marigold/30 rounded-3xl filter blur-2xl -z-10"></div>

          {/* Premium Devotional Banner Image */}
          <div className="rounded-3xl border-4 border-marigold overflow-hidden shadow-2xl relative aspect-[4/3] bg-cream">
            <img
              src="https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=1200&q=80"
              alt="Puja Thali Diya Flowers Kalash Setup"
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            {/* Visual Accent Title on Banner */}
            <div className="absolute bottom-5 left-6 text-white font-serif">
              <p className="text-xs tracking-widest text-marigold font-bold uppercase">Shubh Mangalam</p>
              <h3 className="text-xl font-bold">Divine Puja Collections</h3>
            </div>
          </div>

          {/* Soft Floating Diya Animation */}
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-gradient-to-b from-cream to-white border border-marigold/30 rounded-2xl p-4 md:p-5 shadow-2xl flex items-center gap-4 animate-diya border-b-4 border-saffron">
            {/* Diya SVG drawing */}
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-saffron/20 rounded-full blur-sm diya-glow-orange"></div>
              {/* Flame */}
              <div className="absolute top-0 w-3 h-5 bg-gradient-to-t from-marigold to-saffron rounded-full filter drop-shadow-[0_0_6px_rgba(255,198,26,0.9)] animate-pulse"></div>
              {/* Brass Diya Body */}
              <div className="absolute bottom-1 w-10 h-6 bg-gradient-to-b from-amber-400 to-amber-600 rounded-b-full shadow-inner border-t border-amber-300"></div>
              {/* Diya Stand */}
              <div className="absolute bottom-0 w-6 h-1 bg-amber-700 rounded-full"></div>
            </div>
            <div className="font-sans">
              <div className="flex items-center gap-1 text-[11px] text-saffron font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>Holy Blessings</span>
              </div>
              <p className="text-xs text-gray-500 font-light mt-0.5">Bring home positive energies & spiritual peace.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Mandala Background Accent */}
      <div className="absolute top-1/2 left-0 right-0 h-96 mandala-bg -translate-y-1/2 pointer-events-none -z-10"></div>
    </div>
  );
};

export default Home;
