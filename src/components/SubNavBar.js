import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
const SubNavBar = ({ClassName}) => {
  return (
    <Nav className={"bg-n justify-content-center p-1 " + ClassName}>
      <NavLink to="/products" className="effect-link">All</NavLink>
      <NavLink to="/category/electronics" className="effect-link">Electronics</NavLink>
      <NavLink to="/category/jewelery" className="effect-link">Jewelery</NavLink>
      <NavLink to="/category/men's clothing" className="effect-link">Men's Clothing</NavLink>
      <NavLink to="/category/women's clothing" className="effect-link">Women's Clothing</NavLink>
    </Nav>
  );
};

export default SubNavBar;
