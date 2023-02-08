import Carousel from "react-bootstrap/Carousel";
import useProducts from "../hooks/useProducts";
import ItemList from "./ItemList";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { arrayInSubArrays } from "./functions";


function CarouselProducts({ fieldPath, opStr, value, maxCards }) {
  const { products } = useProducts(null, fieldPath, opStr, value);

  const newPart = arrayInSubArrays(products, maxCards);
  return (
    <Carousel
      indicators={false}
      wrap={false}
      className='w-100'
      prevIcon={<MdNavigateBefore className='text-naranja' />}
      nextIcon={<MdNavigateNext className='text-naranja' />}
    >
      {newPart.map((e, index) => {
        return (
          <Carousel.Item key={`${index}carou`}>
            <ItemList products={e}></ItemList>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselProducts;
