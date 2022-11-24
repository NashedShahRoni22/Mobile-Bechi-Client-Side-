import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/', 
                element: <Home></Home>
            },
            {
                path:'/products', 
                element: <Products></Products>
            },
            {
                path:'/login', 
                element: <Login></Login>
            },
            {
                path:'/register', 
                element: <Register></Register>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }
        ]
    }
])