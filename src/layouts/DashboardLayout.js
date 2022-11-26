import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../shared/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <section>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile ">
        <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content m-5">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* Only Buyers */}
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            {/* Only Sellers */}
            <li>
              <Link>Add A product</Link>
            </li>
            <li>
              <Link>My Products</Link>
            </li>
            {/* Only Admin */}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/all-sellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-buyers">All Buyers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
