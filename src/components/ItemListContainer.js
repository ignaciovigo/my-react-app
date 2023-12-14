import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import useProducts from "../hooks/useProducts";
import { Container } from "react-bootstrap";
import Loader from "./Loader";
import { Filters } from "./Filter";

const ItemListContainer = ({ withFilter }) => {
  const urlParams = useParams();
  const { products, isLoading, filters, setFilters } = useProducts(
    urlParams,
    "category",
    "==",
    urlParams.categoryId,
    withFilter
  );

  return (
    <Container>
      {withFilter && <Filters filters={filters} setFilters={setFilters} />}
      {isLoading ? <Loader /> : <ItemList products={products} />}
    </Container>
  );
};

export default ItemListContainer;
