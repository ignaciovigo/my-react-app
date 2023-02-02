import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { GoPlus, GoDash } from 'react-icons/go'
const ItemCount = ({ onConfirm, options }) => {
  const [counter, setCounter] = useState(1)

  const handleCount = (e) => {
    e.target.dataset.btn === 'more'
      ? setCounter(counter + 1)
      : setCounter(counter - 1)
  }
  const handleConfirm = () => {
    onConfirm(counter)
    setCounter(1)
  }
  return (
    <Row className='gap-2 py-2 justify-content-center'>
      <Col sm={6} md={6} className='text-center flex-nowrap'>        
        <button
          onClick={handleCount}
          disabled={counter === 1}
          className='btn-count'
        >
          <GoDash />
        </button>
        <span className='text-center text-gris px-3'>{counter}</span>
        <button
          onClick={handleCount}
          disabled={counter >= options.maxPerProduct}
          className='btn-count'
          data-btn='more'
        >
          <GoPlus />
        </button>
      </Col>
      <Col sm={6} md={4} className='text-center'>
        <button onClick={handleConfirm} className='btn-count text-nowrap'>
          Add to cart
        </button>
      </Col>
    </Row>
  )
}

export default ItemCount
