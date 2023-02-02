import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import ItemListContainer from './ItemListContainer'
import useProducts from '../hooks/useProducts'
import ItemList from './ItemList'

function Carousell () {
  const { products } = useProducts(null,'price','<',20) 
  console.log(products) 
  return (
    <Carousel indicators={false} wrap={false}>
      <Carousel.Item>
        <ItemList products={products.slice(0,4)} />
        {/* <Row className='justify-content-center align-items-center fs-6'>
          <Col xs={12} className='d-flex justify-content-center'>
            <Card style={{ width: '18rem' }} className='flex-row'>
              <Card.Img variant='top' src='holder.js/100px180' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className='justify-content-center align-items-center gap-3 fs-6'>
          <Col xs={12} className='d-flex justify-content-center'>
            <Card style={{ width: '18rem' }} className='flex-row '>
              <Card.Img variant='top' src='holder.js/100px180' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className='justify-content-center align-items-center gap-3 fs-6'>
          <Col xs={12} className='d-flex justify-content-center'>
            <Card style={{ width: '18rem' }} className='flex-row'>
              <Card.Img variant='top' src='holder.js/100px180' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousell
