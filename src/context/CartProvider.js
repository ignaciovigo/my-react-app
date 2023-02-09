import { useContext, createContext, useState } from 'react'
import { db } from '../services/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { saveToStorage,resetStorage } from '../components/functions'

const ctx = createContext()
const Provider = ctx.Provider

export const useCart = () => {
  return useContext(ctx)
}

const options = {maxPerProduct: 5}

export function CartProvider ({ children }) {
  const [cart, setCart] = useState(() =>{
    const cartFromStorage = window.localStorage.getItem('cart')
    if(cartFromStorage) return JSON.parse(cartFromStorage);
    return []
  })

  const [totalProducts, setTotalProducts] = useState(() =>{
    const totalFromStorage = Number(window.localStorage.getItem('total'))
    return totalFromStorage ?? 0;
  })

  const addProduct = async (pdct, amount) => {
    const newCart = [...cart]
    const index = newCart.findIndex((e) => e.id === pdct.id)
    if (index !== -1){
      newCart[index].amount += amount;
      checkLimitAmount(newCart[index])
      await checkStock(newCart[index])
    } 
    if (index === -1) {
      const copy = { amount,...pdct }
      checkLimitAmount(copy)
      await checkStock(copy)
      newCart.push(copy)
    }
    toast.success(`${pdct.title}x${amount} Added to cart.`,{
      autoClose:1500,
      pauseOnHover:false
    })
    setCart(newCart)
    const newTotalProducts = amountProduct(newCart)
    setTotalProducts(newTotalProducts)
    saveToStorage({cart: newCart,totalProducts:newTotalProducts})
    
  }

  const deleteProduct = (id, arr) => {
    const index = arr.findIndex((pdct) => pdct.id === id)
    arr.splice(index, 1)
    setCart(arr)
    const newTotalProducts = amountProduct(arr)
    setTotalProducts(newTotalProducts)
    saveToStorage({cart: arr,totalProducts:newTotalProducts})
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
  const reduceAmount = async (id) => {
    const newCart = [...cart]
    const index = newCart.findIndex((pdct) => pdct.id === id)
    newCart[index].amount--
    checkLimitAmount(newCart[index])
    await checkStock(newCart[index])
    if (newCart[index].amount > 0) {
      setCart(newCart)
      const newTotalProducts = amountProduct(newCart)
      setTotalProducts(newTotalProducts)
      saveToStorage({cart: newCart,totalProducts:newTotalProducts})
    } else {
      deleteProduct(id, newCart)
    }
  }

  const incrementAmount = async (id) => {
    const newCart = [...cart]
    const index = newCart.findIndex((pdct) => pdct.id === id)
    newCart[index].amount++
    checkLimitAmount(newCart[index])
    await checkStock(newCart[index])
    setCart(newCart)
    const newTotalProducts = amountProduct(newCart)
    setTotalProducts(newTotalProducts)
    saveToStorage({cart: newCart,totalProducts:newTotalProducts})

  }

  const checkStock = async (product) =>{
    //mutable method
    const docRef = doc(db,'products',product.id);
    const docSnap = getDoc(docRef);
    const resp = await docSnap
    const { stock } = resp.data()
    return product.isStock = (stock > 0 && product.amount <= stock)
  }

  const checkLimitAmount = (product) =>{
    //mutable method
    product.sell = (product.amount <= options.maxPerProduct);
  }

  const restartCart = () =>{
    setCart([])
    setTotalProducts(0)
    resetStorage()
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
