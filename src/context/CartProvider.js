import { useContext, createContext, useState } from 'react'
import { db } from '../services/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

const ctx = createContext()
const Provider = ctx.Provider

export const useCart = () => {
  return useContext(ctx)
}

const options = {maxPerProduct: 5}

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])
  const [totalProducts, setTotalProducts] = useState(0)
  const [itemStock,setItemStock] = useState(false)

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
    toast.success(`${pdct.title}x${amount} Added to cart.`,{
      autoClose:1500,
      pauseOnHover:false
    })
    setCart(newCart)
    setTotalProducts(totalProducts + amount)
    
  }

  const deleteProduct = (id, arr) => {
    const index = arr.findIndex((pdct) => pdct.id === id)
    arr.splice(index, 1)
    setCart(arr)
    setTotalProducts(amountProduct(arr))
    toast.error(`Product removed`,{
      autoClose:1500,
      pauseOnHover:false
    })
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
  }

  const incrementAmount = (id) => {
    const newCart = [...cart]
    const index = newCart.findIndex((pdct) => pdct.id === id)
    newCart[index].amount++
    checkLimitAmount(newCart[index])
    setCart(newCart)
    setTotalProducts(amountProduct(newCart))
  }

  const checkStock = (product) =>{
    //mutable method
    const docRef = doc(db,'products',product.id);
    const docSnap = getDoc(docRef);
    docSnap.then(resp => {
      const { stock } = resp.data()
      product.isStock = (stock > 0 && product.amount <= stock )
      setItemStock(product.isStock)
    })
  }

  const checkLimitAmount = (product) =>{
    //mutable method
    product.sell = (product.amount <= options.maxPerProduct);
    checkStock(product)
  }

  const restartCart = () =>{
    setCart([])
    setTotalProducts(0)
  }
  const isExists = (id) =>{
    let index = cart.findIndex(e => e.id === id)
    return (index !== -1)
  }
  
  const ctxValues = {
    cart,
    totalProducts,
    options,
    addProduct,
    deleteProduct,
    totalPrice,
    reduceAmount,
    incrementAmount,
    restartCart,
    isExists
  }

  return <Provider value={ctxValues}>{children}</Provider>
}
