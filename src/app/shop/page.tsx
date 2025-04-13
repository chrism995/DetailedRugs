"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Mock product data - replace with actual API call
const PRODUCTS = [
  {
    id: "1",
    name: "Geometric Modern Rug",
    price: 249.99,
    image: "/rugs/geometric-modern.jpg",
    category: "modern",
    size: "large",
    color: "blue",
    material: "wool",
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 24,
  },
  {
    id: "2",
    name: "Persian Traditional Rug",
    price: 399.99,
    image: "/rugs/persian-traditional.jpg",
    category: "traditional",
    size: "medium",
    color: "red",
    material: "silk",
    featured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 37,
  },
  {
    id: "3",
    name: "Minimalist Nordic Rug",
    price: 199.99,
    image: "/rugs/minimalist-nordic.jpg",
    category: "modern",
    size: "small",
    color: "gray",
    material: "cotton",
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 18,
  },
  {
    id: "4",
    name: "Moroccan Berber Rug",
    price: 349.99,
    image: "/rugs/moroccan-berber.jpg",
    category: "traditional",
    size: "large",
    color: "beige",
    material: "wool",
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 42,
  },
  {
    id: "5",
    name: "Bohemian Area Rug",
    price: 279.99,
    image: "/rugs/bohemian-area.jpg",
    category: "bohemian",
    size: "medium",
    color: "multicolor",
    material: "cotton",
    featured: true,
    inStock: true,
    rating: 4.5,
    reviewCount: 31,
  },
  {
    id: "6",
    name: "Contemporary Abstract Rug",
    price: 319.99,
    image: "/rugs/contemporary-abstract.jpg",
    category: "modern",
    size: "large",
    color: "green",
    material: "synthetic",
    featured: false,
    inStock: false,
    rating: 4.4,
    reviewCount: 16,
  },
  {
    id: "7",
    name: "Oriental Pattern Rug",
    price: 499.99,
    image: "/rugs/oriental-pattern.jpg",
    category: "traditional",
    size: "large",
    color: "navy",
    material: "wool",
    featured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 53,
  },
  {
    id: "8",
    name: "Scandinavian Minimal Rug",
    price: 229.99,
    image: "/rugs/scandinavian-minimal.jpg",
    category: "modern",
    size: "small",
    color: "white",
    material: "wool",
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 29,
  },
];

// Filter options
const CATEGORIES = ["all", "modern", "traditional", "bohemian", "custom"];
const SIZES = ["all", "small", "medium", "large"];
const COLORS = [
  "all",
  "blue",
  "red",
  "gray",
  "beige",
  "green",
  "navy",
  "white",
  "multicolor",
];
const MATERIALS = ["all", "wool", "cotton", "silk", "synthetic"];
const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
];

