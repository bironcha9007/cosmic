import { Link, NavLink } from "react-router-dom"; 
import Logo from "../assets/logoc.svg"
import { useCart } from "../context/CartContext";
import "./Header.css";

export const Header = () => {
  const { cartList, total } = useCart();

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Productos</NavLink>
        <NavLink to="/cart" className="link">Carrito</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {cartList.length}/ ${total}</span>
      </Link>
    </header>
  )
}
