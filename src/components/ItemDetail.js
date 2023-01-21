import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
const ItemDetail = ({ productDetail }) => {

  const addToCart = (counter) =>{
    console.log(counter)
  }

  return (
    <Container fluid className='border-naranja bg-negro rounded m-0  h-100 p-5 mt-5'>
      <Row className='align-items-center'>
        <Col xs={12} md={6} sm={4} className='text-center'>
          <Image
            src={productDetail.image}
            fluid
            className='rounded'
            width='250px'
          ></Image>
        </Col>
        <Col>
          <Row>
            <h3 className='text-marron text-wrapped fs-3 fw-bold'>
              {productDetail.title}
            </h3>
            <p className='text-gris text-muted fs-5'>
              category:{" "}
              <Link
                to={`/category/${productDetail.category}`}
                className='text-gris text-capitalize item-link'
              >
                {productDetail.category}
              </Link>
            </p>
          </Row>
          <Row className='overflow-y-scroll overflow-scroll description-detail me-1'>
            <p className='text-gris'>{productDetail.description}</p>
          </Row>
          <Row className='py-1'>
            <p className='fs-5 fw-bold ff-base m-0 text-gris'>
              <span className='text-muted me-1'>Price:</span>
              <span className='text-naranja'>$</span>
              {productDetail.price}
            </p>
          </Row>
          <ItemCount onConfirm={addToCart} />
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
