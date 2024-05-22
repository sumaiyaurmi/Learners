import { createBrowserRouter } from "react-router-dom";
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
import PendingAssignment from "../Components/Pages/PendingAssignment";
import Error from "../Components/Pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
      },
      {
        path: "/assignments-update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-two-ochre.vercel.app/assignments/${params.id}`
          ),
      },
      {
        path: "/assignments/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-two-ochre.vercel.app/assignments/${params.id}`
          ),
      },

      {
        path: "/create-assignment",
        element: (
          <PrivateRoute>
            <CreatAssignment></CreatAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/submission-form/:id",
        element: <SubmissionForm></SubmissionForm>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-two-ochre.vercel.app/assignments/${params.id}`
          ),
      },
      {
        path: "/my-assignment",
        element: (
          <PrivateRoute>
            <MyAssignments></MyAssignments>
          </PrivateRoute>
        ),
      },
      {
        path: "/pending-assignment",
        element: (
          <PrivateRoute>
            <PendingAssignment></PendingAssignment>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
