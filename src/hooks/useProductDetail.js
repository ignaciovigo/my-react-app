import {  getDoc, doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../services/firebase"

export default function useProductDetail({ urlParams }){
  
  const [productDetail, setProductDetail] = useState({})
  const [isLoading, setisLoading] = useState(true)

    useEffect(() => {

        const getProducts = async () => {
          try {
            let docRef = doc(db,'products',urlParams.id);
            const docSnap = await getDoc(docRef)
            if (!docSnap.exists()) throw new Error('El producto solicitado no existe')
            const obj = docSnap.data()
            obj.id = docSnap.id
            console.log(obj)
            setProductDetail(obj)
            setisLoading(false)
          } catch (err) {
            console.error(err,err.message)
          }
        }
        getProducts()

      }, [urlParams])

    return { productDetail, isLoading}
}