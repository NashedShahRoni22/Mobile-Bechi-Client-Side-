import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import MyOrdersRow from "../../components/MyOrdersRow";
import Spinner from "../../components/Spinner";
import { AuthContext } from "../../context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:8000/bookings?email=${user?.email}`;
  const {
    isLoading,
    error,
    data: myBookings,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch(url,{
      headers:{
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((res) => res.json()),
  });

  if (isLoading) return <Spinner></Spinner>;

  if (error) return toast.error(error.message);

  return (
    <section>
      <h1 className="text-xl my-5">My Orders {myBookings?.length}</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myBookings.map((mb,i) => (
              <MyOrdersRow key={mb._id} mb={mb} i={i}></MyOrdersRow>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyOrders;
