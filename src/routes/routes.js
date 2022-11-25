import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import MyOrders from "../pages/DashboardPages/MyOrders";
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
                path:'/categorey/:id', 
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:8000/categorey/${params.id}`)
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
                element:<MyOrders></MyOrders>
            }
        ]
    }
])