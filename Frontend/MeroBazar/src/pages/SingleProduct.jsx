
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoCartOutline, IoFlashOutline } from "react-icons/io5";
import { toast } from "react-toastify";

import Breadcrums from "../components/Breadcrums";
import { useCart } from "../context/CartContextValue";
import { getProductOptions } from "../utils/productOptions";

const USD_TO_NPR = 135;

const SingleProduct = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [singleProduct, setSingleProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const getSingleProduct = async () => {
      try {
        setLoading(true);
        setError("");
        setSingleProduct(null);
        setQuantity(1);
        setSelectedSize("");
        setSelectedColor("");

        const response = await axios.get(
          `https://dummyjson.com/products/${id}`,
          { timeout: 10000 }
        );

        if (!cancelled) {
          setSingleProduct(response.data);
        }
      } catch (err) {
        console.error("Product fetch failed:", err);

        if (!cancelled) {
          setError("Unable to load this product. Please try again.");
          toast.error("Unable to load this product. Please try again.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    getSingleProduct();

    return () => {
      cancelled = true;
    };
  }, [id]);

  const formatNPR = (price) =>
    `Rs. ${Math.round(
      Number(price || 0) * USD_TO_NPR
    ).toLocaleString("en-NP")}`;

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-red-600" />
          <p className="mt-4 font-medium text-gray-600">
            Loading product details...
          </p>
        </div>
      </div>
    );
  }

  if (error || !singleProduct) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Product Not Found
        </h2>

        <p className="mt-2 text-gray-600">
          {error || "This product is unavailable."}
        </p>

        <Link
          to="/products"
          className="mt-5 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  const discount = Number(singleProduct.discountPercentage || 0);

  const originalPrice =
    discount < 100 && discount > 0
      ? singleProduct.price / (1 - discount / 100)
      : singleProduct.price;

  const productOptions = getProductOptions(singleProduct?.category);

  const handleAddToCart = () => {
    if (
      (productOptions.sizes.length && !selectedSize) ||
      (productOptions.colors.length && !selectedColor)
    ) {
      toast.info("Select your size and color before adding to cart.");
      return;
    }

    addToCart(singleProduct, quantity, {
      size: selectedSize,
      color: selectedColor,
    });
  };

  const handleBuyNow = () => {
    if (
      (productOptions.sizes.length && !selectedSize) ||
      (productOptions.colors.length && !selectedColor)
    ) {
      toast.info("Select your size and color before continuing.");
      return;
    }

    addToCart(singleProduct, quantity, {
      size: selectedSize,
      color: selectedColor,
    });
    navigate("/checkout");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 pb-12">
      <div className="mx-auto max-w-7xl">
        <Breadcrums title={singleProduct.title} />

        <div className="grid grid-cols-1 gap-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">
          {/* Product Image */}
          <div className="flex min-h-[320px] items-center justify-center rounded-2xl bg-gray-50 p-6 md:min-h-[450px]">
            <img
              src={
                singleProduct.thumbnail ||
                singleProduct.images?.[0]
              }
              alt={singleProduct.title}
              className="max-h-[420px] w-full object-contain"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src =
                  "https://placehold.co/500x500?text=No+Image";
              }}
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center gap-5">
            <span className="w-fit rounded-full bg-red-50 px-3 py-1 text-sm font-semibold capitalize text-red-600">
              {singleProduct.category}
            </span>

            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
              {singleProduct.title}
            </h1>

            {singleProduct.brand && (
              <p className="text-sm text-gray-500">
                Brand: {singleProduct.brand}
              </p>
            )}

            {/* Rating */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-lg text-yellow-500">★</span>
              <span className="font-semibold text-gray-800">
                {singleProduct.rating ?? "N/A"}
              </span>
              <span className="text-gray-500">
                Customer rating
              </span>
            </div>

            {/* Price */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-3xl font-bold text-red-600">
                {formatNPR(singleProduct.price)}
              </span>

              {discount > 0 && discount < 100 && (
                <>
                  <span className="text-lg text-gray-400 line-through">
                    {formatNPR(originalPrice)}
                  </span>

                  <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-600">
                    {Math.round(discount)}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-sm leading-7 text-gray-600 md:text-base">
              {singleProduct.description}
            </p>

            {productOptions.colors.length > 0 && (
              <fieldset>
                <legend className="mb-2 text-sm font-semibold text-gray-700">
                  Color
                  {selectedColor && `: ${selectedColor}`}
                </legend>
                <div className="flex flex-wrap gap-3">
                  {productOptions.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color.name)}
                      aria-label={`Select ${color.name}`}
                      aria-pressed={selectedColor === color.name}
                      className={`h-9 w-9 rounded-full border-2 ${
                        selectedColor === color.name
                          ? "border-red-600 ring-2 ring-red-200"
                          : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color.value }}
                    />
                  ))}
                </div>
              </fieldset>
            )}

            {productOptions.sizes.length > 0 && (
              <fieldset>
                <legend className="mb-2 text-sm font-semibold text-gray-700">
                  Size{selectedSize && `: ${selectedSize}`}
                </legend>
                <div className="flex flex-wrap gap-2">
                  {productOptions.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      aria-pressed={selectedSize === size}
                      className={`min-w-11 rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                        selectedSize === size
                          ? "border-red-600 bg-red-600 text-white"
                          : "border-gray-300 text-gray-700 hover:border-red-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            {/* Stock */}
            <p
              className={`text-sm font-medium ${
                singleProduct.stock > 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {singleProduct.stock > 0
                ? "In stock"
                : "Out of stock"}
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <label
                htmlFor="quantity"
                className="text-sm font-semibold text-gray-700"
              >
                Quantity:
              </label>

              <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((q) => Math.max(1, q - 1))
                  }
                  disabled={quantity <= 1}
                  className="px-4 py-2 hover:bg-gray-100 disabled:opacity-40"
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span
                  id="quantity"
                  className="min-w-12 border-x border-gray-300 px-3 py-2 text-center"
                >
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((q) =>
                      Math.min(singleProduct.stock, q + 1)
                    )
                  }
                  disabled={quantity >= singleProduct.stock}
                  className="px-4 py-2 hover:bg-gray-100 disabled:opacity-40"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total */}
            <p className="text-sm text-gray-600">
              Total:{" "}
              <span className="font-bold text-gray-900">
                {formatNPR(singleProduct.price * quantity)}
              </span>
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={singleProduct.stock <= 0}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-red-600 px-6 py-3.5 font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50 sm:w-fit"
              >
                <IoCartOutline size={23} />
                Add to Cart
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                disabled={singleProduct.stock <= 0}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-3.5 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-400 sm:w-fit"
              >
                <IoFlashOutline size={23} />
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-gray-900">
            Customer reviews
          </h2>
          {singleProduct.reviews?.length ? (
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {singleProduct.reviews.map((review, index) => {
                const reviewerName =
                  review.reviewerName || "Customer";
                const reviewerPhoto =
                  review.reviewerImage ||
                  review.photo ||
                  review.image;

                return (
                  <article
                    key={`${reviewerName}-${review.date || index}`}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <div className="flex items-center gap-3">
                      {reviewerPhoto ? (
                        <img
                          src={reviewerPhoto}
                          alt={reviewerName}
                          className="h-11 w-11 rounded-full object-cover"
                        />
                      ) : (
                        <span
                          aria-label={`${reviewerName} photo not provided`}
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100 font-bold text-red-700"
                        >
                          {reviewerName.charAt(0).toUpperCase()}
                        </span>
                      )}
                      <div>
                        <p className="font-semibold text-gray-900">
                          {reviewerName}
                        </p>
                        <p className="text-sm text-yellow-600">
                          {"★".repeat(
                            Math.max(
                              0,
                              Math.min(5, Math.round(review.rating || 0))
                            )
                          )}
                          <span className="ml-1 text-gray-500">
                            {review.rating ?? "N/A"}
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-700">
                      {review.comment}
                    </p>
                    {review.date && (
                      <time
                        className="mt-2 block text-xs text-gray-400"
                        dateTime={review.date}
                      >
                        {new Date(review.date).toLocaleDateString()}
                      </time>
                    )}
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="mt-3 text-sm text-gray-600">
              There are no customer reviews for this product yet.
            </p>
          )}
        </section>
      </div>
    </main>
  );
};

export default SingleProduct;
