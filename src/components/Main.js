import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Products from "./Products";
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
      </Routes>
    </main>
  );
};

export default Main;
