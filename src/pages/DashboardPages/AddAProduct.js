import React, { useContext } from "react";
import toast from "react-hot-toast";
import { BsInfoCircle } from "react-icons/bs";
import { AuthContext } from "../../context/AuthProvider";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const location = form.location.value;
    const resalePrice = form.resalePrice.value;
    const orginalPrice = form.orginalPrice.value;
    const yearsOfUse = form.yearsOfUse.value;
    const categorey = form.categorey.value;
    const categorey_id = form.categorey_id.value;
    const condition = form.condition.value;
    const mobileNumber = form.mobileNumber.value;
    const description = form.description.value;

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const product = {
          name,
          image: imageData.data.display_url,
          location,
          resalePrice,
          orginalPrice,
          yearsOfUse,
          categorey,
          categorey_id,
          condition,
          sellerName:user.displayName,
          sellerEmail:user.email,
          mobileNumber,
          description,
        };
        addProduct(product);
      })
      .catch((e) => console.log(e));

  };
  //save user to db
  const addProduct = (product) => {
    fetch("http://localhost:8000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
            toast.success("Product added successfully!")
        };
      });
  };
  return (
    <div>
      <h1 className="text-xl my-5">Add Product</h1>
      <form onSubmit={handleAddProduct}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* products information */}
          <div>
            <p className="mb-3">Product Name</p>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              className="input input-bordered input-info w-full"
              required
            />
          </div>
          <div>
            <p className="mb-3">Product Image</p>
            <input
              type="file"
              name="image"
              placeholder="Product Image"
              accept="image/*"
              required
            />
          </div>
          <div>
            <p className="mb-3">Product Location</p>
            <input
              type="text"
              name="location"
              placeholder="Product Location"
              className="input input-bordered input-info w-full"
              required
            />
          </div>
          <div>
            <p className="mb-3">Resale Price</p>
            <input
              type="number"
              name="resalePrice"
              placeholder="Resale Price"
              className="input input-bordered input-info w-full"
              required
            />
          </div>
          <div>
            <p className="mb-3">Orginal Price</p>
            <input
              type="number"
              name="orginalPrice"
              placeholder="Orginal Price"
              className="input input-bordered input-info w-full"
              required
            />
          </div>
          <div>
            <p className="mb-3">Month of use</p>
            <input
              type="number"
              name="yearsOfUse"
              placeholder="Year of Use"
              className="input input-bordered input-info w-full"
              required
            />
          </div>
          <div>
            <p className="mb-3">Select Categorey</p>
            <select
              className="select select-bordered border-info w-full"
              name="categorey"
            >
              <option>Feature</option>
              <option>Apple</option>
              <option>Android</option>
            </select>
          </div>
          {/* select categorey id  */}
          <div>
            <p className="mb-3">Select Categorey ID</p>
            <div className="flex items-center gap-4">
              <div
                className="tooltip"
                data-tip="Feature(1)-Apple(2)-Android(3)"
              >
                <BsInfoCircle className="text-3xl"></BsInfoCircle>
              </div>
              <div className="flex-1">
                <select
                  className="select select-bordered border-info w-full"
                  name="categorey_id"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-3">Select Condition</p>
            <select
              className="select select-bordered border-info w-full"
              name="condition"
            >
              <option>Excellent</option>
              <option>Fair</option>
              <option>Good</option>
            </select>
          </div>

          {/* seller information */}
          <div>
            <p className="mb-3">Seller Name</p>
            <input
              type="text"
              name="sellerName"
              defaultValue={user.displayName}
              disabled
              className="input input-bordered input-info w-full"
            />
          </div>
          <div>
            <p className="mb-3">Seller Email</p>
            <input
              type="email"
              name="sellerEmail"
              defaultValue={user.email}
              disabled
              className="input input-bordered input-info w-full"
            />
          </div>
          <div>
            <p className="mb-3">Seller Phone Number</p>
            <input
              type="number"
              name="mobileNumber"
              placeholder="Seller Phone Number"
              className="input input-bordered input-info w-full"
              required
            />
          </div>
          <div>
            <p className="mb-3">Description</p>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered input-info w-full"
              required
            />
          </div>
        </div>
        <input
          type="submit"
          value="Add Product"
          className="btn btn-outline btn-info mt-5"
        />
      </form>
    </div>
  );
};

export default AddAProduct;
