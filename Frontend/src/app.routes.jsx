import { createBrowserRouter } from "react-router";
import Login from "./Features/Authentication/pages/Login";
import Register from "./Features/Authentication/pages/Register";
import Protected from "./Features/Authentication/components/protected";
import Homepage from "./Homepage/home";
import InterviewForm from "./Features/interview/pages/Home.container";
import Features from "./FeaturePage/Features";
import About from "./aboutPage/About";
import NotFoundPage from "./Features/404Page/NotFoundPage";
import InterviewReportPage from "./Features/Report/page/InterviewReportPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/interview",
    element: <Protected><InterviewForm /></Protected>,
  },
  {
    path: "/report",
    element: <Protected><InterviewReportPage /></Protected>,
  },
  {
    path: "/interview/report",
    element: <Protected><InterviewReportPage /></Protected>,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
