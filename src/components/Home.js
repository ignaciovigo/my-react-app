import { Container } from 'react-bootstrap'
import OrderForm from './OrderForm'

const Home = () => {
  
  return (
    <Container fluid className='text-gris display-1 p-0 text-center'>
      <div className='fs-5 m-auto row row-cols-2 justify-content-center'>
      <OrderForm />
      </div>
    </Container>
  )
}

export default Home
