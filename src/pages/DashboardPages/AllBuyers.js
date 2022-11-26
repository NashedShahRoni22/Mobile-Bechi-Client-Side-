import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Spinner from "../../components/Spinner";

const AllBuyers = () => {
  const {
    isLoading,
    error,
    refetch,
    data: allBuyers,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:8000/buyers").then((res) => res.json()),
  });

  if (isLoading) return <Spinner></Spinner>;

  if (error) return "An error has occurred: " + error.message;

  const handleDelete =user=>{
    const agree = window.confirm(`Are you sure to delete ${user.name}`)
    if(agree){
      fetch(`http://localhost:8000/buyers/${user._id}`,{
        method:"DELETE"
      })
      .then(res => res.json())
      .then(data =>{
        if(data.deletedCount > 0){
          toast.error(`${user.name} deleted successfully!`)
          refetch();
        };
      })
    }
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
                    onClick={()=>handleDelete(ab)}
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
