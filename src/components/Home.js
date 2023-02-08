import { Col, Container, Row } from "react-bootstrap";
import { ImFire } from "react-icons/im";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import CarouselProducts from "./CarouselProducts";

const Home = () => {
  return (
    <Container
      fluid
      className='text-gris display-1 p-0 text-center bg-negro rounded p-2'
    >
      <div className="d-flex justify-content-center">
      <Link to={"/"} className='text-decoration-none'>
        <Logo
          className='display-4 justify-content-center align-items-center'
          img
        />
      </Link>
      </div>
      <article className='banner-home'></article>
      <Row className='m-0 gap-4 d-flex flex-column'>
        <Col className='d-flex flex-column justify-content-center align-items-center'></Col>
        <Col className='bg-n p-2 m-0'>
          <h4 className='h2 text-naranja text-start m-0'>
            <span className='bg-n rounded'>
              Hot Sales <ImFire />
            </span>
          </h4>
          <CarouselProducts
            fieldPath='price'
            opStr='<'
            value={50}
            maxCards={4}
          />
        </Col>
        <Col className='bg-n p-2 m-0'>
          <h4 className='h2 text-naranja text-start m-0'>News</h4>
          <CarouselProducts
            fieldPath='price'
            opStr='>'
            maxCards={3}
            value={1000}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
