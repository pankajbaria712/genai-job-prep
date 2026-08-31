import { createBrowserRouter } from "react-router";
import Login from "./Features/Authentication/pages/Login";
import Register from "./Features/Authentication/pages/Register";
import Protected from "./Features/Authentication/components/protected";
import Home from "./Features/interview/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Protected><Home/></Protected>,
  },
]);
