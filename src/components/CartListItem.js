import { Col, ListGroup } from 'react-bootstrap'
import { GoDash, GoPlus, GoTrashcan } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { cutTitle } from './functions'
import { BsLink45Deg } from 'react-icons/bs'
import { FaCheckCircle } from 'react-icons/fa'
import { BiXCircle } from 'react-icons/bi'

const CartListItem = ({ pdct, incrementAmount, reduceAmount, removeProduct,options }) => {
  const handleClick = (e) => {
    const idBtn = e.target.dataset.pdctid
    if (e.target.dataset.btn === 'reduce') return reduceAmount(idBtn)
    if (e.target.dataset.btn === 'trash') return removeProduct(idBtn)
    incrementAmount(idBtn)
  }
  return (
    <ListGroup.Item 
    className={`fs-6 row d-flex fw-bold justify-content-around align-items-center text-light rounded gap-2 m-0 ${pdct.sell ?'bg-negro' : 'bg-rojo-claro'}`}>
      <Col className='p-0 d-flex justify-content-start align-items-center'>
        <img src={pdct.thumbnail} alt='' width='60px' />
        <div className='w-100 d-flex flex-column'>
          <Link
            className='text-capitalize item-link text-gris'
            to={`/item/${pdct.id}`}
          >
            {cutTitle(pdct.title)}
            <BsLink45Deg className='fs-4'/>
          </Link>
          {(pdct.sell)? null : <span className='mt-auto fs-6 lh-1 fw-lighter text-danger'>Max amount {options.maxPerProduct}</span>}
          {pdct.isStock ? null :  <span className='mt-auto fs-6 lh-1 fw-lighter text-danger'>No stock available</span>}          
        </div>
      </Col>
      <Col
        sm={12}
        md={12}
        lg={6}
        className='bg-n p-1 px-2 d-flex rounded justify-content-evenly align-items-center'
      >
        <div className='d-flex flex-column '>
          <span className='text-muted fw-normal'>price</span>
          <span>${pdct.price}</span>
        </div>
        <div className='d-flex flex-column '>
          <span className='text-muted fw-normal'>amount</span>
          <div className='d-flex justify-content-center align-items-center'>
            <button
              onClick={handleClick}
              className='btn-count me-2'
              data-pdctid={pdct.id}
              data-btn='reduce'
              disabled={pdct.amount === 0}
            >
              <GoDash />
            </button>
            {pdct.amount}
            <button
              onClick={handleClick}
              className='btn-count ms-2'
              data-pdctid={pdct.id}
              disabled={pdct.amount >= options.maxPerProduct}
            >
              <GoPlus />
            </button>
          </div>
        </div>
        <div>
          <div className='d-flex flex-column '>
            <span className='text-muted fw-normal'>subtotal</span>
            <span>${(pdct.price * pdct.amount).toFixed(2)}</span>
          </div>
        </div>
        <div>
          <button
            onClick={handleClick}
            className='btn-count'
            data-pdctid={pdct.id}
            data-btn='trash'
          >
            <GoTrashcan />
          </button>
        </div>
        <div>
          {pdct.sell ? <FaCheckCircle className='text-success fs-5' /> : <BiXCircle  className='text-danger fs-5'/>}
        </div>
      </Col>
    </ListGroup.Item>
  )
}

export default CartListItem
