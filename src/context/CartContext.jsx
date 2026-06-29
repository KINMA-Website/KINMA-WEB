import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CART_STORAGE_KEY = "kinma-cart";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart", error);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id && item.spiceLevel === product.spiceLevel && JSON.stringify(item.toppings) === JSON.stringify(product.toppings)
      );
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id && item.spiceLevel === product.spiceLevel && JSON.stringify(item.toppings) === JSON.stringify(product.toppings)
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...currentItems, product];
    });
    setIsOpen(true);
  };

  const removeItem = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setItems((currentItems) =>
      currentItems.flatMap((item) => {
        if (item.id !== id) {
          return [item];
        }

        const nextQuantity = item.quantity + delta;
        return nextQuantity > 0 ? [{ ...item, quantity: nextQuantity }] : [];
      })
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

  const totalPrice = useMemo(() => items.reduce((sum, item) => sum + item.totalPrice * item.quantity, 0), [items]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      setIsOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      totalPrice,
    }),
    [items, isOpen, itemCount, totalPrice]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
