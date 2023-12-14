import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import useFilters from "./useFilters";

export default function useProducts(
  urlParams,
  fieldPath,
  opStr,
  valueComparison,
  withFilter
) {
  const [products, setProducts] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const { filters, setFilters, filterProducts } = useFilters();
  useEffect(() => {
    const getProducts = async () => {
      try {
        let request = valueComparison
          ? query(
              collection(db, "products"),
              where(fieldPath, opStr, valueComparison)
            )
          : collection(db, "products");

        const productsDocs = await getDocs(request);

        if (productsDocs.empty)
          throw new Error(
            "ha ocurrido un error al obtener los datos del servidor"
          );
        const doc = productsDocs.docs.map((e) => {
          const { stock, ...productData } = e.data();
          productData.id = e.id;
          return productData;
        });

        if(withFilter){
          let products = filterProducts(doc)
          setProducts(products)
        } else{
          setProducts(doc);
        }
        setIsLoading(false)
      } catch (err) {
        console.error(err, err.message);
      }
    };
    getProducts();
  }, [urlParams,filters.minPrice, filters.category]);

  return { products,isLoading, filters,setFilters };
}
