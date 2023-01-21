import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const urlParams = useParams();

  useEffect(() => {
    const getProducts = async () => {
      let url = urlParams.categoryId
        ? `https://fakestoreapi.com/products/category/${urlParams.categoryId}`
        : `https://fakestoreapi.com/products`;
      try {
        let resp = await fetch(url),
          data = await resp.json();
        if (!resp.ok) throw { status: resp.status, statusText: resp.statusText };
        setProducts(data);
      } catch (err) {
        let message =
          err.statusText || "Ha ocurrido un error al obtener los datos";
        console.error(err.status + ": " + message);
      }
    };
    getProducts();
  }, [urlParams]);

  return (
    <Container fluid>
      <ItemList products={products} />
    </Container>
  );
};

export default ItemListContainer;
