import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import HomePage from "../pages/home";
import ErrorPage from "../pages/error";
import RegisterPage from "../pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
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
