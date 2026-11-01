import { Link, useNavigate } from "react-router-dom";
import {
  FaRegTrashAlt,
} from "react-icons/fa";
import {
  LuNotebookText,
} from "react-icons/lu";
import {
  MdDeliveryDining,
} from "react-icons/md";
import {
  GiShoppingBag,
} from "react-icons/gi";
import { useCart } from "../context/CartContextValue";
import { toast } from "react-toastify";

const USD_TO_NPR = 135;
const DELIVERY_CHARGE_NPR = 150;

const formatNPR = (price) =>
  `Rs. ${Math.round(
    Number(price || 0) * USD_TO_NPR
  ).toLocaleString("en-NP")}`;

const formatNPRAmount = (price) =>
  `Rs. ${Math.round(Number(price || 0)).toLocaleString("en-NP")}`;

const getLocationLabel = (location) => {
  if (typeof location === "string") return location;

  return [
    location?.road,
    location?.suburb || location?.neighbourhood,
    location?.city ||
      location?.town ||
      location?.village ||
      location?.county,
    location?.state,
    location?.country,
  ]
    .filter(Boolean)
    .filter((part, index, parts) => parts.indexOf(part) === index)
    .join(", ");
};

const Cart = ({
  location,
  getLocation,
  locationError,
  isLocating = false,
}) => {
  const { cartItem, updateQuantity, deleteItem, clearCart } = useCart();
  const navigate = useNavigate();

  const totalQuantity = cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const subtotal = cartItem.reduce(
    (total, item) =>
      total + Number(item.price || 0) * item.quantity,
    0
  );
  const locationLabel = getLocationLabel(location);

  if (cartItem.length === 0) {
    return (
      <main className="flex min-h-[65vh] flex-col items-center justify-center gap-3 px-4 text-center">
        <GiShoppingBag className="text-gray-300" size={100} aria-hidden="true" />
        <h1 className="text-3xl font-bold text-red-500/80">
          Your cart is empty
        </h1>
        <p className="text-gray-600">
          Browse products and add something you like.
        </p>
        <button
          type="button"
          onClick={() => navigate("/products")}
          className="mt-2 rounded-md bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
        >
          Continue Shopping
        </button>
      </main>
    );
  }

  return (
    <main className="mx-auto mb-10 mt-8 max-w-6xl px-4 md:px-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            My Cart ({totalQuantity})
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Review your items before checkout.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            clearCart();
            toast.success("Cart cleared.");
          }}
          className="text-sm font-semibold text-red-600 hover:text-red-700"
        >
          Clear cart
        </button>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <section className="space-y-3">
          {cartItem.map((item) => {
            const cartKey = item.cartKey || `${item.id}::`;

            return (
            <article
              key={cartKey}
              className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center"
            >
              <Link
                to={`/products/${item.id}`}
                className="flex h-24 w-full shrink-0 items-center justify-center rounded-lg bg-gray-50 sm:w-24"
              >
                <img
                  src={item.thumbnail || item.images?.[0]}
                  alt={item.title}
                  className="h-full w-full object-contain"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      "https://placehold.co/300x300?text=No+Image";
                  }}
                />
              </Link>

              <div className="min-w-0 flex-1">
                <Link
                  to={`/products/${item.id}`}
                  className="font-semibold text-gray-900 hover:text-red-600"
                >
                  {item.title}
                </Link>
                {(item.selectedSize || item.selectedColor) && (
                  <p className="mt-1 text-xs text-gray-500">
                    {[
                      item.selectedSize && `Size: ${item.selectedSize}`,
                      item.selectedColor && `Color: ${item.selectedColor}`,
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                )}
                <p className="mt-1 text-sm text-red-600">
                  {formatNPR(item.price)} each
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <div className="flex items-center overflow-hidden rounded-md border border-gray-300">
                    <button
                      type="button"
                      onClick={() => updateQuantity(cartKey, "decrease")}
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease ${item.title} quantity`}
                      className="px-3 py-1.5 hover:bg-gray-100 disabled:opacity-40"
                    >
                      −
                    </button>
                    <span className="min-w-10 border-x border-gray-300 px-2 py-1.5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(cartKey, "increase")}
                      disabled={item.quantity >= item.stock}
                      aria-label={`Increase ${item.title} quantity`}
                      className="px-3 py-1.5 hover:bg-gray-100 disabled:opacity-40"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => deleteItem(cartKey)}
                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-600"
                  >
                    <FaRegTrashAlt aria-hidden="true" />
                    Remove
                  </button>
                </div>
              </div>
              <p className="font-bold text-gray-900 sm:text-right">
                {formatNPR(Number(item.price || 0) * item.quantity)}
              </p>
            </article>
            );
          })}
        </section>

        <aside className="space-y-4">
          <section className="rounded-xl border border-gray-200 bg-white p-5">
            <h2 className="text-lg font-bold text-gray-900">
              Delivery location
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {locationLabel || "Set a location to use it during checkout."}
            </p>
            {locationError && (
              <p role="alert" className="mt-2 text-sm text-red-600">
                {locationError}
              </p>
            )}
            <button
              type="button"
              onClick={getLocation}
              disabled={isLocating}
              className="mt-4 w-full rounded-lg border border-red-600 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-wait disabled:opacity-60"
            >
              {isLocating ? "Detecting location..." : "Detect my location"}
            </button>
          </section>

          <section className="h-max space-y-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">
              Bill details
            </h2>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <LuNotebookText aria-hidden="true" />
                Items total
              </span>
              <span>{formatNPR(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <MdDeliveryDining aria-hidden="true" />
                Delivery
              </span>
              <span>{formatNPRAmount(DELIVERY_CHARGE_NPR)}</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex items-center justify-between font-bold text-gray-900">
              <span>Total</span>
              <span>
                {formatNPRAmount(
                  subtotal * USD_TO_NPR + DELIVERY_CHARGE_NPR
                )}
              </span>
            </div>
            <button
              type="button"
              onClick={() => navigate("/checkout")}
              className="mt-2 w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Proceed to Checkout
            </button>
            <Link
              to="/products"
              className="block text-center text-sm font-semibold text-red-600 hover:text-red-700"
            >
              Continue shopping
            </Link>
          </section>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
