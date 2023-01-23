import { Link } from "react-router-dom";
import { GoPlus, GoDash, GoTrashcan } from "react-icons/go";
import { cutTitle } from "./functions";
const CartTableRow = ({
  pdct,
  incrementAmount,
  reduceAmount,
  removeProduct,
}) => {
  const handleClick = (e) => {
    let idBtn = Number(e.target.dataset.pdctid);
    if (e.target.dataset.btn === "reduce") return reduceAmount(idBtn);
    if (e.target.dataset.btn === "trash") return removeProduct(idBtn);
    incrementAmount(idBtn);
  };
  return (
    <tr className='align-middle'>
      <td>
        <img src={pdct.image} alt='' width='50px' />
      </td>
      <td className=''>
        <Link
          to={`/item/${pdct.id}`}
          className='text-capitalize text-gris item-link text-decoration-underline'
        >
          {cutTitle(pdct.title)}
        </Link>
      </td>
      <td>${pdct.price}</td>
      <td>
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
      </td>
      <td>${(pdct.price * pdct.amount).toFixed(2)}</td>
      <td>
        <button
          onClick={handleClick}
          className='btn-count'
          data-pdctid={pdct.id}
          data-btn='trash'
        >
          <GoTrashcan />
        </button>
      </td>
    </tr>
  );
};

export default CartTableRow;
