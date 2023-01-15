import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import NotFound from "./NotFound";
import SubNavBar from "./SubNavBar";
const Main = () => {
  return (
    <main>
      <SubNavBar ClassName="gap-5" />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<ItemListContainer/>}></Route>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </main>
  );
};

export default Main;
