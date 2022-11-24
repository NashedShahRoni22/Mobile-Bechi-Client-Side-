import React from "react";
import { Link } from "react-router-dom";

const CategoreyCard = ({ c }) => {
  return (
    <div className="relative">
      <figure>
        <img src={c.image} alt="categorey" />
      </figure>
      <div className="absolute bottom-5 left-5">
        <Link to={`/products`} className="btn ">{c.name}</Link>
      </div>
    </div>
  );
};

export default CategoreyCard;
