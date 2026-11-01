import { useEffect, useMemo, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

import { useData } from "../context/DataContextValue";
import FilterSection from "../components/FilterSection";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";

const USD_TO_NPR = 135;
const MIN_PRICE = 0;
const MAX_PRICE = 200000;
const PRODUCTS_PER_PAGE = 9;

const LOADING_ANIMATION =
  "https://lottie.host/6f6228eb-8f18-4877-b531-2611430bb669/53jIxsItJM.lottie";

const NO_PRODUCTS_ANIMATION =
  "https://lottie.host/6a4c2cdb-bda8-41d9-b9e1-c60416b532af/u2ZTUoVkez.lottie";

const Products = () => {
  const { data, fetchAllProducts, loading, error } = useData();
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const [category, setCategory] = useState(["All"]);
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([
    MIN_PRICE,
    MAX_PRICE,
  ]);
  const [currentPage, setCurrentPage] = useState(1);

  const setSearch = (value) => {
    const updatedParams = new URLSearchParams(searchParams);

    if (value) {
      updatedParams.set("search", value);
    } else {
      updatedParams.delete("search");
    }

    setSearchParams(updatedParams, { replace: true });
    setCurrentPage(1);
  };

  // Fetch products when the page mounts.
  // Avoid fetching again if the context already has products.
  useEffect(() => {
    if (data.length === 0 && !loading) {
      fetchAllProducts();
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [data.length, loading, fetchAllProducts]);

  // Filter products by search, category, brand, and NPR price.
  const filteredProducts = useMemo(() => {
    return data.filter((product) => {
      const searchText = search.trim().toLowerCase();

      const matchesSearch =
        product.title?.toLowerCase().includes(searchText) ||
        product.description?.toLowerCase().includes(searchText);

      const matchesCategory =
        category.includes("All") ||
        category.includes(product.category);

      const matchesBrand =
        brand === "All" || product.brand === brand;

      const priceNPR = Number(product.price || 0) * USD_TO_NPR;

      const matchesPrice =
        priceNPR >= priceRange[0] &&
        priceNPR <= priceRange[1];

      return (
        matchesSearch &&
        matchesCategory &&
        matchesBrand &&
        matchesPrice
      );
    });
  }, [data, search, category, brand, priceRange]);

  // Pagination.
  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Clear all filters.
  const clearFilters = () => {
    setSearch("");
    setCategory(["All"]);
    setBrand("All");
    setPriceRange([MIN_PRICE, MAX_PRICE]);
    setCurrentPage(1);
    toast.success("Filters cleared.");
  };

  // Loading state.
  if (loading && data.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4">
        <div className="h-[200px] w-full max-w-[240px]">
          <DotLottieReact
            src={LOADING_ANIMATION}
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <p className="mt-2 text-sm font-medium text-gray-500">
          Loading products...
        </p>
      </div>
    );
  }

  // API error.
  if (error && data.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 text-center">
        <h2 className="text-xl font-bold text-gray-900">
          Unable to load products
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Please check your internet connection and try again.
        </p>

        <button
          type="button"
          onClick={fetchAllProducts}
          className="mt-5 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

        {/* Page Heading */}
        <div className="mb-6 border-b border-gray-200 pb-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                All Products
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Discover products for your everyday needs.
              </p>
            </div>

            <span className="rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-600">
              {filteredProducts.length} products
            </span>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-8">

          {/* Filters */}
          <aside className="min-w-0 lg:sticky lg:top-24">
            <FilterSection
              search={search}
              setSearch={(value) => {
                setSearch(value);
                setCurrentPage(1);
              }}
              category={category}
              setCategory={(value) => {
                setCategory(value);
                setCurrentPage(1);
              }}
              brand={brand}
              setBrand={(value) => {
                setBrand(value);
                setCurrentPage(1);
              }}
              priceRange={priceRange}
              setPriceRange={(value) => {
                setPriceRange(value);
                setCurrentPage(1);
              }}
              minPrice={MIN_PRICE}
              maxPrice={MAX_PRICE}
              clearFilters={clearFilters}
            />
          </aside>

          {/* Product Results */}
          <main className="min-w-0">
            {filteredProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:gap-5">
                  {currentProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      priceNPR={
                        Number(product.price || 0) * USD_TO_NPR
                      }
                    />
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-8">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />

                  <p className="mt-3 text-center text-xs text-gray-500">
                    Showing {startIndex + 1}–
                    {Math.min(
                      startIndex + PRODUCTS_PER_PAGE,
                      filteredProducts.length
                    )}{" "}
                    of {filteredProducts.length} products
                  </p>
                </div>
              </>
            ) : (
              /* No Products Found */
              <div className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-8 text-center">
                <div className="h-[220px] w-full max-w-[240px]">
                  <DotLottieReact
                    src={NO_PRODUCTS_ANIMATION}
                    loop
                    autoplay
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>

                <h2 className="mt-3 text-xl font-bold text-gray-900">
                  No products found
                </h2>

                <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                  Try changing your search or filters to find products.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-5 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

export default Products;
