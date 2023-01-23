import { Table } from "react-bootstrap";
import CartTableRow from "./CartTableRow";
import { useCart } from "../context/CartProvider";

const CartTable = () => {
  const { cart, reduceAmount, incrementAmount, totalProducts, deleteProduct } = useCart();
  const removeProduct = (id) => {
    deleteProduct(id, [...cart]);
  };
  return (
    <Table size='sm' hover variant='dark' className='fs-6 fw-bold '>
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {totalProducts != 0 ? (
          cart.map((e) => {
            return (
              <CartTableRow
                key={"row" + e.id}
                pdct={e}
                reduceAmount={reduceAmount}
                incrementAmount={incrementAmount}
                removeProduct={removeProduct}
              ></CartTableRow>
            );
          })
        ) : (
          <tr>
            <td colSpan={6} className='text-center py-5 text-muted'>
              The cart is Empty
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default CartTable;
