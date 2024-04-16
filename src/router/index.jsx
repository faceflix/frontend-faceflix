import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import HomePage from "../pages/home";
import ErrorPage from "../pages/error";
import RegisterPage from "../pages/register";
import EditProfile from "../pages/edit";
import LayoutsPage from "../components/layouts/layoutsPage";
import PostPage from "../pages/post";
import ImagePost from "../pages/images";
import VideoPost from "../pages/video";
import BlogPost from "../pages/blog";

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
  {
    path: "/post",
    element: <PostPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/post/image",
    element: <ImagePost />,
  },
  {
    path: "/post/video",
    element: <VideoPost />,
  },
  {
    path: "/post/blog",
    element: <BlogPost />,
  },
]);

export default router;
