import ItemListContainer from "./ItemListContainer";
import SubNavBar from "./SubNavBar";
import { Routes, Route } from "react-router-dom";
const Products = () => {
  return (
    <>
      <SubNavBar ClassName="gap-5" />
      <Routes>
        <Route path="/products/" element={<ItemListContainer />}></Route>
        <Route path="/category/:id" element={<ItemListContainer />}></Route>
        {/* <Route path="/item/:id" element={<ItemDetailContainer/>}></Route> */}
      </Routes>
    </>
  );
};

export default Products;
