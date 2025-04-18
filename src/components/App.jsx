import "../styles/App.css";
import { useState } from "react";
import Products from "./Products";
import Home from "./Home";
import useFetch from "./fetch";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import Cart from "./Cart";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const { name } = useParams();
  const { data, loading } = useFetch();

  if (!name) {
    return (
      <>
        <Home num={cartItems.length} />
      </>
    ); // Render Home component for "/" path
  }

  return (
    <>
      <Nav cartNum={cartItems.length} />
      {name == "products" ? (
        <Products
          data={data}
          loading={loading}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ) : name == "cart" ? (
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      ) : (
        <p>the path doesnt exist in this page</p>
      )}
    </>
  );
}

export default App;
