import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../services/firebase"

export default function useProducts({ urlParams }){
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
          try {
            let consulta = urlParams.categoryId 
              ?  query(collection(db,'products'),where('category',"==",urlParams.categoryId))
              :  collection(db,'products');

            const productsDocs = await getDocs(consulta)
            
            if (productsDocs.empty) throw new Error('ha ocurrido un error al obtener los datos del servidor')
            const doc = productsDocs.docs.map( e => {
              const {stock, ...productData} = e.data()
              productData.id = e.id
              return productData
            })
            setProducts(doc)
          } catch (err) {
            console.error(err,err.message)
          }
        }
        getProducts()
      }, [urlParams])

      return { products }
}
