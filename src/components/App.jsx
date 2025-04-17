import "../styles/App.css";
import Products from "./Products";
import useFetch from "./fetch";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
function App() {
  const { name } = useParams();
  const { data, loading } = useFetch();

  return (
    <>
      <Nav />
      {name == "products" ? (
        <Products data={data} loading={loading} />
      ) : (
        <p>the path doesnt exist in this page</p>
      )}
    </>
  );
}

export default App;
