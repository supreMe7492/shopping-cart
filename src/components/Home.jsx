import Nav from "./Nav";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <div className="content">
        <div className="main">
          <span className="title">Shop anything you want on click</span>
          <p className="titlePara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            praesentium libero architecto assumenda quae quibusdam illum optio
            cupiditate quia molestias, pariatur explicabo. Asperiores, magni
            nihil. Quia accusamus ratione vel ipsam?
          </p>
          <button onClick={() => navigate("/products")} className="expBtn">
            Explore Products
          </button>
        </div>
      </div>
    </>
  );
}
