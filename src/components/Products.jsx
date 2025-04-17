import { ProdCard } from "./card";
import "../styles/Products.css";
export default function Products({ data, loading }) {
  console.log(data);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (data !== null) {
    return (
      <div className="productContainer">
        {data.map((dat) => (
          <ProdCard
            id={dat.id}
            name={dat.title}
            imgurl={dat.image}
            price={dat.price}
          />
        ))}
      </div>
    );
  }
}
