import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../services/firebase";

export default function useProductDetail({ id }) {
  const [productDetail, setProductDetail] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        let docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists())
          throw new Error("El producto solicitado no existe");
        const { stock, ...obj } = docSnap.data();
        obj.id = docSnap.id;
        setProductDetail(obj);
        setisLoading(false);
      } catch (err) {
        console.error(err, err.message);
      }
    };
    getProduct();
  }, []);

  return { productDetail, isLoading };
}
