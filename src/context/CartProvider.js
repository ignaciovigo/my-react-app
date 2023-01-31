import { useContext, createContext, useState } from 'react'
import { db } from '../services/firebase'
import { doc, getDoc } from 'firebase/firestore'

const ctx = createContext()
const Provider = ctx.Provider

export const useCart = () => {
  return useContext(ctx)
}

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])
  const [totalProducts, setTotalProducts] = useState(0)
  const [options,setOptions]= useState({maxPerProduct: 5})

  const addProduct = (pdct, amount) => {
    //add product to cart
    const newCart = [...cart]
    const index = newCart.findIndex((e) => e.id === pdct.id)
    if (index !== -1){
      newCart[index].amount += amount;
      checkLimitAmount(newCart[index])
    } 
    if (index === -1) {
      const copy = { amount,...pdct }
      checkLimitAmount(copy)
      newCart.push(copy)
    }
    setCart(newCart)
    setTotalProducts(totalProducts + amount)
    console.log('añadido', newCart)
    
  }

  const deleteProduct = (id, arr) => {
    const index = arr.findIndex((pdct) => pdct.id === id)
    arr.splice(index, 1)
    console.log('deleted', arr)
    setCart(arr)
    setTotalProducts(amountProduct(arr))
  }

  const amountProduct = (arr) => {
    return arr.reduce((total, e) => total + e.amount, 0)
  }

  const totalPrice = () => {
    return cart.reduce((total, e) => total + (e.price * e.amount), 0)
  }
  const reduceAmount = (id) => {
    const newCart = [...cart]
    const index = newCart.findIndex((pdct) => pdct.id === id)
    newCart[index].amount--
    checkLimitAmount(newCart[index])
    if (newCart[index].amount !== 0) {
      setCart(newCart)
      setTotalProducts(amountProduct(newCart))
    } else {
      deleteProduct(id, newCart)
    }
    console.log('reducido', newCart)
  }

  const incrementAmount = (id) => {
    const newCart = [...cart]
    const index = newCart.findIndex((pdct) => pdct.id === id)
    newCart[index].amount++
    setCart(newCart)
    setTotalProducts(amountProduct(newCart))
    console.log('incrementado', newCart)
  }

  const checkStock = (product) =>{
    //mutable method
    const docRef = doc(db,'products',product.id);
    const docSnap = getDoc(docRef);
    return docSnap.then(resp => {
      const { stock } = resp.data()
      console.log('stock: ',stock)
      console.log('amount: ', product.amount)
      return (stock > 0 && stock >= product.amount )
    })
  }

  const checkLimitAmount = (product) =>{
    //mutable method
    (product.amount <= options.maxPerProduct) ? product.sell = true : product.sell = false;
    checkStock(product).then( resp => product.isStock = resp )
    console.log(product)
  }

  
  const ctxValues = {
    cart,
    totalProducts,
    options,
    addProduct,
    deleteProduct,
    totalPrice,
    reduceAmount,
    incrementAmount
  }

  return <Provider value={ctxValues}>{children}</Provider>
}
