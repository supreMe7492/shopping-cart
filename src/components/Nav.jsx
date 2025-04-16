import { House, ShoppingBasket, ShoppingCart } from "lucide-react";
import "../styles/Nav.css";
import { useNavigate } from "react-router-dom";
function useNavigator(name) {
  const navigate = useNavigate();
  return () => navigate(name);
}
export default function Nav({ cartNum = 0 }) {
  return (
    <>
      <nav>
        <span onClick={useNavigator("/")} className="siteName">
          Shop It
        </span>
        <ul>
          <li onClick={useNavigator("/")}>
            <House className="icon" />
            Home
          </li>
          <li onClick={useNavigator("/products")}>
            <ShoppingBasket className="icon" />
            Products
          </li>

          <li onClick={useNavigator("/cart")} className="cart">
            <ShoppingCart className="icon" />
            <span className="cartNum">{cartNum}</span>
          </li>
        </ul>
      </nav>
    </>
  );
}
