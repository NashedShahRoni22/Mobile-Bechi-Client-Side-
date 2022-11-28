import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import logo from "../images/logo.png";

import { GoSignIn , GoSignOut, GoThreeBars } from "react-icons/go";

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
          <Link to='/blog'>Blog</Link>
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
              >
                <GoSignOut className="text-2xl text-error"></GoSignOut>
              </button>
              <div>
                <label
                  htmlFor="sidebar-drawer"
                  className="lg:hidden cursor-pointer"
                >
                  <GoThreeBars className="text-3xl text-info"></GoThreeBars>
                </label>
              </div>
            </>
          ) : (
            <Link to="/login">
              <GoSignIn className="text-2xl text-success"></GoSignIn>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
