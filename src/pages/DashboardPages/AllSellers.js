import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Spinner from "../../components/Spinner";

const AllSellers = () => {
  const {
    isLoading,
    data: allSellers,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: () =>
      fetch("https://server-xi-fawn.vercel.app/sellers").then((res) => res.json()),
  });

  if (isLoading) return <Spinner></Spinner>;

  const handleDelete = (user) => {
    const agree = window.confirm(`Are you sure to delete ${user.name}`);
    if (agree) {
      fetch(`https://server-xi-fawn.vercel.app/user/${user._id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.error(`${user.name} deleted successfully!`);
            refetch();
          }
        });
    }
  };

  const handleVerify = (user) => {
    fetch(`https://server-xi-fawn.vercel.app/sellers/verify/${user._id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`Seller ${user.name} verified!`);
          refetch();
        }
      });
  };
  return (
    <div>
      <h1 className="text-xl my-5">All Sellers {allSellers?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allSellers.map((as, i) => (
              <tr key={as._id}>
                <th>{i + 1}</th>
                <td>{as.name}</td>
                <td>{as.email}</td>
                <td>{as.role}</td>
                <td>
                  <button
                    onClick={() => handleDelete(as)}
                    className="btn btn-outline btn-error btn-xs"
                  >
                    Delete
                  </button>
                  {as.isVerify ? (
                    <span className="text-success ml-5">Verified</span>
                  ) : (
                    <button
                      onClick={() => handleVerify(as)}
                      className="btn btn-outline btn-success btn-xs ml-5"
                    >
                      Verify
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
