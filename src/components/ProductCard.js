import React, { useContext } from "react";
import toast from "react-hot-toast";
import {
  IoLocationSharp,
  IoPricetagOutline,
  IoTodayOutline,
  IoPersonOutline,
  IoPhonePortraitOutline,
  IoArrowRedoOutline,
  IoTimeOutline
} from "react-icons/io5";
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
    postTime
  } = p;

  const handleReportItem = (p) => {
    const agree = window.confirm(
      `Do you want to report this product named ${p.name}`
    );
    if (agree) {
      fetch(`https://server-xi-fawn.vercel.app/reportedProducts/${p._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.matchedCount > 0) {
            toast.success(`${p.name} reported successfully!`);
          }
        });
    }
  };
  return (
    <div className="card shadow-xl border border-info">
      <figure>
        <img src={image} alt="ProductCardImage" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-info">{name}</h2>
          <div>
            <button
              onClick={() => handleReportItem(p)}
              className="btn btn-outline btn-error btn-xs"
            >
              Report to admin
            </button>
          </div>
        </div>
        <p className="flex items-center gap-2">
          <IoLocationSharp className="text-xl text-info"></IoLocationSharp>
          {location}{" "}
        </p>
        <p className="flex items-center gap-2">
          <IoArrowRedoOutline className="text-xl text-info"></IoArrowRedoOutline>
          Condition: {condition}{" "}
        </p>
        <p className="flex items-center gap-2">
          <IoPricetagOutline className="text-xl text-info"></IoPricetagOutline>
          Resale Price: {resalePrice}
        </p>
        <p className="flex items-center gap-2">
          <IoPricetagOutline className="text-xl text-info"></IoPricetagOutline>
          Orginal Price: {orginalPrice}
        </p>
        <p className="flex items-center gap-2">
          <IoTodayOutline className="text-xl text-info"></IoTodayOutline>Used
          For: {yearsOfUse} Month
        </p>
        <p className="flex items-center gap-2">
          <IoPersonOutline className="text-xl text-info"></IoPersonOutline>
          Seller: {sellerName}
        </p>
        <p className="flex items-center gap-2">
          <IoPhonePortraitOutline className="text-xl text-info"></IoPhonePortraitOutline>
          Phone Number: {mobileNumber}
        </p>

        <p className="flex items-center gap-2">
          <IoTimeOutline className="text-xl text-info"></IoTimeOutline>
          Post Time: {postTime}
        </p>

        <div className="mt-5">
          {/* The button to booking modal */}
          {user?.email ? (
            <label
              onClick={() => setBookingData(p)}
              htmlFor="booking-modal"
              className="btn btn-outline btn-info"
            >
              Book Now
            </label>
          ) : (
            <Link to="/login" className="btn btn-outline btn-info">
              Login Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
