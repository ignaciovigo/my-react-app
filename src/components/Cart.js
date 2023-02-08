import { Col, Row } from "react-bootstrap";
import CartList from "./CartList";
import PurchaseSummary from "./PurchaseSummary";

const Cart = () => {
  return (
    <Row className='text-gris text-center bg-negro my-3 justify-content-center p-0 p-sm-2 m-0 rounded'>
      <Col xs={12} sm={10} md={8} className='m-0 p-0'>
        <CartList />
      </Col>
      <Col sm={12} md={4}>
        <PurchaseSummary />
      </Col>
    </Row>
  );
};

export default Cart;
