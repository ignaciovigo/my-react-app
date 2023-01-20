import { NavLink } from "react-router-dom";
const SubNavBar = ({ ClassName }) => {
  return (

    <ul className={"list-subnav bg-n p-0 overflow-auto d-flex align-items-center justify-content-start justify-content-sm-center gap-2 sticky-top" + ClassName}>
      <NavLink NavLink to="/products" className="effect-link list-subnav-item text-nowrap">All</NavLink>
      <NavLink to="/category/electronics" className="effect-link list-subnav-item text-nowrap">Electronics</NavLink>
      <NavLink to="/category/jewelery" className="effect-link list-subnav-item text-nowrap">Jewelery</NavLink>
      <NavLink to="/category/men's clothing" className="effect-link list-subnav-item text-nowrap">Men's Clothing</NavLink>
      <NavLink to="/category/women's clothing" className="effect-link list-subnav-item text-nowrap">Women's Clothing</NavLink>
    </ul>
  );
};

export default SubNavBar;
