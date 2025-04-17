import { useState } from "react";
import "../styles/Card.css";

export function ProdCard({ id, name, imgurl, price }) {
  return (
    <div className="cardContainer" key={id}>
      <div className="img">
        <img src={imgurl} alt={name} />
      </div>
      <div className="detContainer">
        <div className="cntprcContainer">
          <span className="count"></span>
          <span className="price">{price}</span>
        </div>
        <span className="nameContainer">{name}</span>
        <button className="addBtn"> Add to Cart</button>
      </div>
    </div>
  );
}
