import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../components/BookingModal";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const products = useLoaderData()
  const [bookingData, setBookingData] = useState(null);

  return (
    <div>
      <h1 className="text-xl font-bold my-5 text-info">
        Total Products: {products.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard
            key={p._id}
            p={p}
            setBookingData={setBookingData}
          ></ProductCard>
        ))}
      </div>
      {bookingData && 
      <BookingModal 
      bookingData={bookingData} 
      setBookingData={setBookingData}>
      </BookingModal>}
    </div>
  );
};

export default Products;
