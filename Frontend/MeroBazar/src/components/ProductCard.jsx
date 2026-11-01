
import { Link, useNavigate } from "react-router-dom";
import {
  IoCartOutline,
  IoFlashOutline,
  IoHeart,
  IoHeartOutline,
} from "react-icons/io5";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContextValue";
import { useWishlist } from "../context/WishlistContextValue";
import { getProductOptions } from "../utils/productOptions";

const USD_TO_NPR = 135;

const ProductCard = ({ product, priceNPR }) => {
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const navigate = useNavigate();

  if (!product) return null;

  const displayPrice =
    priceNPR ?? Number(product.price || 0) * USD_TO_NPR;
  const handleBuyNow = () => {
    const options = getProductOptions(product.category);

    if (options.sizes.length || options.colors.length) {
      toast.info("Choose your product options to continue.");
      navigate(`/products/${product.id}`);
      return;
    }

    addToCart(product);
    navigate("/checkout");
  };

  return (
    <div className="relative rounded-2xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <button
        type="button"
        onClick={() => toggleWishlist(product)}
        aria-label={
          isWishlisted(product.id)
            ? `Remove ${product.title} from wishlist`
            : `Add ${product.title} to wishlist`
        }
        aria-pressed={isWishlisted(product.id)}
        className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-red-600 shadow transition hover:scale-105 hover:bg-red-50"
      >
        {isWishlisted(product.id) ? (
          <IoHeart size={22} />
        ) : (
          <IoHeartOutline size={22} />
        )}
      </button>
      <Link to={`/products/${product.id}`}>
        <div className="flex h-48 items-center justify-center overflow-hidden rounded-xl bg-gray-50">
          <img
            src={product.thumbnail || product.images?.[0]}
            alt={product.title}
            className="h-full w-full object-contain"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src =
                "https://placehold.co/300x300?text=No+Image";
            }}
          />
        </div>

        <h2 className="mt-3 line-clamp-2 min-h-12 font-semibold text-gray-800 hover:text-red-600">
          {product.title}
        </h2>
      </Link>

      <p className="mt-2 text-lg font-bold text-red-600">
        Rs. {Math.round(displayPrice).toLocaleString("en-NP")}
      </p>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={handleBuyNow}
          disabled={product.stock <= 0}
          className="flex items-center justify-center gap-2 rounded-lg border border-red-600 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <IoFlashOutline size={20} />
          Buy Now
        </button>

        <button
          type="button"
          onClick={() => {
            const options = getProductOptions(product.category);
            if (options.sizes.length || options.colors.length) {
              toast.info("Choose your size and color on the product page.");
              navigate(`/products/${product.id}`);
              return;
            }
            addToCart(product);
          }}
          disabled={product.stock <= 0}
          className="flex items-center justify-center gap-2 rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          <IoCartOutline size={20} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
