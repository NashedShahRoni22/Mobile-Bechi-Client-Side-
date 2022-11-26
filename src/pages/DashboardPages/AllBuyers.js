import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../components/Spinner";

const AllBuyers = () => {
  const {
    isLoading,
    error,
    data: allBuyers,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:8000/buyers").then((res) => res.json()),
  });

  if (isLoading) return <Spinner></Spinner>;

  if (error) return "An error has occurred: " + error.message;

  const handleDelete =id=>{
    console.log(id);
  }
  return (
    <div>
      <h1 className="text-xl my-5">All Buyers {allBuyers?.length}</h1>
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
            {allBuyers.map((ab,i) => (
              <tr key={ab._id}>
                <th>{i+1}</th>
                <td>{ab.name}</td>
                <td>{ab.email}</td>
                <td>{ab.role}</td>
                <td>
                    <button 
                    onClick={()=>handleDelete(ab._id)}
                    className="btn btn-outline btn-error btn-xs">
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

export default AllBuyers;
