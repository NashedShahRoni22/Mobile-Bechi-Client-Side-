import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BookingModal from "../../components/BookingModal";
import ProductCard from "../../components/ProductCard";
import Spinner from "../../components/Spinner";

const AdvertiseProducts = () => {
  const [bookingData, setBookingData] = useState(null);
  const { isLoading, data: advertiseProducts } = useQuery({
    queryKey: ["advertise"],
    queryFn: () =>
      fetch("https://server-xi-fawn.vercel.app/products").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <Spinner></Spinner>;

  return (
    <div>
      {advertiseProducts && (
        <h1 className="text-xl my-5">
          Advertise Products: {advertiseProducts?.length}
        </h1>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {advertiseProducts?.map((p) => (
          <ProductCard
            key={p._id}
            p={p}
            setBookingData={setBookingData}
          ></ProductCard>
        ))}
      </div>
      {bookingData && (
        <BookingModal
          bookingData={bookingData}
          setBookingData={setBookingData}
        ></BookingModal>
      )}
    </div>
  );
};

export default AdvertiseProducts;
