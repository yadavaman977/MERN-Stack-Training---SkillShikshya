
import { useData } from "../context/DataContextValue";
import { useNavigate } from "react-router-dom";
import {
  Armchair,
  ArrowUpRight,
  Dumbbell,
  Glasses,
  House,
  Laptop,
  PackageOpen,
  Shirt,
  ShoppingBasket,
  Smartphone,
  Sparkles,
  Watch,
} from "lucide-react";

const featuredCategories = [
  "smartphones",
  "laptops",
  "mens-shirts",
  "womens-dresses",
  "furniture",
  "beauty",
];

const getCategoryIcon = (category) => {
  if (/smartphone|mobile|tablet/.test(category)) return Smartphone;
  if (/laptop/.test(category)) return Laptop;
  if (/shirt|dress|tops|shoes/.test(category)) return Shirt;
  if (/watch/.test(category)) return Watch;
  if (/jewellery|sunglasses/.test(category)) return Glasses;
  if (/furniture/.test(category)) return Armchair;
  if (/home-decoration|kitchen/.test(category)) return House;
  if (/beauty|fragrances|skin-care/.test(category)) return Sparkles;
  if (/groceries/.test(category)) return ShoppingBasket;
  if (/sports/.test(category)) return Dumbbell;
  return PackageOpen;
};

const formatCategoryName = (category) =>
  category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const Category = () => {
  const navigate = useNavigate();
  const { categoryOnlyData, data, loading, error, fetchAllProducts } = useData();
  const homeCategories = featuredCategories.filter((category) =>
    categoryOnlyData.includes(category)
  );

  return (
    <section className="border-y border-gray-100 bg-gray-50/70">
      <div className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">
              Find what you need
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Shop by category
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Explore our collection and discover something for every part of
              your day.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-red-600 transition hover:text-red-700 sm:inline-flex"
          >
            View all products
            <ArrowUpRight size={17} />
          </button>
        </div>

        {categoryOnlyData.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {homeCategories.map((item) => {
              const Icon = getCategoryIcon(item);
              const products = data.filter(
                (product) => product.category === item
              );
              const image = products[0]?.thumbnail || products[0]?.images?.[0];

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => navigate(`/category/${item}`)}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <span className="relative block aspect-[4/3] overflow-hidden bg-gray-100">
                    {image ? (
                      <img
                        src={image}
                        alt={formatCategoryName(item)}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center bg-red-50 text-red-600">
                        <Icon size={32} strokeWidth={1.6} />
                      </span>
                    )}
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-gray-700 shadow-sm">
                      {products.length}{" "}
                      {products.length === 1 ? "item" : "items"}
                    </span>
                  </span>
                  <span className="flex min-h-14 items-center justify-between gap-2 px-3 py-3 sm:px-4">
                    <span className="text-sm font-semibold text-gray-900 sm:text-base">
                      {formatCategoryName(item)}
                    </span>
                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-gray-400 transition group-hover:text-red-600"
                    />
                  </span>
                </button>
              );
            })}
          </div>
        ) : loading ? (
          <div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            aria-label="Loading categories"
          >
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                <div className="aspect-[4/3] animate-pulse bg-gray-200" />
                <div className="h-14 animate-pulse bg-gray-50" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-100 bg-white px-5 py-8 text-center">
            <p className="text-sm text-gray-600">{error}</p>
            <button
              type="button"
              onClick={fetchAllProducts}
              className="mt-3 text-sm font-semibold text-red-600 hover:text-red-700"
            >
              Try again
            </button>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => navigate("/products")}
          className="mt-5 inline-flex w-full items-center justify-center gap-1 rounded-xl border border-red-200 bg-white px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50 sm:hidden"
        >
          View all products
          <ArrowUpRight size={17} />
        </button>
      </div>
    </section>
  );
};

export default Category;
