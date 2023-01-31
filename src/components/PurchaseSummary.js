import { Card } from 'react-bootstrap'
import { useCart } from '../context/CartProvider'

const PurchaseSummary = () => {
  const { totalPrice,cart } = useCart()
  console.log(cart)
  const activeBuy = cart.every(  e => e.isStock && e.sell)
  console.log(activeBuy)
  return (
    <Card className='bg-n h-100'>
      <Card.Header className='text-naranja fs-3 ff-base'>
        Order summary
      </Card.Header>
      <Card.Body className='d-flex flex-column gap-2'>
        <div className='bg-negro text-gris fs-5 p-2 d-flex justify-content-between'>
          <span className='text-muted'>SUBTOTAL:</span>
          <span>$ {totalPrice().toFixed(2)}</span>
        </div>
        <div className='bg-negro text-gris fs-5 p-2 d-flex justify-content-between'>
          <span className='text-muted'>TOTAL:</span>
          <span className='text-light'>$ {totalPrice().toFixed(2)}</span>
        </div>
        <button className='btn-count px-4 py-2 mt-4' disabled={!activeBuy} >Buy</button>
      </Card.Body>
    </Card>
  )
}

export default PurchaseSummary
