import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
      <nav>
        <a className="nav__link" href="https://www.google.com/">
          HOMBRES
        </a>
        <a className="header__link" href="https://www.google.com/">
          MUJERES
        </a>
        <a className="header__link" href="https://www.google.com/">
          NIÑOS
        </a>
        <CartWidget/>
      </nav>
  );
};

export default NavBar;
