import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Logo from "./Logo";

function OrderModal({ activeBuy }) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({email:'',address:'',city:'',state:''});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    console.log('order')
    const handleOnChange = (e) => {
        setForm((form) => ({...form,[e.target.name] : e.target.value}));
      };
      const handleOnSubmit = (e) =>{
        e.preventDefault()
      }
  return (
    <>
      <button
        className='btn-count px-4 py-2 mt-4'
        /* disabled={!activeBuy} */
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
        <Form onSubmit={handleOnSubmit} >
            <Form.Group className='mb-3' controlId='email'>
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                type='email'
                placeholder='name@example.com'
                autoFocus
                className='bg-negro-claro cell'
                name='email'
                value={form.email}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='address'>
              <Form.Label>address :</Form.Label>
              <Form.Control
                type='text'
                placeholder='example 1224'
                className='bg-negro-claro cell'
                name='address'
                value={form.address}
                onChange={handleOnChange}
                required
              />
              <Form.Text>Street address</Form.Text>
            </Form.Group>
            <div className='d-flex gap-4'>
              <Form.Group className='mb-3' controlId='city'>
                <Form.Control
                  type='text'
                  className='bg-negro-claro cell'
                  name='city'
                  value={form.city}
                  onChange={handleOnChange}
                  required
                />
                <Form.Text>City</Form.Text>
              </Form.Group>
              <Form.Group className='mb-3' controlId='state'>
                <Form.Control
                  type='text'
                  className='bg-negro-claro cell'
                  name='state'
                  value={form.state}
                  onChange={handleOnChange}
                  required
                />
                <Form.Text>State / Province</Form.Text>
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-negro border-top-0 d-flex flex-column justify-content-center'>
          <button className='btn-count px-4 py-1' type="submit"  onClick={handleClose}>
            Confirm
          </button>
          <button className='btn-count close' onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderModal;
