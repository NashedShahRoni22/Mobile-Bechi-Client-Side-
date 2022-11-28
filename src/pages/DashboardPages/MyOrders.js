import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { AuthContext } from "../../context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `https://server-xi-fawn.vercel.app/bookings?email=${user?.email}`;
  const {
    isLoading,
    data: myBookings,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: () =>
      fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading) return <Spinner></Spinner>;

  const handleDelete = (mb) => {
    const agree = window.confirm(`Are you sure to delete ${mb.productName}`);
    if (agree) {
      fetch(`https://server-xi-fawn.vercel.app/bookings/${mb._id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.error(`${mb.productName} deleted successfully!`);
            refetch();
          }
        });
    }
  };

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
            {myBookings?.map((mb, i) => (
              <tr key={mb._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-12 h-12">
                      <img src={mb.productImage} alt="ProductImage" />
                    </div>
                  </div>
                </td>
                <td>{mb.productName}</td>
                <td>{mb.productPrice} BDT</td>
                <td>
                  <button
                    onClick={() => handleDelete(mb)}
                    className="btn btn-outline btn-error btn-sm"
                  >
                    Delete
                  </button>
                  {mb.productPrice && !mb.paid && (
                    <Link
                      to={`/dashboard/payment/${mb._id}`}
                     className="btn btn-outline btn-success btn-sm ml-5">
                      Pay Now
                    </Link>
                  )}
                  {
                    mb.productPrice && mb.paid &&
                    <span className="text-success ml-5">Paid</span>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyOrders;
