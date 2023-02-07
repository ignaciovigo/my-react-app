import { Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import { CgDetailsMore } from 'react-icons/cg'
import { cutTitle } from './functions'
import { useEffect, useState } from 'react'
import { useCart } from '../context/CartProvider'
const Item = ({ product }) => {
  const [isAdd,setIsAdd] = useState(false)
  const {addProduct,deleteProduct,cart,isExists} = useCart()

  useEffect( () =>{
    setIsAdd(isExists(product.id))
  },[cart])

  const handleClick = (e) =>{
    const btn = e.target.dataset.btn;
    (btn === 'add')? addProduct(product,1) : deleteProduct(product.id,[...cart]);
    
  }
  return (
    <Col xs={10} sm={5} md={4} lg={2} className='p-3 p-lg-1'>
      <Card className={`h-100 effect-card ${isAdd ? 'bg-naranja': 'bg-negro'}`}>
        <Card.Body className='p-1 d-flex justify-content-center align-items-center'>
          <Card.Title className={`m-0 text-gris fs-6 text-center ${isAdd ? 'text-negro' : 'text-gris'}`}>
            {cutTitle(product.title)}
          </Card.Title>
        </Card.Body>
        <Card.Img
          variant='bottom'
          src={product.thumbnail}
          width='250px'
          height='250px'
          className='rounded card-img'
        />
        <Card.ImgOverlay className='d-flex justify-content-end align-items-end p-2 gap-2 overflow-hidden'>
          <Card.Text className='fs-6 fw-bold ff-base bg-negro rounded p-2 m-0 text-gris me-auto'>
            <span className='text-muted me-1'>Price:</span>
            <span className='text-naranja'>$</span>
            {product.price}
          </Card.Text>
          <Link
            to={`/item/${product.id}`}
            className='bg-negro p-2 rounded-circle fs-6 cd-link'
          >
            <CgDetailsMore className='m-1 text-naranja' />
          </Link>
          <button onClick={handleClick} data-btn={isAdd ? 'remove' : 'add'} className='bg-negro p-2 fs-6 rounded-circle cd-link border-0'>
            <FaPlus className={`m-1 pe-none text-naranja ${isAdd? 'rotate': null}`} />
          </button>
        </Card.ImgOverlay>
      </Card>
    </Col>
  )
}

export default Item
