import { useState } from "react";
import { cartContext } from "./Context";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const handleCart = (product) => {
    let productExist = cart.find((item) => item.id == product.id);
    if (!productExist) {
      setCart((prev) => [...prev, product]);
    }
  };
  const handleRemove = (product) => {
    const filter = cart.filter((item) => item.id != product.id);
    setCart(filter);
  };
  return (
    <cartContext.Provider value={{ cart, setCart, handleCart, handleRemove }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
