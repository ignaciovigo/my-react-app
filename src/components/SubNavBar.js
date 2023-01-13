import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
const SubNavBar = ({ClassName}) => {
  return (
    <Nav
      className={"bg-n justify-content-center p-1 " + ClassName}
      defaultActiveKey="/products"
    >
      <NavLink to="/products" className="effect-link">All</NavLink>
      <NavLink to="/category/1" className="effect-link">Electronics</NavLink>
      <NavLink to="/category/2" className="effect-link">Jewelery</NavLink>
      <NavLink to="/category/3" className="effect-link">Men's Clothing</NavLink>
      <NavLink to="/categoty/4" className="effect-link">Women's Clothing</NavLink>
    </Nav>
  );
};

export default SubNavBar;
