import React from "react";

const BookingModal = ({ bookingData }) => {
    const {name} = bookingData
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
          <h3 className="text-lg font-bold">{name}</h3>

          <form className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* user deta☻ils */}
            <input
              type="text"
              placeholder="User name"
              className="input w-full input-bordered input-info"
            />
            <input
              type="text"
              placeholder="User name"
              className="input w-full input-bordered input-info"
            />
            {/* product details */}
            <input
              type="text"
              placeholder="Item name"
              className="input w-full input-bordered input-info"
            />
            <input
              type="text"
              placeholder="Item price"
              className="input w-full input-bordered input-info"
            />
            {/* buyers phone number and address */}
            <input
              type="text"
              placeholder="Your Phone Number"
              className="input w-full input-bordered input-info"
            />
            <input
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered input-info"
            />
            </div>
            <input 
            type="submit" 
            value="Book" 
            className="btn btn-outline btn-info mt-5" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingModal;
