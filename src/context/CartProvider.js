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
    console.log(newCart)
  };

  const deleteProduct = (id) =>{
    const newCart = [...cart];
    let index = newCart.findIndex( pdct => pdct.id === id);
    newCart.splice(index,1)
    setCart(newCart)
    setTotalProducts(amountProduct(newCart))
  }

  const amountProduct = (arr) =>{    
    return arr.reduce((total, e) => total + e.amount,0);
  }

  const totalPrice = () =>{
    return cart.reduce((total,e) => total + e.price,0)
  }
  const ctxValues = {
    cart,
    setCart,
    totalProducts,
    setTotalProducts,
    addProduct,
    deleteProduct,
    totalPrice
  };

  return <Provider value={ctxValues}>{children}</Provider>;
}
