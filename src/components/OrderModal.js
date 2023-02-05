import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Logo from "./Logo";
import OrderForm from "./OrderForm";

function OrderModal({ activeBuy, cart, totalPrice, restartCart }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className='btn-count px-4 py-2 mt-4'
        disabled={!activeBuy}
        onClick={handleShow}
      >
        Buy
      </button>

      <Modal show={show} onHide={handleClose} backdrop='static'>
        <Modal.Header
          closeButton
          closeVariant='white'
          className='bg-negro text-naranja border-bottom-0'
        >
          <Logo img />
        </Modal.Header>
        <Modal.Body className='bg-negro text-naranja'>
          <OrderForm
            cart={cart}
            totalPrice={totalPrice}
            handleClose={handleClose}
            restartCart={restartCart}
          />
        </Modal.Body>
        <Modal.Footer className='bg-negro border-top-0 d-flex flex-column justify-content-center'>
          <button className='btn-count close' onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderModal;
