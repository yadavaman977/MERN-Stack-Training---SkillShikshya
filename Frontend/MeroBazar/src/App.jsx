
import { useCallback, useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import SingleProduct from "./pages/SingleProduct";
import CategoryProduct from "./pages/CategoryProduct";
import ProtectedRoute from "./components/ProtectedRoute";
import Wishlist from "./pages/Wishlist";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState("");
  const [isLocating, setIsLocating] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const getLocation = useCallback((manualLocation) => {
    if (
      typeof manualLocation === "string" &&
      manualLocation.trim()
    ) {
      const city = manualLocation.trim();
      setLocation({ city, county: city });
      setLocationError("");
      setOpenDropdown(false);
      return;
    }

    if (!navigator.geolocation) {
      const message = "Geolocation is not supported by this browser.";
      setLocationError(message);
      toast.error(message);
      return;
    }

    setIsLocating(true);
    setLocationError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await axios.get(
            "https://nominatim.openstreetmap.org/reverse",
            {
              params: {
                lat: latitude,
                lon: longitude,
                format: "json",
              },
              headers: {
                Accept: "application/json",
              },
              timeout: 10000,
            }
          );

          const address = response.data?.address;

          if (address) {
            setLocation(address);
            setLocationError("");
            setOpenDropdown(false);
            toast.success("Your location was detected.");
          } else {
            const message = "Could not find an address for this location.";
            setLocationError(message);
            toast.error(message);
          }
        } catch (error) {
          console.error("Unable to retrieve address:", error);
          const message = "Unable to retrieve your address. Please try again.";
          setLocationError(message);
          toast.error(message);
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        console.error("Unable to detect location:", error.message);
        const message =
          error.code === 1
            ? "Location permission was denied."
            : "Unable to detect your location. Please try again.";
        setLocationError(message);
        toast.error(message);
        setIsLocating(false);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar
          location={location}
          applyLocation={getLocation}
          getLocation={getLocation}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />
          <Route
            path="/category/:category"
            element={<CategoryProduct />}
          />

          <Route
            path="/products/:id"
            element={<SingleProduct />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route
            path="/cart"
            element={
              <Cart
                location={location}
                getLocation={getLocation}
                locationError={locationError}
                isLocating={isLocating}
              />
            }
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout
                  location={location}
                  getLocation={getLocation}
                  locationError={locationError}
                  isLocating={isLocating}
                />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
