import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { categories } from '../data/mockData';
import { ArrowLeft, Sparkles, FolderOpen } from 'lucide-react';

const CategoryPage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/products?category=${categoryId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      {/* Decorative Title Banner */}
      <div className="text-center mb-8 flex flex-col items-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-saffron" />
          <span className="text-sm font-bold text-saffron uppercase tracking-widest">Divine Assortments</span>
          <Sparkles className="w-5 h-5 text-saffron" />
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-deepred">
          Shop by Spiritual Category
        </h1>
        <p className="text-sm text-gray-500 max-w-md font-light mt-1">
          Explore our collection of authentic ritual elements, traditional outfits, and ceremony packages.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Back Button */}
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-deepred hover:text-saffron font-bold text-sm transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <FolderOpen className="w-4 h-4" />
              <span>{categories.length} Categories available</span>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="group bg-white rounded-2xl border border-marigold/15 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
              >
                <div>
                  {/* Category Image Cover */}
                  <div className="relative pt-[60%] overflow-hidden bg-cream-light">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white font-serif font-bold text-lg leading-tight">
                      {cat.name}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5">
                    <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-3">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Explore button footer */}
                <div className="px-5 pb-5 pt-1">
                  <button className="w-full flex items-center justify-center gap-2 bg-cream hover:bg-saffron text-deepred hover:text-white border border-marigold/40 py-2.5 rounded-xl font-bold text-xs transition-all duration-300">
                    <span>Explore Products</span>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
