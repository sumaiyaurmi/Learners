import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Components/Pages/Root";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import SignUp from "../Components/Pages/SignUp";
import Assignments from "../Components/Pages/Assignments";
import CreatAssignment from "../Components/Pages/CreatAssignment";
import PrivateRoute from "../Provider/PrivateRoute/PrivateRoute";
import Update from "../Components/Pages/Update";
import ViewDetails from "../Components/Pages/ViewDetails";
import SubmissionForm from "../Components/Pages/SubmissionForm";
import MyAssignments from "../Components/Pages/MyAssignments";

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
            path:'/assignments',
            element:<Assignments></Assignments>
        },
        {
            path:'/assignments-update/:id',
            element:<Update></Update>,
            loader:({params})=> fetch(`http://localhost:5000/assignments/${params.id}`)
        },
        {
            path:'/assignments/:id',
            element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:5000/assignments/${params.id}`)
        },
        
        {
            path:'/create-assignment',
            element:<PrivateRoute><CreatAssignment></CreatAssignment></PrivateRoute>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
          path:'/submission-form/:id',
          element:<SubmissionForm></SubmissionForm>,
          loader:({params})=> fetch(`http://localhost:5000/assignments/${params.id}`)

      },
      {
        path:'/my-assignment',
        element:<MyAssignments></MyAssignments>
    },
      ])
    },
  ]);