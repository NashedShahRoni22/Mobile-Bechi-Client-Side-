import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";

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
            },
        ]
    }
])