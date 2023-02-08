import { serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { regexAddress, regexCity, regexEmail } from "../logic/regexValidations";
import {
  AddOrder,
  getProductById,
  updateStockProduct,
} from "../services/firebase";

const OrderForm = ({ cart, totalPrice, handleClose, restartCart }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const sendOrder = (dataForm, cart) => {
    const order = {
      buyer: dataForm,
      items: cart.map((item) => {
        const { title, category, amount, id, price } = item;
        return { title, category, amount, id, price };
      }),
      date: serverTimestamp(),
      total: totalPrice(),
    };

    return AddOrder(order).then((ticket) => {
      order.items.forEach((e) => {
        getProductById(e.id).then((resp) => {
          updateStockProduct(e.id, e.amount, resp.stock);
        })
      })
      return ticket
      
    });
  };

  const onSubmit = (dataUserForm) => {
    setIsLoading(true);
    handleClose();
    sendOrder(dataUserForm, cart).then(ticket =>{
      restartCart();
      toast.info(`Thanks for buy! here's your ticket: ${ticket}`,{
        autoClose:15000
      })
      setIsLoading(false);
    })
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className='mb-4' controlId='email'>
        <Form.Label>E-mail:</Form.Label>
        <Form.Control
          className={`bg-negro-claro cell ${errors.email && "invalid"}`}
          type='email'
          placeholder='example@gmail.com'
          {...register("email", {
            required: true,
            pattern: regexEmail,
          })}
        />
        {errors.email?.type === "required" && (
          <p className=' invalid text-start pt-1'>You must fill this field</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className=' invalid text-start pt-1'>
            Please enter a valid email address
          </p>
        )}
      </Form.Group>
      <Form.Group className='mb-4' controlId='address'>
        <Form.Label>Street address:</Form.Label>
        <Form.Control
          className={`bg-negro-claro cell ${errors.address && "invalid"}`}
          type='text'
          placeholder='123 Example West Ex'
          {...register("address", {
            required: true,
            pattern: regexAddress,
          })}
        />
        {errors.address?.type === "required" && (
          <p className=' invalid text-start pt-1'>You must fill this field</p>
        )}
        {errors.address?.type === "pattern" && (
          <p className=' invalid text-start pt-1'>
            Please enter a valid Street Address
          </p>
        )}
      </Form.Group>
      <div className='d-flex gap-4 justify-content-center mb-4'>
        <Form.Group controlId='city'>
          <Form.Label>City:</Form.Label>
          <Form.Control
            className={`bg-negro-claro cell ${errors.city && "invalid"}`}
            type='text'
            {...register("city", {
              required: true,
              pattern: regexCity,
            })}
          />
          {errors.city?.type === "required" && (
            <p className=' invalid text-start pt-1'>You must fill this field</p>
          )}
          {errors.city?.type === "pattern" && (
            <p className=' invalid text-start pt-1'>
              Please enter a valid city
            </p>
          )}
        </Form.Group>
        <Form.Group controlId='state'>
          <Form.Label>State / Province:</Form.Label>
          <Form.Control
            className={`bg-negro-claro cell ${errors.state && "invalid"}`}
            type='text'
            {...register("state", {
              required: true,
              pattern: regexCity,
            })}
          />
          {errors.state?.type === "required" && (
            <p className=' invalid text-start pt-1'>You must fill this field</p>
          )}
          {errors.state?.type === "pattern" && (
            <p className=' invalid text-start pt-1'>
              Please enter a valid state
            </p>
          )}
        </Form.Group>
      </div>
      <div className='d-flex justify-content-center'>
        <button type='submit' disabled={isLoading} className='btn-count p-2 px-5'>
          {isLoading ? <Spinner animation='border' role='status' /> : "Confirm"}
        </button>
      </div>
    </Form>
  );
};

export default OrderForm;
