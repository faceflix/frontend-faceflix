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
    element: <LayoutsPage key="layouts" />,
    errorElement: <ErrorPage key="error" />,
    children: [
      {
        path: "/",
        element: <HomePage key="home" />,
      },
      {
        path: "/edit",
        element: <EditProfile key="edit" />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage key="login" />,
  },
  {
    path: "/register",
    element: <RegisterPage key="register" />,
  },
  {
    path: "/post",
    element: <PostPage key="post" />,
  },
  {
    path: "/post/image",
    element: <ImagePost key="image" />,
  },
  {
    path: "/post/video",
    element: <VideoPost key="video" />,
  },
  {
    path: "/post/blog",
    element: <BlogPost key="blog" />,
  },
]);

export default router;
