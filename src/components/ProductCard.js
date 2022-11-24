import React from "react";
import { IoLocationSharp } from "react-icons/io5";
const ProductCard = ({ p }) => {
  const {
    name,
    image,
    location,
    condition,
    resalePrice,
    orginalPrice,
    yearsOfUse,
    sellerName,
    mobileNumber,
  } = p;
  return (
    <div className="card shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="flex items-center gap-2">
          <IoLocationSharp className="text-xl"></IoLocationSharp>
          {location}
        </p>
        <p>Condition: {condition}</p>
        <p>Resale Price: {resalePrice}</p>
        <p>Orginal Price: {orginalPrice}</p>
        <p>Used For: {yearsOfUse}</p>
        <p>Seller: {sellerName}</p>
        <p>Phone Number: {mobileNumber}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
