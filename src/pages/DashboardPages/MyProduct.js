import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Spinner from "../../components/Spinner";
import { AuthContext } from "../../context/AuthProvider";

const MyProduct = () => {
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    data: myProducts,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`http://localhost:8000/products/${user?.email}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <Spinner></Spinner>;

  const handleAdvertise = (p) => {
    fetch(`http://localhost:8000/products/${p._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`${p.name} advertise successfully!`);
          refetch();
        }
      });
  };

  const handleDelete = (p) => {
    const sure = window.confirm(`Do want to delete ${p.name}?`);
    if (sure) {
      fetch(`http://localhost:8000/products/${p._id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          toast.error(`${p.name} deleted successfully!`);
          refetch();
        });
    }
  };
  return (
    <div>
      <h1 className="text-xl my-5">My Product {myProducts?.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Satus</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myProducts?.map((mp) => (
              <tr key={mp._id}>
                <td>
                  <div className="mask w-12 h-12">
                    <img src={mp.image} alt="ProductImage" />
                  </div>
                </td>
                <td>{mp.name}</td>
                <td>{mp.resalePrice} BDT</td>
                <td>
                  <button className="btn btn-success btn-xs">Available</button>
                </td>
                <td>
                  {mp.isAdtertise ? (
                    <button>Advertised</button>
                  ) : (
                    <button
                      onClick={() => handleAdvertise(mp)}
                      className="btn btn-info btn-xs"
                    >
                      Advertise
                    </button>
                  )}

                  <button
                    onClick={() => handleDelete(mp)}
                    className="btn btn-error ml-5 btn-xs"
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

export default MyProduct;
