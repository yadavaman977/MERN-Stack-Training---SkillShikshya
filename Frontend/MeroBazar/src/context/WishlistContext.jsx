import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { WishlistContext } from "./WishlistContextValue";

const STORAGE_KEY = "merobazar-wishlist";

const getSavedWishlist = () => {
  try {
    const savedWishlist = window.localStorage.getItem(STORAGE_KEY);
    const parsedWishlist = savedWishlist
      ? JSON.parse(savedWishlist)
      : [];

    return Array.isArray(parsedWishlist) ? parsedWishlist : [];
  } catch (error) {
    console.error("Unable to load saved wishlist:", error);
    return [];
  }
};

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(getSavedWishlist);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(wishlistItems)
      );
    } catch (error) {
      console.error("Unable to save wishlist:", error);
      toast.error("Your wishlist could not be saved on this device.");
    }
  }, [wishlistItems]);

  const isWishlisted = (productId) =>
    wishlistItems.some((item) => item.id === productId);

  const toggleWishlist = (product) => {
    if (!product?.id) {
      toast.error("This product cannot be added to your wishlist.");
      return;
    }

    const alreadySaved = wishlistItems.some(
      (item) => item.id === product.id
    );

    setWishlistItems((previousItems) =>
      alreadySaved
        ? previousItems.filter((item) => item.id !== product.id)
        : [...previousItems, product]
    );

    toast.success(
      alreadySaved
        ? "Product removed from wishlist."
        : "Product added to wishlist."
    );
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((previousItems) =>
      previousItems.filter((item) => item.id !== productId)
    );
    toast.success("Product removed from wishlist.");
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        isWishlisted,
        toggleWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
