import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import HomePage from "../pages/home";
import ErrorPage from "../pages/error";
import RegisterPage from "../pages/register";
import EditProfile from "../pages/edit";
import LayoutsPage from "../components/layouts/layoutsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutsPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/edit",
        element: <EditProfile />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
