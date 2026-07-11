import { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        const updatedQuantity = Math.min(existingItem.quantity + quantity, item.stock);

        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: updatedQuantity }
            : cartItem
        );
      }

      return [...prevCart, { ...item, quantity }];
    });
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const isInCart = (itemId) => cart.some((cartItem) => cartItem.id === itemId);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
