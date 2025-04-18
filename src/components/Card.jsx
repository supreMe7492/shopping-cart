import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "../styles/Card.css";

export function ProdCard({ id, name, imgurl, price, cartItems, setCartItems }) {
  const [count, setCount] = useState(1);

  function addCart() {
    const alrInCart = cartItems.filter((cart) => id === cart.id);
    if (alrInCart.length > 0) {
      const newCartItems = cartItems.map((cart) => {
        if (id == cart.id) {
          return { ...cart, quantity: cart.quantity + count };
        } else {
          return { ...cart };
        }
      });

      setCartItems(newCartItems);
    }
    if (!alrInCart.length) {
      const newCartItems = [
        ...cartItems,
        { id: id, name: name, imgurl: imgurl, price: price, quantity: count },
      ];

      setCartItems(newCartItems);
    }
  }
  return (
    <div className="cardContainer" key={id}>
      <div className="img">
        <img src={imgurl} alt={name} />
      </div>
      <div className="detContainer">
        <div className="cntprcContainer">
          <span className="count">
            {" "}
            <Plus onClick={() => setCount((prevCount) => prevCount + 1)} />{" "}
            {count}
            <Minus
              onClick={() => {
                if (count > 1) {
                  setCount((prevCount) => prevCount - 1);
                }
              }}
            />
          </span>
          <span className="price">$ {price * count}</span>
        </div>
        <span className="nameContainer">{name}</span>
        <button onClick={addCart} className="addBtn">
          {" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export function CartCard({
  id,
  name,
  imgurl,
  price,
  quantity,
  cartItems,
  setCartItems,
}) {
  function buyRemove() {
    const newCartItems = cartItems.filter((cart) => cart.id !== id);
    setCartItems(newCartItems);
  }

  return (
    <div className="cardContainer" key={id}>
      <div className="img">
        <img src={imgurl} alt={name} />
      </div>
      <div className="detContainer">
        <div className="cntprcContainer">
          <span className="quantity"> {quantity}</span>
          <span className="price">$ {price * quantity}</span>
        </div>
        <span className="nameContainer">{name}</span>
        <div className="cartBtns">
          <button className="buyBtn" onClick={buyRemove}>
            {" "}
            Buy
          </button>
          <button className="removeBtn" onClick={buyRemove}>
            {" "}
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
