import { Row } from "react-bootstrap";
import Item from "./Item";
const ItemList = ({ products }) => {
  return (
    <Row className="justify-content-center">
      {products.map((product) => (
        <Item product={product} key={product.id}></Item>
      ))}
    </Row>
  );
};

export default ItemList;
