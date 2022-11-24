import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="drawer drawer-mobile ">
      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content m-5">
        <label
          htmlFor="sidebar-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* Only Buyers */}
          <li>
            <Link>My Orders</Link>
          </li>
          {/* Only Sellers */}
          <li>
            <Link>Add A product</Link>
          </li>
          <li>
            <Link>My Products</Link>
          </li>
          <li>
            <Link>My Buyers</Link>
          </li>
          {/* Only Admin */}
          <li>
            <Link>All Sellers</Link>
          </li>
          <li>
            <Link>All Buyers</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
