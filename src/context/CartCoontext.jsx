import React, { createContext, useState, useContext } from 'react';

// Create CartContext to hold cart state and methods
const CartContext = createContext();

// CartProvider component to wrap around the components that need access to cart state
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = () => {
  return useContext(CartContext);
};
