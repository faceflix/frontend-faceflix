import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useLogin from "../hooks/useLogin";
const useHandleBlog = () => {
  const [error, setError] = useState("");
  const [isTest, setTest] = useState("");
  const navigate = useNavigate();
  const { data } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const text = e.target[1].value;
    try {
      const config = {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ title, text }),
      };
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/users/${data?.id}/blog`,
        config
      );
      const postBlog = await res.json();
      if (postBlog.errors) {
        throw postBlog.errors;
      }
      if (postBlog.statusCode == 201) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  return {
    isLogin: data,
    error,
    handleSubmit,
    isTest,
    setTest,
  };
};

export default useHandleBlog;
