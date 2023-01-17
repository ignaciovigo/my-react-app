import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import {FaHome} from "react-icons/fa"
import {SiShopify} from "react-icons/si"
const NavBar = () => {
  return (
    <Navbar variant="dark" expand='sm' className="py-1 bg-negro sticky-top">
      <Container className="px-5">
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none">
            <Logo className="ms-sm-0 ms-md-5" img />
          </Link>
        </Navbar.Brand>
        <Navbar.Offcanvas
         id="menu"
         aria-labelledby="menulabel"
         placement='start'
         className="bg-negro"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id="menulabel" className="m-auto">
              <Logo img/>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
        <Nav className="gap-2 justify-content-sm-end align-items-center w-100">
          <NavLink to="/" className="effect-link p-2 p-sm-0"> <span className="d-sm-none"> <FaHome className="fs-2 text-marron"></FaHome></span>  Home</NavLink>
          <NavLink to="/products" className="effect-link p-2 p-sm-0"> <span className="d-sm-none"> <SiShopify className="fs-2 text-marron"></SiShopify></span>Products</NavLink>
        </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <NavLink className="ms-auto me-3 ms-sm-4 me-sm-5 effect-link" to="/cart"><CartWidget /></NavLink>
        <Navbar.Toggle aria-controls="menu"  className="btn-menu"/>
      </Container>
    </Navbar>
  );
};

export default NavBar;
