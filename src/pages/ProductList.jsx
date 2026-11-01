import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import { products, categories, subcategories } from '../data/mockData';
import { Filter, SlidersHorizontal, ArrowUpDown, RefreshCw, Star } from 'lucide-react';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get initial values from URL search params
  const categoryParam = searchParams.get('category') || 'all';
  const subcategoryParam = searchParams.get('subcategory') || 'all';
  const searchQuery = searchParams.get('search') || '';

  // Filter States
  const [selectedCategories, setSelectedCategories] = useState(
    categoryParam !== 'all' ? [categoryParam] : []
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategoryParam);
  const [priceRange, setPriceRange] = useState(1500); // Max product price is around 1299
  const [minRating, setMinRating] = useState(0);
  const [onlyInStock, setOnlyInStock] = useState(false);

  // Sorting State
  const [sortBy, setSortBy] = useState('popularity'); // popularity, priceLowHigh, priceHighLow, newArrivals

  // Reset filters if category param changes from outer navigation
  useEffect(() => {
    if (categoryParam !== 'all') {
      setSelectedCategories([categoryParam]);
      setSelectedSubcategory('all');
    } else {
      setSelectedCategories([]);
      setSelectedSubcategory('all');
    }
  }, [categoryParam]);

  useEffect(() => {
    setSelectedSubcategory(subcategoryParam);
  }, [subcategoryParam]);

  // Sync Category Checkboxes
  const handleCategoryCheckboxChange = (catId) => {
    setSelectedSubcategory('all'); // Reset subcategory when changing categories
    if (selectedCategories.includes(catId)) {
      const updated = selectedCategories.filter((id) => id !== catId);
      setSelectedCategories(updated);
      updateURLParams(updated, 'all');
    } else {
      const updated = [...selectedCategories, catId];
      setSelectedCategories(updated);
      updateURLParams(updated, 'all');
    }
  };

  const updateURLParams = (cats, subcat) => {
    const params = {};
    if (searchQuery) params.search = searchQuery;
    if (cats.length === 1) {
      params.category = cats[0];
    } else if (cats.length > 1) {
      // Keep first selected category in URL
      params.category = cats[0];
    }
    if (subcat && subcat !== 'all') {
      params.subcategory = subcat;
    }
    setSearchParams(params);
  };

  const handleSubcategoryClick = (subcatId) => {
    const newSubcat = selectedSubcategory === subcatId ? 'all' : subcatId;
    setSelectedSubcategory(newSubcat);
    updateURLParams(selectedCategories, newSubcat);
  };

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setSelectedSubcategory('all');
    setPriceRange(1500);
    setMinRating(0);
    setOnlyInStock(false);
    setSortBy('popularity');
    setSearchParams({});
  };

  // Filter & Sort Logic
  const filteredProducts = products.filter((prod) => {
    // Search query match
    if (searchQuery && !prod.name.toLowerCase().includes(searchQuery.toLowerCase()) && !prod.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(prod.category)) {
      return false;
    }

    // Subcategory filter (relevant mainly when 'puja-clothes' is selected)
    if (selectedSubcategory !== 'all' && prod.subcategory !== selectedSubcategory) {
      return false;
    }

    // Price filter
    if (prod.price > priceRange) {
      return false;
    }

    // Rating filter
    if (prod.rating < minRating) {
      return false;
    }

    // Stock availability
    if (onlyInStock && !prod.inStock) {
      return false;
    }

    return true;
  });

  // Sort
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'priceLowHigh') {
      return a.price - b.price;
    }
    if (sortBy === 'priceHighLow') {
      return b.price - a.price;
    }
    if (sortBy === 'popularity') {
      return b.rating - a.rating; // High rating first
    }
    if (sortBy === 'newArrivals') {
      // Sort by id for mock arrivals
      return b.id.localeCompare(a.id);
    }
    return 0;
  });

  // Determine active single category details (for showing category banners)
  const activeSingleCategory = selectedCategories.length === 1
    ? categories.find((c) => c.id === selectedCategories[0])
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      {/* Dynamic Banner Section */}
      {activeSingleCategory ? (
        <div className="relative rounded-3xl overflow-hidden border border-marigold/30 shadow-md mb-8 h-48 sm:h-64 bg-cream">
          <img
            src={activeSingleCategory.banner}
            alt={activeSingleCategory.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deepred/85 via-deepred/40 to-transparent flex flex-col justify-center px-6 sm:px-12 text-white">
            <span className="text-xs uppercase tracking-widest text-marigold font-bold font-serif mb-1">Auspicious Collection</span>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-serif">{activeSingleCategory.name}</h1>
            <p className="text-xs sm:text-sm max-w-md font-light text-cream-light/95 mt-2 leading-relaxed hidden sm:block">
              {activeSingleCategory.description}
            </p>
          </div>
        </div>
      ) : searchQuery ? (
        <div className="bg-gradient-to-r from-cream to-marigold/10 border border-marigold/20 rounded-2xl p-6 mb-8">
          <h1 className="text-xl font-bold font-serif text-deepred">
            Search Results for: <span className="italic">"{searchQuery}"</span>
          </h1>
          <p className="text-xs text-gray-500 font-light mt-1">
            Found {sortedProducts.length} items matching your criteria.
          </p>
        </div>
      ) : (
        <div className="relative rounded-3xl overflow-hidden border border-marigold/30 shadow-md mb-8 h-48 sm:h-64 bg-cream">
          <img
            src="https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=1200&q=80"
            alt="All Puja Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deepred/85 via-deepred/40 to-transparent flex flex-col justify-center px-6 sm:px-12 text-white">
            <span className="text-xs uppercase tracking-widest text-marigold font-bold font-serif mb-1">Sampoorna Samagri</span>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-serif">All Spiritual Products</h1>
            <p className="text-xs sm:text-sm max-w-md font-light text-cream-light/95 mt-2 leading-relaxed hidden sm:block">
              Explore our comprehensive range of high-quality devotional items, cotton wicks, gangajal, pure cow ghee, and deity dresses.
            </p>
          </div>
        </div>
      )}

      {/* Main Grid: Sidebar vs Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Navigation Sidebar & Product Filters */}
        <div className="w-full lg:w-64 shrink-0 flex flex-col gap-6">
          <Sidebar />

          {/* Filters card */}
          <div className="bg-white rounded-2xl border border-marigold/20 p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-marigold/10 pb-3 mb-4">
              <span className="flex items-center gap-2 font-serif text-sm font-bold text-deepred">
                <SlidersHorizontal className="w-4 h-4 text-saffron" />
                <span>Filters</span>
              </span>
              <button
                onClick={handleResetFilters}
                className="text-[11px] font-bold text-saffron hover:text-saffron-dark transition flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Category Checkboxes */}
            <div className="mb-5">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                Categories
              </h4>
              <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-2.5 text-xs text-gray-600 hover:text-deepred cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat.id)}
                      onChange={() => handleCategoryCheckboxChange(cat.id)}
                      className="rounded border-marigold text-saffron focus:ring-saffron w-3.5 h-3.5"
                    />
                    <span className="font-light">{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Max Price
                </h4>
                <span className="text-xs font-extrabold text-deepred">₹{priceRange}</span>
              </div>
              <input
                type="range"
                min="30"
                max="1500"
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-saffron cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>₹30</span>
                <span>₹1500</span>
              </div>
            </div>

            {/* Rating Stars Filter */}
            <div className="mb-5">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                Minimum Rating
              </h4>
              <div className="flex flex-col gap-2">
                {[4, 3, 2, 0].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setMinRating(rating)}
                    className={`flex items-center gap-2 text-xs font-medium py-1 px-2.5 rounded-lg border transition ${
                      minRating === rating
                        ? 'bg-saffron/10 border-saffron text-deepred'
                        : 'border-transparent text-gray-600 hover:bg-cream-light'
                    }`}
                  >
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < (rating || 5) && rating > 0
                              ? 'text-marigold fill-current'
                              : rating === 0
                              ? 'text-marigold fill-current'
                              : 'text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span>{rating === 0 ? 'All Ratings' : `& Up (${rating}+)`}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                Availability
              </h4>
              <label className="flex items-center gap-2.5 text-xs text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="rounded border-marigold text-saffron focus:ring-saffron w-3.5 h-3.5"
                />
                <span className="font-light">Only Show In Stock</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Side: Product Display Area */}
        <div className="flex-1">
          {/* Subcategory Chips - Only display when single category 'puja-clothes' is selected */}
          {selectedCategories.length === 1 && subcategories[selectedCategories[0]] && (
            <div className="bg-white rounded-2xl border border-marigold/15 p-4 mb-6 shadow-sm">
              <h3 className="text-xs font-bold text-deepred uppercase tracking-wider mb-3 flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-saffron" />
                <span>Shop by Subcategory:</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleSubcategoryClick('all')}
                  className={`py-1.5 px-4 rounded-full text-xs font-bold transition-all duration-300 ${
                    selectedSubcategory === 'all'
                      ? 'bg-gradient-to-r from-deepred to-saffron text-white shadow-sm'
                      : 'bg-cream text-gray-700 hover:bg-marigold/20'
                  }`}
                >
                  All {activeSingleCategory ? activeSingleCategory.name : 'Vastra'}
                </button>
                {subcategories[selectedCategories[0]].map((subcat) => (
                  <button
                    key={subcat.id}
                    onClick={() => handleSubcategoryClick(subcat.id)}
                    className={`py-1.5 px-4 rounded-full text-xs font-bold transition-all duration-300 ${
                      selectedSubcategory === subcat.id
                        ? 'bg-gradient-to-r from-deepred to-saffron text-white shadow-sm'
                        : 'bg-cream text-gray-700 hover:bg-marigold/20'
                    }`}
                  >
                    {subcat.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Top Control Bar */}
          <div className="bg-white border border-marigold/15 rounded-2xl p-4 mb-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
            <span className="text-xs font-bold text-gray-500">
              Showing {sortedProducts.length} of {products.length} Products
            </span>

            {/* Sorting trigger */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs text-gray-400 shrink-0 flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5 text-saffron" />
                Sort By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto text-xs bg-cream-light border border-marigold/45 focus:border-saffron rounded-lg py-1.5 px-3 outline-none text-deepred font-bold"
              >
                <option value="popularity">Popularity (Rating)</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="newArrivals">New Arrivals</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-marigold/15 p-12 text-center shadow-sm">
              <p className="text-base text-gray-500 font-light">
                No products match your current filtering options.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-4 bg-gradient-to-r from-deepred to-saffron text-white py-2 px-6 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-md"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
