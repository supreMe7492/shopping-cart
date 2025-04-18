import { CartCard } from "./card";
export default function Cart({ cartItems, setCartItems }) {
  return (
    <div className="productContainer">
      {cartItems.map((dat) => (
        <CartCard
          id={dat.id}
          name={dat.name}
          imgurl={dat.imgurl}
          price={dat.price}
          quantity={dat.quantity}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
}
