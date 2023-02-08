import { ListGroup } from "react-bootstrap";
import CartListItem from "./CartListItem";
import { useCart } from "../context/CartProvider";

const CartList = () => {
  const {
    cart,
    reduceAmount,
    incrementAmount,
    totalProducts,
    deleteProduct,
    options,
  } = useCart();
  const removeProduct = (id) => {
    deleteProduct(id, [...cart]);
  };
  return (
    <ListGroup
      variant='flush'
      className='bg-n gap-1 rounded p-1 m-1 mx-sm-2 mh-100 list-card-overflow'
    >
      {totalProducts !== 0 ? (
        cart.map((e) => {
          return (
            <CartListItem
              key={"row" + e.id}
              pdct={e}
              reduceAmount={reduceAmount}
              incrementAmount={incrementAmount}
              removeProduct={removeProduct}
              options={options}
            />
          );
        })
      ) : (
        <h4 className='display-5 text-muted m-auto'>Your cart is empty</h4>
      )}
    </ListGroup>
  );
};

export default CartList;
