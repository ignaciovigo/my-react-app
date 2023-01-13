import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <Navbar variant="dark" className="py-1 bg-negro fixed-top">
      <Container className="flex-wrap justify-content-center justify-content-sm-between">
        <Navbar.Brand href="#home">
          <Logo className="ms-sm-0 ms-md-5" img={true} />
        </Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link className="effect-link">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="effect-link me-5">Products</Nav.Link>
          </Nav.Item>
          <Nav.Item className="me-sm-4">
            <CartWidget />
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
