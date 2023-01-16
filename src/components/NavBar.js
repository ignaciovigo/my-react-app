import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <Navbar variant="dark" className="py-1 bg-negro sticky-top">
      <Container className="flex-wrap p-0 px-sm-2 justify-content-center justify-content-sm-between align-items-center">
        <Link to="/" className="text-decoration-none">
          <Logo className="ms-sm-0 ms-md-5" img />
        </Link>
        <Nav className="gap-2 align-items-center">
          <NavLink to="/" className="effect-link">Home</NavLink>
          <NavLink to="/products" className="effect-link me-md-5">Products</NavLink>
          <NavLink className="me-sm-4 effect-link" to="/cart"><CartWidget /></NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
