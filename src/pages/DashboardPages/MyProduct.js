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
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`http://localhost:8000/products/${user?.email}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <Spinner></Spinner>;

  const handleAdvertise =(p)=>{
    fetch('http://localhost:8000/advertise',{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(p),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
            toast.success("Product advertise successfully!")
        };
      });
  }
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
            {myProducts?.map((mp) => 
              <tr>
                <td>
                  <div className="mask w-12 h-12">
                    <img
                      src={mp.image}
                      alt="ProductImage"
                    />
                  </div>
                </td>
                <td>{mp.name}</td>
                <td>{mp.resalePrice} BDT</td>
                <td>
                  <button className="btn btn-success btn-xs">Available</button>
                </td>
                <td>
                  <button onClick={()=>handleAdvertise(mp)} className="btn btn-info btn-xs">Advertise</button>
                  <button className="btn btn-error ml-5 btn-xs">Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
