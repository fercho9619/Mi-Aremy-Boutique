import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src="/public/img/Logo.jpeg" alt="Mi Aremy" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/bolsas" className="nav-link">Bolsas</Link>
        <Link to="/zapatos" className="nav-link">Zapatos</Link>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
