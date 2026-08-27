import { createBrowserRouter } from "react-router";
import Login from "./Features/Authentication/pages/Login";
import Register from "./Features/Authentication/pages/Register";
import Protected from "./Features/Authentication/components/protected";

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
    element: <Protected>HOME PAGE</Protected>,
  },
]);
