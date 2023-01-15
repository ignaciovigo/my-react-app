import { Button, Col, Container, Image, Row } from "react-bootstrap";

const ItemDetail = ({ productDetail }) => {
  return (
    <Container className="border-naranja bg-negro rounded d-flex justify-content-center align-items-center h-100 my-5 p-2">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="text-center">
          <Image
            src={productDetail.image}
            fluid
            className="rounded w-50"
          ></Image>
        </Col>
        <Col>
          <Row>
            <h3 className="text-marron text-wrapped fs-3 fw-bold">
              {productDetail.title}
            </h3>
          </Row>
          <Row className="overflow-y-scroll h-50">
            <p className="text-gris">{productDetail.description}</p>
          </Row>
          <Row>
            <Col>
              <p className="fs-5 fw-bold ff-base p-2 m-0 text-gris">
                <span className="text-muted me-1">Price:</span>
                <span className="text-naranja">$</span>
                {productDetail.price}
              </p>
            </Col>
            <Col>
              <Button className="bg-naranja border-0">Comprar</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
