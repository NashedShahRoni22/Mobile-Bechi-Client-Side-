import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <section className="py-3">
      <div className="flex items-center justify-between container mx-auto">
        <Link to='/'>
          <div className="flex items-center">
            <img src={logo} className="h-12 mr-4" alt="" />
            <p className="text-xl font-bold text-info">Mobile Bechi</p>
          </div>
        </Link>
        <div>
          <Link className="btn btn-outline btn-info rounded-full">Login</Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
