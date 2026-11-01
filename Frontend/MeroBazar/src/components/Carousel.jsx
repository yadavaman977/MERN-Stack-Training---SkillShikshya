
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContextValue";
import { ArrowRight, ShoppingBag } from "lucide-react";



const USD_TO_NPR = 135;

const formatPrice = (price) =>
  `Rs. ${Math.round(Number(price || 0) * USD_TO_NPR).toLocaleString("en-IN")}`;

const categoryGroups = [
  {
    label: "Electronics",
    categories: ["smartphones", "laptops", "tablets", "mobile-accessories"],
    description: "Upgrade your everyday technology.",
  },
  {
    label: "Fashion",
    categories: [
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "tops",
      "womens-bags",
      "womens-dresses",
      "womens-shoes",
      "womens-watches",
      "womens-jewellery",
      "sunglasses",
    ],
    description: "Discover your style and make it yours.",
  },
  {
    label: "Home & Living",
    categories: ["furniture", "home-decoration", "kitchen-accessories"],
    description: "Make every corner feel like home.",
  },
  {
    label: "Beauty",
    categories: ["beauty", "fragrances", "skin-care"],
    description: "Your daily essentials, all in one place.",
  },
  {
    label: "Groceries",
    categories: ["groceries"],
    description: "Shop your everyday essentials.",
  },
  {
    label: "Sports & Fitness",
    categories: ["sports-accessories"],
    description: "Gear up for your next adventure.",
  },
  {
    label: "Accessories",
    categories: [
      "mobile-accessories",
      "mens-watches",
      "womens-watches",
      "womens-jewellery",
      "sunglasses",
    ],
    description: "Complete your look with the little details.",
  },
];

const Carousel = () => {
  const {
    data = [],
    fetchAllProducts,
    loading,
    error,
  } = useData();

  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data.length && typeof fetchAllProducts === "function") {
      fetchAllProducts();
    }
  }, [fetchAllProducts, data.length]);

  const featuredProducts = useMemo(() => {
    const usedIds = new Set();

    return categoryGroups
      .map((group) => {
        const product = data.find(
          (item) =>
            group.categories.includes(item.category) &&
            !usedIds.has(item.id)
        );

        if (!product) return null;

        usedIds.add(product.id);

        return {
          ...product,
          featuredCategory: group.label,
          featuredDescription: group.description,
        };
      })
      .filter(Boolean);
  }, [data]);

  useEffect(() => {
    if (featuredProducts.length < 2) return;

    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % featuredProducts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  const product = featuredProducts[activeSlide % featuredProducts.length];

  const openProduct = () => {
    if (product) {
      navigate(`/products/${product.id}`);
    }
  };
if (loading && !data.length) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex min-h-[420px] max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="h-48 w-48">
          {/* <video
            src=".../assets/loading.webm"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-contain"
          /> */}
        </div>

        <p className="mt-3 text-sm font-medium text-gray-500">
          Loading featured products...
        </p>
      </div>
    </section>
  );
}

  if (error && !data.length) {
    return (
      <section className="w-full">
        <div className="mx-auto flex min-h-[300px] max-w-7xl flex-col items-center justify-center px-4 text-center">
          <p className="text-gray-600">
            {typeof error === "string"
              ? error
              : error.message || "Unable to load products."}
          </p>

          <button
            type="button"
            onClick={fetchAllProducts}
            className="mt-4 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Try again
          </button>
        </div>
      </section>
    );
  }

  if (!product) return null;

  return (
    <section className="w-full bg-white">
      {/* Same horizontal alignment as the navbar */}
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
        <div
          key={product.id}
          className="relative grid min-h-[420px] grid-cols-1 overflow-hidden rounded-2xl border border-red-100 bg-gradient-to-r from-red-50 via-white to-gray-50 md:min-h-[400px] md:grid-cols-2 lg:min-h-[450px] animate-[fadeIn_500ms_ease-out]"
        >
          {/* Subtle background decoration */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-red-100/70 blur-3xl" />

          {/* Text content */}
          <div className="relative z-10 order-2 flex flex-col items-start justify-center px-6 pb-10 pt-3 sm:px-10 md:order-1 md:py-12 lg:px-14">
            <span className="inline-flex items-center rounded-full border border-red-100 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-red-600">
              Featured collection
            </span>

            <p className="mt-5 text-sm font-medium text-gray-500">
              Discover something special
            </p>

            <h2 className="mt-3 max-w-lg text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Great finds.
              <span className="mt-1 block text-red-600">
                {product.featuredCategory}.
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-600 sm:text-base">
              {product.featuredDescription}
            </p>

            <p className="mt-5 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {formatPrice(product.price)}
            </p>

            <button
              type="button"
              onClick={openProduct}
              className="mt-6 inline-flex items-center gap-2.5 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-red-700 active:translate-y-0"
            >
              <ShoppingBag size={18} />
              Shop now
              <ArrowRight size={17} />
            </button>
          </div>

          {/* Product image */}
          <div className="relative order-1 flex min-h-[230px] items-center justify-center overflow-hidden px-6 pb-2 pt-7 sm:min-h-[270px] md:order-2 md:min-h-full md:px-8 md:py-10">
            <div className="pointer-events-none absolute h-48 w-48 rounded-full border border-red-100 bg-white/80 sm:h-60 sm:w-60 lg:h-72 lg:w-72" />

            <img
              src={product.images?.[0] || product.thumbnail}
              alt={product.title}
              loading="eager"
              onError={(event) => {
                const image = event.currentTarget;

                if (
                  product.thumbnail &&
                  image.src !== product.thumbnail
                ) {
                  image.src = product.thumbnail;
                }
              }}
              className="relative z-10 max-h-[220px] max-w-full object-contain transition-transform duration-500 hover:scale-105 sm:max-h-[260px] md:max-h-[310px] lg:max-h-[350px]"
            />
          </div>

          {/* Slide indicators */}
          {featuredProducts.length > 1 && (
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-5">
              {featuredProducts.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Show ${item.featuredCategory} banner`}
                  aria-current={activeSlide === index ? "true" : undefined}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeSlide === index
                      ? "w-7 bg-red-600"
                      : "w-1.5 bg-gray-300 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Carousel;
