import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Spinner from "../../components/Spinner";
import { AuthContext } from "../../context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:8000/bookings?email=${user?.email}`;
  const {
    isLoading,
    data: myBookings,
    refetch
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => fetch(url,{
      headers:{
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then((res) => res.json()),
  });

  if (isLoading) return <Spinner></Spinner>;

  const handleDelete = (mb) => {
    const agree = window.confirm(`Are you sure to delete ${mb.productName}`);
    if (agree) {
      fetch(`http://localhost:8000/bookings/${mb._id}`, {
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
            {myBookings?.map((mb,i) => (
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
              <td>{mb.productPrice}</td>
              <td>
                <button 
                onClick={()=> handleDelete(mb)}
                className="btn btn-outline btn-error btn-xs">
                  Delete
                </button>
                <button className="btn btn-outline btn-success btn-xs ml-5">
                  Pay Now
                </button>
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
