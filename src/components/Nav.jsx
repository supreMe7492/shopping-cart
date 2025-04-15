import { House, ShoppingBasket, ShoppingCart } from "lucide-react";
import "../styles/Nav.css";
export default function Nav({ cartNum = 0 }) {
  return (
    <>
      <nav>
        <span className="siteName">Shop It</span>
        <ul>
          <li>
            <House size={"18px"} />
            Home
          </li>
          <li>
            <ShoppingBasket size={"18px"} />
            Products
          </li>

          <li className="cart">
            <ShoppingCart size={"22px"} />
            <span className="cartNum">{cartNum}</span>
          </li>
        </ul>
      </nav>
    </>
  );
}
