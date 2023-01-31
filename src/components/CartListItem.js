import { Col, ListGroup } from 'react-bootstrap'
import { GoDash, GoPlus, GoTrashcan } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { cutTitle } from './functions'

const CartListItem = ({ pdct, incrementAmount, reduceAmount, removeProduct }) => {
  const handleClick = (e) => {
    const idBtn = e.target.dataset.pdctid
    if (e.target.dataset.btn === 'reduce') return reduceAmount(idBtn)
    if (e.target.dataset.btn === 'trash') return removeProduct(idBtn)
    incrementAmount(idBtn)
  }
  return (
    <ListGroup.Item className='bg-negro fs-6 row d-flex fw-bold justify-content-around align-items-center text-light rounded gap-2 m-0'>
      <Col className='p-0 d-flex justify-content-start align-items-center'>
        <img src={pdct.thumbnail} alt='' width='60px' />
        <div className='w-100'>
          <Link
            className='text-capitalize item-link text-gris'
            to={`/item/${pdct.id}`}
          >
            {cutTitle(pdct.title)}
          </Link>
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
              disabled={pdct.amount > 10}
            >
              <GoPlus />
            </button>
            {pdct.amount}
            <button
              onClick={handleClick}
              className='btn-count ms-2'
              data-pdctid={pdct.id}
              data-btn='reduce'
              disabled={pdct.amount === 0}
            >
              <GoDash />
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
      </Col>
    </ListGroup.Item>
  )
}

export default CartListItem
