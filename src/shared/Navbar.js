import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import logo from "../images/logo.png";
import { HiBars3CenterLeft } from "react-icons/hi2";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.error("Sign Out Successfull!");
      })
      .catch((e) => console.error(e));
  };
  return (
    <section className="py-3">
      <div className="flex items-center justify-between container mx-auto">
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} className="h-12 mr-4" alt="" />
            <p className="text-xl font-bold text-info">Mobile Bechi</p>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          {user?.photoURL && (
            <>
              <div>
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <div className="avatar online">
                <div className="w-12 rounded-full">
                  <img src={user.photoURL} alt="" />
                </div>
              </div>
            </>
          )}
          {user?.uid ? (
            <>
              <button
                onClick={handleLogOut}
                className="btn btn-outline btn-error rounded-full"
              >
                Logout
              </button>
              <div>
                <label
                  htmlFor="sidebar-drawer"
                  className="lg:hidden cursor-pointer btn btn-outline btn-info btn-circle"
                >
                  <HiBars3CenterLeft className="text-3xl"></HiBars3CenterLeft>
                </label>
              </div>
            </>
          ) : (
            <Link to="/login" className="btn btn-outline btn-info rounded-full">
              Login
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
