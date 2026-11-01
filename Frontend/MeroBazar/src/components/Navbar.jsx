
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Store,
  Search,
  MapPin,
  Heart,
  ShoppingCart,
  Menu,
  X,
  LoaderCircle,
} from "lucide-react";
import { Show, SignInButton, UserButton } from "@clerk/react";
import { useCart } from "../context/CartContextValue";
import { useWishlist } from "../context/WishlistContextValue";
import { toast } from "react-toastify";

const Navbar = ({
  location = "",
  applyLocation = () => {},
}) => {
  const navigate = useNavigate();
  const { cartItem } = useCart();
  const itemCount = cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const { wishlistItems } = useWishlist();
  const savedProductCount = wishlistItems.length;

  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [manualLocation, setManualLocation] = useState("");
  const [detecting, setDetecting] = useState(false);
  const [locationError, setLocationError] = useState("");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const currentLocation =
    typeof location === "string"
      ? location
      : [
          location?.city ||
            location?.town ||
            location?.village ||
            location?.suburb ||
            location?.county,
          location?.state,
        ]
            .filter(Boolean)
            .filter((part, index, parts) => parts.indexOf(part) === index)
            .join(", ");

  const submitSearch = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      toast.info("Enter a product name to search.");
      return;
    }

    navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
    setMobileMenuOpen(false);
  };

  const applySelectedLocation = (value) => {
    if (!value.trim()) return;

    applyLocation(value.trim());
    setLocationError("");
    setLocationModalOpen(false);
    setManualLocation("");
    toast.success("Delivery location saved.");
  };

  // Location detection logic preserved
  const detectMyLocation = () => {
    setLocationError("");
    setDetecting(true);

    if (!navigator.geolocation) {
      setDetecting(false);
      const message = "Location detection is not supported by this browser.";
      setLocationError(message);
      toast.error(message);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const url = new URL(
            "https://nominatim.openstreetmap.org/reverse"
          );

          url.searchParams.set("format", "jsonv2");
          url.searchParams.set("lat", coords.latitude);
          url.searchParams.set("lon", coords.longitude);

          const response = await fetch(url.toString());

          if (!response.ok) {
            throw new Error("Could not find your address.");
          }

          const data = await response.json();
          const address = data.address || {};

          const city =
            address.city ||
            address.town ||
            address.village ||
            address.municipality ||
            address.suburb ||
            address.county;

          const region =
            address.state || address.province || address.country;

          const formattedLocation = [city, region]
            .filter(Boolean)
            .filter((part, index, arr) => arr.indexOf(part) === index)
            .join(", ");

          if (!formattedLocation) {
            throw new Error("No readable city or area was found.");
          }

          applySelectedLocation(formattedLocation);
        } catch (error) {
          const message =
            error.message || "Could not find your area. Enter it manually.";
          setLocationError(message);
          toast.error(message);
        } finally {
          setDetecting(false);
        }
      },
      (error) => {
        setDetecting(false);

        if (error.code === 1) {
          setLocationError("Location permission was denied.");
          toast.error("Location permission was denied.");
        } else if (error.code === 3) {
          setLocationError("Location request timed out. Please try again.");
          toast.error("Location request timed out. Please try again.");
        } else {
          setLocationError("Unable to detect your location. Try again.");
          toast.error("Unable to detect your location. Try again.");
        }
      },
      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 60000,
      }
    );
  };

  const navClass = ({ isActive }) =>
    `whitespace-nowrap border-b-2 py-1 text-sm font-medium transition-colors ${
      isActive
        ? "border-red-600 text-red-600"
        : "border-transparent text-gray-600 hover:text-red-600"
    }`;

  const iconButton =
    "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-gray-600 transition hover:bg-red-50 hover:text-red-600";

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          {/* Main row */}
          <div className="flex min-h-[82px] items-center gap-2 sm:gap-4">
            {/* Logo and slogan */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex shrink-0 items-center gap-2.5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-white">
                <Store size={24} strokeWidth={2.2} />
              </span>

              <span className="flex flex-col">
                <span className="text-[22px] font-extrabold leading-tight tracking-tight text-gray-900">
                  Mero<span className="text-red-600">Bazar</span>
                </span>
                <span className="mt-1 hidden whitespace-nowrap text-[10px] leading-tight text-gray-500 sm:block sm:text-[11px]">
                  Everything you need, in one place.
                </span>
              </span>
            </Link>

            {/* Desktop search */}
            <form
              onSubmit={submitSearch}
              className="mx-auto hidden max-w-xl flex-1 items-center rounded-xl border border-gray-200 bg-gray-50 px-3 transition focus-within:border-red-400 focus-within:bg-white md:flex"
            >
              <Search size={19} className="shrink-0 text-gray-400" />

              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products, brands..."
                aria-label="Search products"
                className="h-11 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                aria-label="Search"
                className="rounded-lg p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600"
              >
                <Search size={19} />
              </button>
            </form>

            {/* Location */}
            <button
              type="button"
              onClick={() => setLocationModalOpen(true)}
              className="hidden shrink-0 items-center gap-2 rounded-xl px-2 py-2 text-left transition hover:bg-gray-50 lg:flex"
            >
              <MapPin size={21} className="text-red-600" />

              <span className="max-w-28">
                <span className="block text-[11px] text-gray-500">
                  Deliver to
                </span>
                <span className="block truncate text-sm font-semibold text-gray-800">
                  {currentLocation || "Set location"}
                </span>
              </span>
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className={`${iconButton} hidden sm:flex`}
            >
              <Heart size={21} />

              {savedProductCount > 0 && (
                <span className="absolute right-0 top-0 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
                  {savedProductCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              aria-label="Shopping cart"
              className={iconButton}
            >
              <ShoppingCart size={21} />

              {itemCount > 0 && (
                <span className="absolute right-0 top-0 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Clerk authentication */}
            <div className="hidden shrink-0 items-center sm:flex">
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button
                    type="button"
                    className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                  >
                    Sign in
                  </button>
                </SignInButton>
              </Show>

              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`${iconButton} ml-auto md:hidden`}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>

          {/* Mobile search */}
          <form
            onSubmit={submitSearch}
            className="mb-3 flex items-center rounded-xl border border-gray-200 bg-gray-50 px-3 md:hidden"
          >
            <Search size={18} className="shrink-0 text-gray-400" />

            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              className="h-10 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none"
            />

            <button
              type="submit"
              aria-label="Search"
              className="p-2 text-gray-500 hover:text-red-600"
            >
              <Search size={18} />
            </button>
          </form>

          {/* Full desktop navigation */}
          <nav className="hidden h-12 items-center justify-between border-t border-gray-100 md:flex">
            <div className="flex h-full items-center gap-8 lg:gap-10">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={navClass}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setLocationModalOpen(true)}
              className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-red-600 lg:hidden"
            >
              <MapPin size={17} />
              <span className="max-w-36 truncate">
                {currentLocation || "Set location"}
              </span>
            </button>
          </nav>

          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <div className="border-t border-gray-100 py-3 md:hidden">
              <nav className="flex flex-col gap-1">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-red-50 text-red-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    setLocationModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="mt-2 flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-3 text-left text-sm text-gray-700"
                >
                  <MapPin size={18} className="text-red-600" />
                  {currentLocation || "Set your location"}
                </button>

                <Link
                  to="/wishlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm text-gray-700 hover:bg-gray-50 sm:hidden"
                >
                  <Heart size={18} />
                  Wishlist {savedProductCount > 0 && `(${savedProductCount})`}
                </Link>

                <div className="flex items-center px-3 py-3 sm:hidden">
                  <Show when="signed-out">
                    <SignInButton mode="modal">
                      <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm font-semibold text-red-600"
                      >
                        Sign in
                      </button>
                    </SignInButton>
                  </Show>

                  <Show when="signed-in">
                    <UserButton />
                  </Show>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Location modal */}
      {locationModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setLocationModalOpen(false);
              setLocationError("");
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="location-title"
            className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <h2
                id="location-title"
                className="text-lg font-bold text-gray-900"
              >
                Choose location
              </h2>

              <button
                type="button"
                onClick={() => {
                  setLocationModalOpen(false);
                  setLocationError("");
                }}
                aria-label="Close"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <button
              type="button"
              onClick={detectMyLocation}
              disabled={detecting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-60"
            >
              {detecting ? (
                <>
                  <LoaderCircle size={18} className="animate-spin" />
                  Detecting...
                </>
              ) : (
                <>
                  <MapPin size={18} />
                  Detect my location
                </>
              )}
            </button>

            {locationError && (
              <p role="alert" className="mt-3 text-sm text-red-600">
                {locationError}
              </p>
            )}

            <div className="my-4 text-center text-xs text-gray-400">
              OR ENTER YOUR CITY
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                applySelectedLocation(manualLocation);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                value={manualLocation}
                onChange={(e) => setManualLocation(e.target.value)}
                placeholder="City or area"
                className="w-full rounded-lg border border-gray-200 px-3 py-3 text-sm outline-none transition focus:border-red-400"
              />

              <button
                type="submit"
                disabled={!manualLocation.trim()}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
              >
                Save location
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
