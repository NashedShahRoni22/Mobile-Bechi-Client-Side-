import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home"
import Products from "../pages/Products/Products";

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
        ]
    }
])