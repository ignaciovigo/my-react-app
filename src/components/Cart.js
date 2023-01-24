import { Col, Container, Row } from "react-bootstrap";
import CartTable from "./CartTable";

const Cart = () => {
  return (
    <Row className='text-gris text-center bg-negro my-3 justify-content-center mx-2'>
      <Col xs={8} sm={10} md={8} className='d-flex justify-content-center'>
        <CartTable />
      </Col>
      <Col sm={12} md={4}>
        <Container className=''>asd</Container>
      </Col>
    </Row>
  );
};

export default Cart;
