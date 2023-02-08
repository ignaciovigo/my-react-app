import Carousel from "react-bootstrap/Carousel";
import useProducts from "../hooks/useProducts";
import ItemList from "./ItemList";
import Loader from "./Loader";
import {MdNavigateBefore,MdNavigateNext} from 'react-icons/md'

const arrayInSubArrays = (arr, maxElements) => {
  const out = [];
  for (let i = 0; i < arr.length; i += maxElements) {
    const element = arr.slice(i, i + maxElements);
    out.push(element);
  }
  return out;
};

function CarouselProducts({ fieldPath, opStr, value,maxCards }) {
  const { products, isLoading } = useProducts(null, fieldPath, opStr, value);
  
  
  const newPart = arrayInSubArrays(products, maxCards);
  return (
    <Carousel
    
      indicators={false}
      wrap={false}
      className='w-100'
      prevIcon={<MdNavigateBefore className="text-naranja" />}
      nextIcon={<MdNavigateNext className="text-naranja"/>}
    >
      {
        newPart.map((e, index) => {
          return (
            <Carousel.Item key={`${index}carou`}>
              <ItemList products={e}></ItemList>
            </Carousel.Item>
          );
        })
      }
    </Carousel>
  );
}

export default CarouselProducts;
