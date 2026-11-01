import { useNavigate } from "react-router-dom";
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

const ProductListView = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const handleBuyNow = () => {
    const options = getProductOptions(product.category);
    if (options.sizes.length || options.colors.length) {
      toast.info("Choose your size and color on the product page.");
      navigate(`/products/${product.id}`);
      return;
    }

    addToCart(product);
    navigate("/checkout");
  };

  return (
    <div className="mt-2 space-y-4 rounded-md">
      <div className="relative flex items-center gap-7 rounded-md bg-gray-100 p-2">
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-label={
            isWishlisted(product.id)
              ? `Remove ${product.title} from wishlist`
              : `Add ${product.title} to wishlist`
          }
          aria-pressed={isWishlisted(product.id)}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-red-600 shadow hover:bg-red-50"
        >
          {isWishlisted(product.id) ? (
            <IoHeart size={22} />
          ) : (
            <IoHeartOutline size={22} />
          )}
        </button>
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          className="h-25 w-25 cursor-pointer rounded-md object-contain md:h-60 md:w-60"
          onClick={() => navigate(`/products/${product.id}`)}
        />
        <div className="space-y-2">
          <h1 className="line-clamp-3 font-bold text-lg hover:text-red-400 md:w-full md:text-xl">
            {product.title}
          </h1>
          <p className="flex items-center font-semibold text-sm md:text-lg">
            <span className="text-3xl md:text-4xl">
              Rs.{" "}
              {Math.round(
                Number(product.price || 0) * USD_TO_NPR
              ).toLocaleString("en-NP")}
            </span>
          </p>
          <p className="text-sm">
            {product.stock > 0
              ? "In stock"
              : "Out of stock"}
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleBuyNow}
              disabled={product.stock <= 0}
              className="flex items-center gap-2 rounded-md border border-red-600 px-3 py-1 text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <IoFlashOutline aria-hidden="true" />
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
              className="flex items-center gap-2 rounded-md bg-red-500 px-3 py-1 text-white disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              <IoCartOutline aria-hidden="true" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;