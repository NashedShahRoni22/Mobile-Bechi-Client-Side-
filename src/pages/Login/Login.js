import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SmallSpinner from "../../components/SmallSpinner";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";
import LoginBanner from "../../images/loginBanner.png";

const Login = () => {
  const { googleSignIn, loginUser, resetPassword, loader, setLoader } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [resetEmail, setResetEmail] = useState(null);
  //get token
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        setLoginUserEmail(user.email);
        toast.success("Login Successfull!");
      })
      .catch((e) => {
        toast.error(e.message);
        setLoader(false);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        // const user = res.user;
        // setLoginUserEmail(user.email);
        toast.success("Google Login Successfull!");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        toast.error(e.message);
        setLoader(false);
      });
  };

  const handelUserEmail = (e) => {
    const email = e.target.value;
    setResetEmail(email);
  };

  const handleForgetPassword = () => {
    if (!resetEmail) {
      toast.error("Please enter email address!");
      return;
    }
    resetPassword(resetEmail)
      .then(() => {
        toast.success("Check your inbox or spam box");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hidden md:block">
          <img src={LoginBanner} alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="my-5 text-center text-3xl">Sign in</h1>
          {/* login form start here */}
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                onBlur={handelUserEmail}
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
              <label className="label">
                <p
                  className="cursor-pointer hover:text-info"
                  onClick={handleForgetPassword}
                >
                  Forgot password?
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline btn-info">
                {loader ? <SmallSpinner></SmallSpinner> : "Sign in"}
              </button>
            </div>
            <div className="divider lg:divider-horizontal">OR</div>

            <div className="form-control mb-6">
              <button
                className="btn btn-outline btn-success"
                onClick={handleGoogleLogin}
              >
                Google Login
              </button>
            </div>
            <div>
              <p>
                New Here?{" "}
                <Link to="/register" className="text-info">
                  Please Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
