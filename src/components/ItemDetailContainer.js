import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const urlParams = useParams();

  useEffect(() => {
    const getItemDetail = async () => {
      try {
        let resp = await fetch(`https://fakestoreapi.com/products/${urlParams.id}`),
          data = await resp.json();
        if (!resp.ok) throw { status: resp.status, statusText: resp.statusText };
        setProductDetail(data);
      } catch (err) {
        let message =
          err.statusText || "Ha ocurrido un error al obtener los datos";
        console.error(err.status + ": " + message);
      }
    };
    getItemDetail();
  }, [urlParams]);
  return <ItemDetail productDetail={productDetail} />;
};

export default ItemDetailContainer;
