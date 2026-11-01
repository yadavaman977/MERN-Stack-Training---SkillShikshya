
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ClerkProvider } from "@clerk/react";
import { DataProvider } from "./context/DataContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <CartProvider>
        <WishlistProvider>
          <ClerkProvider>
            <App />
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              theme="light"
              toastClassName="merobazar-toast"
              bodyClassName="merobazar-toast-body"
              progressClassName="merobazar-toast-progress"
            />
          </ClerkProvider>
        </WishlistProvider>
      </CartProvider>
    </DataProvider>
  </StrictMode>
);
