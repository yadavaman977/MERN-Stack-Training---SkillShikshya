import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import NotFoundpage from "./components/NotFoundPage";
import Product from "./components/Product";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "./Login";
import User from "./components/User";




export const Routes= createBrowserRouter([


    {
        path: "/",
        element: <ProtectedRoutes />,
        children: [
    {
         path: "/",
         element: <Layout />,
         children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/product",
                element: <Product />
            },
            {
                path: "/users",
                element: <User />
            }
           
         ]
    },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "*",
        element: <NotFoundpage />
    }
])