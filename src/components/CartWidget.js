import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/CartProvider'

const CartWidget = () => {
  const { totalProducts } = useCart()
  return (
    <>
      <button type='button' className='btn btn-nav position-relative mt-2'>
        <FaShoppingCart className='text-naranja fs-3' />
        <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-naranja'>
          {totalProducts}
          <span className='visually-hidden'>unread messages</span>
        </span>
      </button>
    </>
  )
}

export default CartWidget
