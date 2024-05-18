import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Components/Pages/Root";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import SignUp from "../Components/Pages/SignUp";

export  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:([
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
      ])
    },
  ]);