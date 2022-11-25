import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../components/Spinner";

const AllBuyers = () => {
  const {
    isLoading,
    error,
    data: allbuyers,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:8000/buyers").then((res) => res.json()),
  });

  if (isLoading) return <Spinner></Spinner>;

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <h1 className="text-xl my-5">All Buyers {allbuyers?.length}</h1>
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
            {allbuyers.map((au,i) => (
              <tr key={au._id}>
                <th>{i+1}</th>
                <td>{au.name}</td>
                <td>{au.email}</td>
                <td>{au.role}</td>
                <td>
                    <button className="btn btn-outline btn-error btn-xs">
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
