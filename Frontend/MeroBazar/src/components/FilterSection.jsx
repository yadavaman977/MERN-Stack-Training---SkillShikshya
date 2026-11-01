
import {
  FiSearch,
  FiSliders,
  FiGrid,
  FiTag,
  FiDollarSign,
  FiRotateCcw,
} from "react-icons/fi";
import { useData } from "../context/DataContextValue";

const FilterSection = ({
  search,
  setSearch,
  category,
  setCategory,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  minPrice = 0,
  maxPrice = 200000,
  clearFilters,
}) => {
  const { categoryOnlyData, getBrandsByCategories } = useData();

  const availableBrands = getBrandsByCategories(category);

  const handleCategoryChange = (selectedCategory) => {
    if (selectedCategory === "All") {
      setCategory(["All"]);
      setBrand("All");
      return;
    }

    const updatedCategories = category.includes("All")
      ? [selectedCategory]
      : category.includes(selectedCategory)
        ? category.filter((item) => item !== selectedCategory)
        : [...category, selectedCategory];

    const finalCategories =
      updatedCategories.length > 0
        ? updatedCategories
        : ["All"];

    setCategory(finalCategories);

    const updatedBrands = getBrandsByCategories(finalCategories);

    if (!updatedBrands.includes(brand)) {
      setBrand("All");
    }
  };

  const formatPrice = (price) =>
    `Rs. ${Math.round(price).toLocaleString("en-NP")}`;

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
        <div className="flex items-center gap-2">
          <FiSliders size={18} className="text-red-600" />

          <h2 className="text-base font-bold text-gray-900">
            Filters
          </h2>
        </div>

        <button
          type="button"
          onClick={clearFilters}
          className="flex items-center gap-1.5 text-xs font-semibold text-red-600 transition hover:text-red-700"
        >
          <FiRotateCcw size={13} />
          Reset
        </button>
      </div>

      <div className="space-y-5 p-4">

        {/* Search */}
        <section>
          <label
            htmlFor="product-search"
            className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-800"
          >
            <FiSearch size={16} />
            Search products
          </label>

          <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-3 transition focus-within:border-red-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-50">
            <FiSearch
              size={16}
              className="shrink-0 text-gray-400"
            />

            <input
              id="product-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Find a product..."
              className="w-full min-w-0 bg-transparent px-2 py-2.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
          </div>
        </section>

        <div className="border-t border-gray-100" />

        {/* Categories */}
        <section>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-800">
            <FiGrid size={16} />
            Categories
          </h3>

          <div className="max-h-52 space-y-1 overflow-y-auto pr-1">
            {categoryOnlyData.map((item) => {
              const checked =
                item === "All"
                  ? category.includes("All")
                  : category.includes(item);

              return (
                <label
                  key={item}
                  className={`flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition ${
                    checked
                      ? "bg-red-50 font-medium text-red-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleCategoryChange(item)}
                    className="h-4 w-4 shrink-0 accent-red-600"
                  />

                  <span className="break-words capitalize">
                    {item === "All"
                      ? "All Categories"
                      : item.replace(/-/g, " ")}
                  </span>
                </label>
              );
            })}
          </div>
        </section>

        <div className="border-t border-gray-100" />

        {/* Brand */}
        <section>
          <label
            htmlFor="brand-filter"
            className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-800"
          >
            <FiTag size={16} />
            Brand
          </label>

          <select
            id="brand-filter"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full cursor-pointer rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-50"
          >
            {availableBrands.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All Brands" : item}
              </option>
            ))}
          </select>

          {availableBrands.length === 1 && (
            <p className="mt-2 text-xs text-gray-400">
              No brand information available for these products.
            </p>
          )}
        </section>

        <div className="border-t border-gray-100" />

        {/* Price Range */}
        <section>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-800">
            <FiDollarSign size={16} />
            Price Range
          </h3>

          <div className="mb-4 grid grid-cols-2 gap-2">
            <div className="min-w-0 rounded-lg border border-gray-200 bg-gray-50 px-2 py-2">
              <p className="text-[10px] text-gray-400">
                Minimum
              </p>

              <p className="mt-1 break-words text-xs font-semibold text-gray-800">
                {formatPrice(priceRange[0])}
              </p>
            </div>

            <div className="min-w-0 rounded-lg border border-gray-200 bg-gray-50 px-2 py-2">
              <p className="text-[10px] text-gray-400">
                Maximum
              </p>

              <p className="mt-1 break-words text-xs font-semibold text-gray-800">
                {formatPrice(priceRange[1])}
              </p>
            </div>
          </div>

          <label
            htmlFor="minimum-price"
            className="mb-2 block text-xs text-gray-500"
          >
            Minimum price
          </label>

          <input
            id="minimum-price"
            type="range"
            min={minPrice}
            max={maxPrice}
            step={500}
            value={priceRange[0]}
            onChange={(e) => {
              const value = Number(e.target.value);

              setPriceRange([
                Math.min(value, priceRange[1]),
                priceRange[1],
              ]);
            }}
            className="h-1.5 w-full cursor-pointer accent-red-600"
          />

          <label
            htmlFor="maximum-price"
            className="mb-2 mt-4 block text-xs text-gray-500"
          >
            Maximum price
          </label>

          <input
            id="maximum-price"
            type="range"
            min={minPrice}
            max={maxPrice}
            step={500}
            value={priceRange[1]}
            onChange={(e) => {
              const value = Number(e.target.value);

              setPriceRange([
                priceRange[0],
                Math.max(value, priceRange[0]),
              ]);
            }}
            className="h-1.5 w-full cursor-pointer accent-red-600"
          />

          <div className="mt-2 flex justify-between text-[11px] text-gray-400">
            <span>{formatPrice(minPrice)}</span>
            <span>{formatPrice(maxPrice)}</span>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 bg-gray-50/70 p-4">
        <button
          type="button"
          onClick={clearFilters}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-2.5 text-sm font-semibold text-gray-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
        >
          <FiRotateCcw size={15} />
          Clear all filters
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
