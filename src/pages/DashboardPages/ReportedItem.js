import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Spinner from "../../components/Spinner";

const ReportedItem = () => {
  const { isLoading, data: reportedItems, refetch } = useQuery({
    queryKey: ["reportedProducts"],
    queryFn: () =>
      fetch("http://localhost:8000/reportedProducts").then((res) => res.json()),
  });

  if (isLoading) return <Spinner></Spinner>;
  const handleDelete = (ri) => {
    const agree = window.confirm(`Are you sure to delete ${ri.name}`);
    if (agree) {
      fetch(`http://localhost:8000/products/${ri._id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.error(`${ri.name} deleted successfully!`);
            refetch();
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-xl my-5">
        Total reported item:{reportedItems?.length}
      </h1>

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
            {reportedItems?.map((ri, i) => (
              <tr key={ri._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-12 h-12">
                      <img src={ri.image} alt="ProductImage" />
                    </div>
                  </div>
                </td>
                <td>{ri.name}</td>
                <td>{ri.resalePrice}</td>
                <td>
                  <button
                    onClick={() => handleDelete(ri)}
                    className="btn btn-outline btn-error btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedItem;
