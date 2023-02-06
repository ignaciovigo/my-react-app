import { Container } from 'react-bootstrap'
import Loader from './Loader'
import { toast } from "react-toastify";

const Home = () => {
  const handleClick = (e) =>{
  toast.error('Thanks for your buy!')    
  }
  return (
    <Container fluid className='text-gris display-1 p-0 text-center'>
      <div className='fs-6'>
        <span className='fs-5 w-50'>
        <Loader />
        <button onClick={handleClick}>button</button>
        </span>
      </div>
    </Container>
  )
}

export default Home
