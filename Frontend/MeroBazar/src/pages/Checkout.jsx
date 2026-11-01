import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "@clerk/react";
import { useCart } from "../context/CartContextValue";

const USD_TO_NPR = 135;
const DELIVERY_CHARGE_NPR = 150;

const formatNPRAmount = (price) =>
  `Rs. ${Math.round(
    Number(price || 0)
  ).toLocaleString("en-NP")}`;

const formatNPR = (price) =>
  formatNPRAmount(Number(price || 0) * USD_TO_NPR);

const getAddressValue = (location, keys) => {
  for (const key of keys) {
    if (location?.[key]) return location[key];
  }

  return "";
};

const Checkout = ({
  location,
  getLocation,
  locationError,
  isLocating = false,
}) => {
  const { cartItem, clearCart } = useCart();
  const { user } = useUser();
  const [deliveryDetails, setDeliveryDetails] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("cash-on-delivery");
  const [orderNumber, setOrderNumber] = useState("");

  const subtotal = cartItem.reduce(
    (total, item) =>
      total + Number(item.price || 0) * item.quantity,
    0
  );
  const total = subtotal * USD_TO_NPR + DELIVERY_CHARGE_NPR;

  const addressDefaults = {
    name: user?.fullName || "",
    address: [
      location?.house_number,
      location?.road,
      location?.suburb || location?.neighbourhood,
    ]
      .filter(Boolean)
      .join(", "),
    city: getAddressValue(location, [
      "city",
      "town",
      "village",
      "municipality",
      "county",
    ]),
    state: getAddressValue(location, ["state", "province"]),
    postalCode: getAddressValue(location, ["postcode", "postal_code"]),
    country: getAddressValue(location, ["country"]),
  };

  const fieldValue = (field) =>
    Object.prototype.hasOwnProperty.call(deliveryDetails, field)
      ? deliveryDetails[field]
      : addressDefaults[field] || "";

  const updateField = (event) => {
    const { name, value } = event.target;
    setDeliveryDetails((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const placeOrder = (event) => {
    event.preventDefault();

    if (!cartItem.length) {
      toast.error("Your cart is empty.");
      return;
    }

    const number = `MB-${Date.now().toString().slice(-8)}`;
    setOrderNumber(number);
    clearCart();
    toast.success("Your order has been placed!");
  };

  if (orderNumber) {
    return (
      <main className="flex min-h-[65vh] flex-col items-center justify-center px-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
            ✓
        </div>
        <h1 className="mt-5 text-3xl font-bold text-gray-900">Order placed!</h1>
        <p className="mt-2 text-gray-600">
            Your order number is{" "}
            <span className="font-semibold text-gray-900">{orderNumber}</span>.
            {" "}Pay cash on delivery.
        </p>
        <Link
            to="/products"
            className="mt-6 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
        >
            Continue shopping
        </Link>
      </main>
    );
  }

  if (cartItem.length === 0) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Your cart is empty</h1>
        <p className="mt-2 text-gray-600">
            Add products to your cart before checking out.
        </p>
        <Link
            to="/products"
            className="mt-5 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
        >
            Browse products
        </Link>
      </main>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100";
  const labelClass = "mb-1.5 block text-sm font-medium text-gray-700";

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Checkout
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Enter your delivery details to place the order.
            </p>
        </div>
        <form
            onSubmit={placeOrder}
            className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px]"
        >
            <section className="rounded-xl border border-gray-200 bg-white p-5 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-gray-900">
                  Delivery information
                </h2>
                <button
                  type="button"
                  onClick={getLocation}
                  disabled={isLocating}
                  className="rounded-lg border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-wait disabled:opacity-60"
                >
                  {isLocating ? "Detecting..." : "Detect location"}
                </button>
              </div>

              {locationError && (
                <p role="alert" className="mt-3 text-sm text-red-600">
                  {locationError}
                </p>
              )}

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="checkout-name">
                    Full name
                  </label>
                  <input
                    id="checkout-name"
                    name="name"
                    autoComplete="name"
                    className={inputClass}
                    value={fieldValue("name")}
                    onChange={updateField}
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="checkout-address">
                    Street address
                  </label>
                  <input
                    id="checkout-address"
                    name="address"
                    autoComplete="street-address"
                    placeholder="House number and street"
                    className={inputClass}
                    value={fieldValue("address")}
                    onChange={updateField}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="checkout-city">
                    City or area
                  </label>
                  <input
                    id="checkout-city"
                    name="city"
                    autoComplete="address-level2"
                    className={inputClass}
                    value={fieldValue("city")}
                    onChange={updateField}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="checkout-state">
                    Province / state
                  </label>
                  <input
                    id="checkout-state"
                    name="state"
                    autoComplete="address-level1"
                    className={inputClass}
                    value={fieldValue("state")}
                    onChange={updateField}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="checkout-postal">
                    Postal code
                  </label>
                  <input
                    id="checkout-postal"
                    name="postalCode"
                    autoComplete="postal-code"
                    className={inputClass}
                    value={fieldValue("postalCode")}
                    onChange={updateField}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="checkout-country">
                    Country
                  </label>
                  <input
                    id="checkout-country"
                    name="country"
                    autoComplete="country-name"
                    className={inputClass}
                    value={fieldValue("country")}
                    onChange={updateField}
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="checkout-phone">
                    Phone number
                  </label>
                  <input
                    id="checkout-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    pattern="[+0-9() -]{7,20}"
                    title="Enter a valid phone number."
                    placeholder="Enter your phone number"
                    className={inputClass}
                    value={fieldValue("phone")}
                    onChange={updateField}
                    required
                  />
                </div>
              </div>

              <fieldset className="mt-6 rounded-xl border border-gray-200 p-4">
                <legend className="px-1 text-sm font-semibold text-gray-900">
                  Payment method
                </legend>
                <label className="sr-only" htmlFor="checkout-payment">
                  Select payment method
                </label>
                <select
                  id="checkout-payment"
                  name="payment"
                  value={paymentMethod}
                  onChange={(event) => setPaymentMethod(event.target.value)}
                  className={inputClass}
                >
                  <option value="cash-on-delivery">Cash on delivery</option>
                  <option value="online-payment" disabled>
                    Online payment (Coming soon)
                  </option>
                </select>
                <p className="mt-1 text-sm text-gray-500">
                  Pay when your order arrives.
                </p>
              </fieldset>
            </section>

            <aside className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="text-lg font-bold text-gray-900">Order summary</h2>
              <ul className="mt-4 max-h-64 space-y-3 overflow-y-auto">
                {cartItem.map((item) => (
                  <li
                    key={item.cartKey || `${item.id}::`}
                    className="flex justify-between gap-3 text-sm"
                  >
                    <span className="min-w-0 text-gray-600">
                      {item.title}{" "}
                      <span className="text-gray-400">× {item.quantity}</span>
                      {(item.selectedSize || item.selectedColor) && (
                        <span className="block text-xs text-gray-500">
                          {[
                            item.selectedSize && `Size: ${item.selectedSize}`,
                            item.selectedColor && `Color: ${item.selectedColor}`,
                          ]
                            .filter(Boolean)
                            .join(" · ")}
                        </span>
                      )}
                    </span>
                    <span className="shrink-0 font-medium text-gray-900">
                      {formatNPR(Number(item.price || 0) * item.quantity)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 space-y-3 border-t border-gray-100 pt-4 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatNPR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span>{formatNPRAmount(DELIVERY_CHARGE_NPR)}</span>
                </div>
                <div className="flex justify-between border-t border-gray-100 pt-3 text-base font-bold text-gray-900">
                  <span>Total</span>
                  <span>{formatNPRAmount(total)}</span>
                </div>
              </div>
              <button
                type="submit"
                className="mt-5 w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700"
              >
                Place order · {formatNPRAmount(total)}
              </button>
              <Link
                to="/cart"
                className="mt-3 block text-center text-sm font-semibold text-gray-600 hover:text-red-600"
              >
                Back to cart
              </Link>
            </aside>
        </form>
      </div>
    </main>
  );
};

export default Checkout;
