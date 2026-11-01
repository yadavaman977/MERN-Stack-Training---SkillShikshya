
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "./CartContextValue";

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product, quantity = 1, options = {}) => {
    if (!product || product.stock <= 0) {
      toast.error("This product is out of stock.");
      return;
    }

    const requestedQuantity = Math.max(
      1,
      Math.floor(Number(quantity) || 1)
    );
    const selectedColor = options.color || "";
    const selectedSize = options.size || "";
    const cartKey = `${product.id}:${selectedColor}:${selectedSize}`;
    const existingItem = cartItem.find(
      (item) =>
        (item.cartKey || `${item.id}::`) === cartKey
    );
    const currentQuantity = existingItem?.quantity || 0;
    const newQuantity = Math.min(
      currentQuantity + requestedQuantity,
      product.stock
    );

    if (newQuantity === currentQuantity) {
      toast.info("Maximum available stock reached.");
      return;
    }

    setCartItem((previousCart) => {
      const currentItem = previousCart.find(
        (item) =>
          (item.cartKey || `${item.id}::`) === cartKey
      );

      if (currentItem) {
        return previousCart.map((item) =>
          (item.cartKey || `${item.id}::`) === cartKey
            ? {
                ...item,
                quantity: Math.min(
                  item.quantity + requestedQuantity,
                  product.stock
                ),
              }
            : item
        );
      }

      return [
        ...previousCart,
        {
          ...product,
          cartKey,
          selectedColor,
          selectedSize,
          quantity: Math.min(requestedQuantity, product.stock),
        },
      ];
    });

    toast.success(
      existingItem
        ? "Cart quantity updated!"
        : "Product added to cart!"
    );
  };

  const updateQuantity = (cartKey, action) => {
    const item = cartItem.find(
      (cartProduct) =>
        (cartProduct.cartKey || `${cartProduct.id}::`) === cartKey
    );

    if (!item || (action !== "increase" && action !== "decrease")) return;

    if (action === "increase" && item.quantity >= item.stock) {
      toast.info("Maximum available stock reached.");
      return;
    }

    const quantity =
      action === "increase"
        ? Math.min(item.quantity + 1, item.stock)
        : Math.max(item.quantity - 1, 1);

    setCartItem((previousCart) =>
      previousCart.map((cartProduct) =>
        (cartProduct.cartKey || `${cartProduct.id}::`) === cartKey
          ? { ...cartProduct, quantity }
          : cartProduct
      )
    );
    toast.success("Cart quantity updated.");
  };

  const deleteItem = (cartKey) => {
    setCartItem((previousCart) =>
      previousCart.filter(
        (item) => (item.cartKey || `${item.id}::`) !== cartKey
      )
    );

    toast.success("Product removed from cart!");
  };

  const clearCart = useCallback(() => setCartItem([]), []);

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        addToCart,
        updateQuantity,
        deleteItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
