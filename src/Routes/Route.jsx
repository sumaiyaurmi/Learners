import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Components/Pages/Root";
import Home from "../Components/Pages/Home";

export  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:([
        {
            path:'/',
            element:<Home></Home>
        }
      ])
    },
  ]);