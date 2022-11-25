import React from "react";
import { 
  IoLocationSharp, 
  IoPricetagOutline, 
  IoTodayOutline, 
  IoPersonOutline, 
  IoPhonePortraitOutline,
  IoArrowRedoOutline
 } from "react-icons/io5";
const ProductCard = ({ p, setBookingData }) => {

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
        <p className="flex items-center gap-2"><IoLocationSharp className="text-xl text-info"></IoLocationSharp>{location} </p>
        <p className="flex items-center gap-2"><IoArrowRedoOutline className="text-xl text-info"></IoArrowRedoOutline>Condition: {condition} </p>
        <p className="flex items-center gap-2"><IoPricetagOutline className="text-xl text-info"></IoPricetagOutline>Resale Price: {resalePrice}</p>
        <p className="flex items-center gap-2"><IoPricetagOutline className="text-xl text-info"></IoPricetagOutline>Orginal Price: {orginalPrice}</p>
        <p className="flex items-center gap-2"><IoTodayOutline className="text-xl text-info"></IoTodayOutline>Used For: {yearsOfUse}</p>
        <p className="flex items-center gap-2"><IoPersonOutline className="text-xl text-info"></IoPersonOutline>Seller: {sellerName}</p>
        <p className="flex items-center gap-2"><IoPhonePortraitOutline className="text-xl text-info"></IoPhonePortraitOutline>Phone Number: {mobileNumber}</p>
        
          <div className="mt-5">
            {/* The button to booking modal */}
            <label 
            onClick={()=> setBookingData(p)}
            htmlFor="booking-modal" 
            className="btn btn-outline btn-info">
              Book Now
            </label>
          </div>
        
      </div>
    </div>
  );
};

export default ProductCard;
