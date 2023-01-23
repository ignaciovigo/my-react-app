import { useContext } from "react";
import { createContext, useState } from "react";

const ctx = createContext();
const Provider = ctx.Provider;

export const useCart = () => {
  return useContext(ctx);
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  const addProduct = (pdct, amount) => {
    const newCart = [...cart];
    let index = newCart.findIndex((e) => e.id === pdct.id);
    if (index !== -1) newCart[index].amount += amount;
    if (index === -1) {
      pdct.amount = amount;
      newCart.push(pdct);
    }
    setCart(newCart);
    setTotalProducts(totalProducts + amount);
    console.log("añadido", newCart);
  };

  const deleteProduct = (id, arr) => {
    let index = arr.findIndex((pdct) => pdct.id === id);
    arr.splice(index, 1);
    console.log("deleted", arr);
    setCart(arr);
    setTotalProducts(amountProduct(arr));
  };

  const amountProduct = (arr) => {
    return arr.reduce((total, e) => total + e.amount, 0);
  };

  const totalPrice = () => {
    return cart.reduce((total, e) => total + e.price, 0);
  };
  const reduceAmount = (id) => {
    const newCart = [...cart];
    let index = newCart.findIndex((pdct) => pdct.id === id);
    newCart[index].amount--;
    if (newCart[index].amount !== 0) {
      setCart(newCart);
      setTotalProducts(amountProduct(newCart));
    } else {
      deleteProduct(id, newCart);
    }
    console.log("reducido", newCart);
  };

  const incrementAmount = (id) => {
    const newCart = [...cart];
    let index = newCart.findIndex((pdct) => pdct.id === id);
    newCart[index].amount++;
    setCart(newCart);
    setTotalProducts(amountProduct(newCart));
    console.log("incrementado", newCart);
  };

  const ctxValues = {
    cart,
    setCart,
    totalProducts,
    setTotalProducts,
    addProduct,
    deleteProduct,
    totalPrice,
    reduceAmount,
    incrementAmount,
  };

  return <Provider value={ctxValues}>{children}</Provider>;
}
