import React, { useContext } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const ProductCard = ({ p, setBookingData }) => {
  const { user } = useContext(AuthContext);

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
        <h2 className="card-title text-info">{name}</h2>
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
        {user ? (
          <div className="mt-5">
            {/* The button to booking modal */}
            <label 
            onClick={()=> setBookingData(p)}
            htmlFor="booking-modal" 
            className="btn btn-outline btn-info">
              Book Now
            </label>
          </div>
        ) : (
          <div className="card-actions justify-start mt-5">
            <Link to="/login" className="btn btn-outline btn-info">
              Please Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
