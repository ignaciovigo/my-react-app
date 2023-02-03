import { Form, InputGroup } from "react-bootstrap";
import useForm from "../hooks/useForm";
import { validationsForm } from "../logic/orderFormValidations";

const initialForm = {
  email: "",
  address: "",
  city: "",
  state: "",
};

const OrderForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='email'>
        <Form.Label>E-mail:</Form.Label>
        <Form.Control
          type='email'
          placeholder='name@example.com'
          className={`bg-negro-claro cell ${errors.email ? "invalid" : null}`}
          name='email'
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email ? (
          <p className='invalid text-start pt-1'>{errors.email}</p>
        ) : null}
      </Form.Group>
      <Form.Group className='mb-3' controlId='address'>
        <Form.Label>address :</Form.Label>
        <Form.Control
          type='text'
          placeholder='123 West Main St'
          className={`bg-negro-claro cell ${errors.address && "invalid"}`}
          name='address'
          value={form.address}
          onChange={handleChange}
          required
        />
        {errors.address ? (
          <p className='invalid text-start pt-1'>{errors.address}</p>
        ) : (
          <Form.Text className='text-start'>Street address</Form.Text>
        )}
      </Form.Group>
      <div className='d-flex gap-4'>
        <Form.Group className='mb-3' controlId='city'>
          <Form.Control
            type='text'
            className={`bg-negro-claro cell ${errors.city && "invalid"}`}
            name='city'
            value={form.city}
            onChange={handleChange}
            required
          />
          {errors.city ? (
          <p className='invalid text-start pt-1'>{errors.city}</p>
        ) : (
          <Form.Text className='text-start'>City</Form.Text>
        )}
        </Form.Group>
        <Form.Group className='mb-3' controlId='state'>
          <Form.Control
            type='text'
            className={`bg-negro-claro cell ${errors.state && "invalid"}`}
            name='state'
            value={form.state}
            onChange={handleChange}
            required
          />
          {errors.state ? (
          <p className='invalid text-start pt-1'>{errors.state}</p>
        ) : (
          <Form.Text className='text-start'>State / Province</Form.Text>
        )}
        </Form.Group>
      </div>
      <button type="submit">click</button>
    </Form>
  );
};

export default OrderForm;
