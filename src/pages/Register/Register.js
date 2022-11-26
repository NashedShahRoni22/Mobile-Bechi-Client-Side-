import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SmallSpinner from "../../components/SmallSpinner";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";
import LoginBanner from "../../images/loginBanner.png";

const Register = () => {
  const { createUser, googleSignIn, userProfileUpdate, loader, setLoader } =
    useContext(AuthContext);
  //navigate user
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //get token
  const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail);

  if(token){ 
    navigate("/login");
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        createUser(email, password)
          .then((res) => {
            toast.success("Registration Successfull!");

            const userProfile = {
              displayName: name,
              photoURL: imageData.data.display_url,
            };

            userProfileUpdate(userProfile)
              .then(() => {
                console.log("Profile Updated");
                saveUser(name, email, role);
              })
              .catch((e) => {
                console.error(e);
              });
          })
          .catch((e) => {
            toast.error(e.message);
            setLoader(false);
          });
      })
      .catch((e) => console.log(e));
  };

  //save user to db
  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success("Google Registration Successfull!");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.error(e.message);
      });
  };
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hidden md:block">
          <img src={LoginBanner} alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="my-5 text-center text-3xl">Sign up</h1>
          {/* register form start here */}
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input type="file" name="image" accept="image/*" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Role</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                name="role"
              >
                <option>Buyer</option>
                <option>Seller</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline btn-info" type="">
                {loader ? <SmallSpinner></SmallSpinner> : "Sign up"}
              </button>
            </div>
            <div className="divider lg:divider-horizontal">OR</div>

            <div className="form-control mb-6">
              <button
                className="btn btn-outline btn-success"
                onClick={handleGoogleLogin}
              >
                Google Register
              </button>
            </div>
            <div>
              <p>
                Already Registered ?{" "}
                <Link to="/login" className="text-info">
                  Please Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
