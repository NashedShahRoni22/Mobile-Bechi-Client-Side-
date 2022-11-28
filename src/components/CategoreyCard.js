import React from "react";
import { Link } from "react-router-dom";

const CategoreyCard = ({ c }) => {
  return (
    <div className="relative border border-info">
      <figure>
        <img src={c.image} alt="categorey" className="w-1/2"/>
      </figure>
      <div className="absolute bottom-5 right-5">
        <Link to={`/categorey/${c.categorey_id}`} className="btn btn-info">{c.name}</Link>
      </div>
    </div>
  );
};

export default CategoreyCard;
