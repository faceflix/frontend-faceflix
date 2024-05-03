import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
const useHandleVideo = () => {
  const [tempImage, setTempImage] = useState("");
  const [error, setError] = useState("");
  const { data } = useLogin();
  const navigate = useNavigate();
  const handleImage = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
      setTempImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const title = e.target[1].value;
    const description = e.target[2].value;
    console.log(e.target);
    const form = new FormData();
    form.append("name", name);
    form.append("title", title);
    form.append("description", description);
    form.append("video", e.target[3].files[0]);
    // console.log(form.getAll("name"));
    // console.log(form.getAll("title"));
    // console.log(form.getAll("description"));
    // console.log(form.getAll("video"));
    const config = {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: form,
    };
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/users/${data?.id}/video`,
        config
      );
      const fetchData = await res.json();
      if (fetchData.errors) {
        throw fetchData.errors;
      }
      console.log(fetchData);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  return {
    tempImage,
    error,
    handleImage,
    handleSubmit,
    isLogin: data,
  };
};

export default useHandleVideo;
