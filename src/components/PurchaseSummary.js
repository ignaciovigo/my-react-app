import { Card } from "react-bootstrap";
import { useCart } from "../context/CartProvider";
import OrderModal from "./OrderModal";

const PurchaseSummary = () => {
  const { totalPrice, cart, restartCart } = useCart();
  const activeBuy = cart.length > 0 && cart.every((e) => e.isStock && e.sell);
  const total = totalPrice().toFixed(2);

  return (
    <Card className='bg-n h-100'>
      <Card.Header className='text-naranja fs-3 ff-base'>
        Order summary
      </Card.Header>
      <Card.Body className='d-flex flex-column gap-2'>
        <div className='bg-negro text-gris fs-5 p-2 d-flex justify-content-between'>
          <span className='text-muted'>SUBTOTAL :</span>
          <span>$ {total}</span>
        </div>
        <div className='bg-negro text-gris fs-5 p-2 d-flex justify-content-between'>
          <span className='text-muted'>TOTAL :</span>
          <span className='text-light'>$ {total}</span>
        </div>
        <OrderModal
          activeBuy={activeBuy}
          cart={cart}
          totalPrice={totalPrice}
          restartCart={restartCart}
        />
        <p className="text-muted text-start">Once you have the ticket it will be sent to your email</p>
      </Card.Body>
    </Card>
  );
};

export default PurchaseSummary;
