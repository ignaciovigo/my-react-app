import { Col, Container, Row } from "react-bootstrap";
import CartTable from "./CartTable";

const Cart = () => {
  return (
    <Row className='text-gris display-1 text-center bg-negro my-3 p-3'>
      <Col>
        <CartTable />
      </Col>
      <Col md={4}>
        <Container className=''>asd</Container>
      </Col>
    </Row>
  );
};

export default Cart;
