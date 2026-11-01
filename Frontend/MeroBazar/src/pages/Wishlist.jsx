import { Link } from "react-router-dom";
import { IoHeart, IoTrashOutline } from "react-icons/io5";
import { useWishlist } from "../context/WishlistContextValue";

const USD_TO_NPR = 135;

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <IoHeart className="text-red-200" size={76} aria-hidden="true" />
        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          Your wishlist is empty
        </h1>
        <p className="mt-2 text-gray-600">
          Save products with the heart button and they will appear here.
        </p>
        <Link
          to="/products"
          className="mt-5 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          Browse products
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-[60vh] bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            My Wishlist
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {wishlistItems.length} saved{" "}
            {wishlistItems.length === 1 ? "product" : "products"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {wishlistItems.map((product) => (
            <article
              key={product.id}
              className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm"
            >
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
                Rs.{" "}
                {Math.round(
                  Number(product.price || 0) * USD_TO_NPR
                ).toLocaleString("en-NP")}
              </p>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <Link
                  to={`/products/${product.id}`}
                  className="flex items-center justify-center rounded-lg border border-red-600 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                >
                  View product
                </Link>
                <button
                  type="button"
                  onClick={() => removeFromWishlist(product.id)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-gray-100 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-red-50 hover:text-red-600"
                >
                  <IoTrashOutline size={18} />
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
