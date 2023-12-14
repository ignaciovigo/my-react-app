import { useId } from "react";
import useFilters from "../hooks/useFilters";
import { Col, Form, Row } from "react-bootstrap";

export function Filters({filters, setFilters}) {

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className='filters fs-5 text-gris'>
      <Row xs md={4}>
        <Col>
          <div className='form-group'>
            <Form.Label htmlFor={minPriceFilterId} className="text-gris">
            Minimum price:
            </Form.Label>
            <span className="text-center ms-2">${filters.minPrice}</span>
            <Form.Range
              type='range'
              id={minPriceFilterId}
              min='0'
              max='2000'
              onChange={handleChangeMinPrice}
              value={filters.minPrice}
              className='form-control-range'
            />
          </div>
        </Col>
        <Col>
          <div className='form-group'>
            <label htmlFor={categoryFilterId}>Category</label>
            <select
              id={categoryFilterId}
              onChange={handleChangeCategory}
              className='form-control bg-n text-naranja border-none border-0 '
            >
              <option  className='bg-n text-naranja rounded-1' value='all'>All</option>
              <option  className='bg-n text-naranja' value='smartphones'>Smartphones</option>
              <option  className='bg-n text-naranja' value='laptops'>Laptops</option>
              <option  className='bg-n text-naranja' value='skincare'>Skincare</option>
              <option  className='bg-n text-naranja' value='fragances'>Fragances</option>
              <option  className='bg-n text-naranja' value='mens-watches'>Mens watches</option>
              <option  className='bg-n text-naranja' value='womens-watches'>Womens watches</option>
              <option  className='bg-n text-naranja' value='sunglasses'>Sunglasses</option>
            </select>
          </div>
        </Col>
      </Row>
    </section>
  );
}
