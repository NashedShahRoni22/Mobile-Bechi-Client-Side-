import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";

const BookingModal = ({ bookingData, setBookingData }) => {
  const { _id, name, resalePrice, categorey } = bookingData;
  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const productName = form.productName.value;
    const productPrice = form.productPrice.value;
    const buyerPhoneNumber = form.buyerPhoneNumber.value;
    const buyerMeetingLocation = form.buyerMeetingLocation.value;
    
    const bookingData = {
      productId: _id,
      userName,
      userEmail,
      productName,
      productPrice,
      buyerPhoneNumber,
      buyerMeetingLocation,
    };
    fetch("http://localhost:8000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setBookingData(null);
          toast.success("Booking confirmed!");
        }
        else{
          toast.error(data.message);
          form.reset();
        }
      });
  };
  return (
    <section>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            You have selected <span className="text-info">{categorey}</span>{" "}
            categorey
          </h3>

          <form className="py-4" onSubmit={handleBooking}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* user details */}
              <input
                type="text"
                name="userName"
                defaultValue={user.displayName}
                readOnly
                className="input w-full input-bordered input-info"
              />
              <input
                type="email"
                name="userEmail"
                defaultValue={user.email}
                readOnly
                className="input w-full input-bordered input-info"
              />
              {/* product details */}
              <input
                type="text"
                name="productName"
                defaultValue={name}
                readOnly
                className="input w-full input-bordered input-info"
              />
              <input
                type="number"
                name="productPrice"
                defaultValue={resalePrice}
                readOnly
                className="input w-full input-bordered input-info"
              />
              {/* buyers phone number and address */}
              <input
                type="number"
                name="buyerPhoneNumber"
                placeholder="Your Phone Number"
                required
                className="input w-full input-bordered input-info"
              />
              <input
                type="text"
                name="buyerMeetingLocation"
                placeholder="Meeting Location"
                required
                className="input w-full input-bordered input-info"
              />
            </div>
            <input
              type="submit"
              value="Book"
              className="btn btn-outline btn-info mt-5"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingModal;