export default function ShopPage() {
  const [products, setProducts] = useState(PRODUCTS);
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    category: "all",
    size: "all",
    color: "all",
    material: "all",
    inStock: false,
    priceRange: [0, 1000],
  });
  const [sortBy, setSortBy] = useState("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Apply filters and sorting
  useEffect(() => {
    let filteredProducts = [...PRODUCTS];

    // Apply category filter
    if (activeFilters.category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === activeFilters.category
      );
    }

    // Apply size filter
    if (activeFilters.size !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.size === activeFilters.size
      );
    }

    // Apply color filter
    if (activeFilters.color !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === activeFilters.color
      );
    }

    // Apply material filter
    if (activeFilters.material !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.material === activeFilters.material
      );
    }

    // Apply in stock filter
    if (activeFilters.inStock) {
      filteredProducts = filteredProducts.filter((product) => product.inStock);
    }

    // Apply price range filter
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= activeFilters.priceRange[0] &&
        product.price <= activeFilters.priceRange[1]
    );

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        // For mock data we'll just reverse the array to simulate newest
        filteredProducts.reverse();
        break;
      case "featured":
      default:
        filteredProducts.sort((a, b) =>
          a.featured === b.featured ? 0 : a.featured ? -1 : 1
        );
        break;
    }

    setProducts(filteredProducts);
  }, [activeFilters, sortBy, searchQuery]);

  interface ActiveFilters {
    category: string;
    size: string;
    color: string;
    material: string;
    inStock: boolean;
    priceRange: [number, number];
  }

  type FilterType = keyof ActiveFilters;

  const updateFilter = (
    filterType: FilterType,
    value: string | boolean | [number, number]
  ) => {
    setActiveFilters((prev: ActiveFilters) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  interface PriceRangeChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { value: string };
  }

  const handlePriceRangeChange = (
    e: PriceRangeChangeEvent,
    index: number
  ): void => {
    const value = parseInt(e.target.value);
    setActiveFilters((prev) => {
      const newRange: [number, number] = [...prev.priceRange] as [
        number,
        number
      ];
      newRange[index] = value;
      return { ...prev, priceRange: newRange };
    });
  };

  const resetFilters = () => {
    setActiveFilters({
      category: "all",
      size: "all",
      color: "all",
      material: "all",
      inStock: false,
      priceRange: [0, 1000],
    });
    setSortBy("featured");
    setSearchQuery("");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="lg:flex gap-8">
          {/* Mobile filter button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 flex justify-between items-center"
            >
              <span className="font-medium">Filters</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform ${
                  isMobileFilterOpen ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Filters sidebar */}
          <div
            className={`lg:w-1/4 ${
              isMobileFilterOpen ? "block" : "hidden lg:block"
            }`}
          >
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={resetFilters}
                  className="text-sm text-indigo-600 hover:text-indigo-800"
                >
                  Reset All
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label
                  htmlFor="search"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Search rugs..."
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Category filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        id={`category-${category}`}
                        name="category"
                        value={category}
                        type="radio"
                        checked={activeFilters.category === category}
                        onChange={() => updateFilter("category", category)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <label
                        htmlFor={`category-${category}`}
                        className="ml-3 text-sm text-gray-700 capitalize"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
                <div className="space-y-2">
                  {SIZES.map((size) => (
                    <div key={size} className="flex items-center">
                      <input
                        id={`size-${size}`}
                        name="size"
                        value={size}
                        type="radio"
                        checked={activeFilters.size === size}
                        onChange={() => updateFilter("size", size)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <label
                        htmlFor={`size-${size}`}
                        className="ml-3 text-sm text-gray-700 capitalize"
                      >
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Color
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {COLORS.map((color) => (
                    <div
                      key={color}
                      onClick={() => updateFilter("color", color)}
                      className={`cursor-pointer rounded-md flex flex-col items-center justify-center p-2 ${
                        activeFilters.color === color
                          ? "ring-2 ring-indigo-500"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {color === "all" ? (
                        <div className="h-6 w-6 bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-full"></div>
                      ) : (
                        <div
                          className={`h-6 w-6 rounded-full border ${
                            color === "multicolor"
                              ? "bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"
                              : `bg-${
                                  color === "navy"
                                    ? "blue-800"
                                    : color === "beige"
                                    ? "yellow-100"
                                    : color
                                }-500`
                          }`}
                        ></div>
                      )}
                      <span className="text-xs mt-1 capitalize">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Material
                </h3>
                <select
                  value={activeFilters.material}
                  onChange={(e) => updateFilter("material", e.target.value)}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {MATERIALS.map((material) => (
                    <option key={material} value={material}>
                      {material.charAt(0).toUpperCase() + material.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Price Range
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="min-price"
                      className="text-xs text-gray-500"
                    >
                      Min ($)
                    </label>
                    <input
                      type="number"
                      id="min-price"
                      value={activeFilters.priceRange[0]}
                      onChange={(e) => handlePriceRangeChange(e, 0)}
                      className="w-full border border-gray-300 rounded-md py-1 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="max-price"
                      className="text-xs text-gray-500"
                    >
                      Max ($)
                    </label>
                    <input
                      type="number"
                      id="max-price"
                      value={activeFilters.priceRange[1]}
                      onChange={(e) => handlePriceRangeChange(e, 1)}
                      className="w-full border border-gray-300 rounded-md py-1 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* In Stock filter */}
              <div className="flex items-center mb-6">
                <input
                  id="in-stock"
                  name="in-stock"
                  type="checkbox"
                  checked={activeFilters.inStock}
                  onChange={(e) => updateFilter("inStock", e.target.checked)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="in-stock"
                  className="ml-2 text-sm text-gray-700"
                >
                  In Stock Only
                </label>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-sm text-gray-500">
                    Showing{" "}
                    <span className="font-medium">{products.length}</span>{" "}
                    results
                  </p>
                </div>
                <div className="flex items-center">
                  <label
                    htmlFor="sort-by"
                    className="text-sm font-medium text-gray-700 mr-2"
                  >
                    Sort by:
                  </label>
                  <select
                    id="sort-by"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-md py-1.5 pl-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Active filters */}
            {(activeFilters.category !== "all" ||
              activeFilters.size !== "all" ||
              activeFilters.color !== "all" ||
              activeFilters.material !== "all" ||
              activeFilters.inStock ||
              searchQuery) && (
              <div className="bg-white rounded-lg shadow p-4 mb-6">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-medium text-gray-700">
                    Active Filters:
                  </span>

                  {activeFilters.category !== "all" && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      Category: {activeFilters.category}
                      <button
                        onClick={() => updateFilter("category", "all")}
                        className="ml-1 text-indigo-600 hover:text-indigo-900"
                      >
                        <svg
                          className="h-3 w-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  )}

                  {activeFilters.size !== "all" && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      Size: {activeFilters.size}
                      <button
                        onClick={() => updateFilter("size", "all")}
                        className="ml-1 text-indigo-600 hover:text-indigo-900"
                      >
                        <svg
                          className="h-3 w-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  )}

                  {activeFilters.color !== "all" && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      Color: {activeFilters.color}
                      <button
                        onClick={() => updateFilter("color", "all")}
                        className="ml-1 text-indigo-600 hover:text-indigo-900"
                      >
                        <svg
                          className="h-3 w-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  )}

                  {activeFilters.material !== "all" && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      Material: {activeFilters.material}
                      <button
                        onClick={() => updateFilter("material", "all")}
                        className="ml-1 text-indigo-600 hover:text-indigo-900"
                      >
                        <svg
                          className="h-3 w-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  )}

                  {activeFilters.inStock && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      In Stock Only
                      <button
                        onClick={() => updateFilter("inStock", false)}
                        className="ml-1 text-indigo-600 hover:text-indigo-900"
                      >
                        <svg
                          className="h-3 w-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  )}

                  {searchQuery && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      Search: {searchQuery}
                      <button
                        onClick={() => setSearchQuery("")}
                        className="ml-1 text-indigo-600 hover:text-indigo-900"
                      >
                        <svg
                          className="h-3 w-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  )}

                  <button
                    onClick={resetFilters}
                    className="text-sm text-indigo-600 hover:text-indigo-800 ml-auto"
                  >
                    Clear all
                  </button>
                </div>
              </div>
            )}

            {/* Products grid */}
            {products.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  No products found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or filter to find what you&#39;re
                  looking for.
                </p>
                <div className="mt-6">
                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Reset filters
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition"
                  >
                    <Link href={`/product/${product.id}`}>
                      <div className="relative h-64 bg-gray-200">
                        {/* Replace with actual images when available */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-gray-500 font-medium">
                            {product.name} Image
                          </p>
                        </div>

                        {product.featured && (
                          <div className="absolute top-0 left-0 m-2">
                            <div className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">
                              Featured
                            </div>
                          </div>
                        )}

                        {!product.inStock && (
                          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                            <p className="text-white font-bold text-lg">
                              Out of Stock
                            </p>
                          </div>
                        )}
                      </div>
                    </Link>

                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            <Link href={`/product/${product.id}`}>
                              {product.name}
                            </Link>
                          </h3>
                          <p className="text-sm text-gray-500 capitalize mb-2">
                            {product.material} | {product.size} |{" "}
                            {product.color}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1 text-sm text-gray-600">
                            {product.rating} ({product.reviewCount})
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900">
                          ${product.price.toFixed(2)}
                        </span>
                        <button
                          disabled={!product.inStock}
                          className={`rounded-md px-3.5 py-1.5 text-sm font-semibold shadow-sm ${
                            product.inStock
                              ? "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
