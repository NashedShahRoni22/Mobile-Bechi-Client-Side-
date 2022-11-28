import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import Blog from "../pages/Blog/Blog";
import AddAProduct from "../pages/DashboardPages/AddAProduct";
import AllBuyers from "../pages/DashboardPages/AllBuyers";
import AllSellers from "../pages/DashboardPages/AllSellers";
import MyOrders from "../pages/DashboardPages/MyOrders";
import MyProduct from "../pages/DashboardPages/MyProduct";
import Payments from "../pages/DashboardPages/Payments";
import ReportedItem from "../pages/DashboardPages/ReportedItem";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";
import NotFound from "../shared/NotFound";
import AdminRoutes from "./AdminRoutes";
import PrivateRoute from "./PrivateRoute";
import SellerRoutes from "./SellerRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categorey/:id",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-xi-fawn.vercel.app/categorey/${params.id}`),
          
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/all-buyers",
        element: (
          <AdminRoutes>
            <AllBuyers></AllBuyers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/all-sellers",
        element: (
          <AdminRoutes>
            <AllSellers></AllSellers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/reported-item",
        element: (
          <AdminRoutes>
            <ReportedItem></ReportedItem>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerRoutes>
            <AddAProduct></AddAProduct>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/my-product",
        element: (
          <SellerRoutes>
            <MyProduct></MyProduct>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payments></Payments>,
        loader: ({ params }) =>
          fetch(`https://server-xi-fawn.vercel.app/bookings/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
