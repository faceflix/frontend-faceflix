import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const useHandleEdit = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { data } = useLogin();
  const navigate = useNavigate();
  const handleBackground = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
      setBackgroundImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };
  const handlePhoto = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
      setProfileImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target[2].value;
    const title = e.target[3].value;
    const description = e.target[4].value;
    const email = e.target[5].value;
    const password = e.target[6].value;
    console.log(typeof password);
    const form = new FormData();
    form.append("name", name);
    form.append("title", title);
    form.append("description", description);
    form.append("email", email);
    form.append("password", password.toString());
    form.append("backgroundImage", e.target[0].files[0]);
    form.append("profileImage", e.target[1].files[0]);

    const config = {
      method: "PATCH",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: form,
    };
    console.log(form);

    try {
      if (email && !password) {
        setError("Password kosong");
      } else if (email === data?.email && password === data?.password) {
        setError("Password mirip dengan yang sebelumnya, coba yang lain");
      } else {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/users/current/profile`,
          config
        );
        const updateProfile = await res.json();
        if (updateProfile.errors) {
          throw updateProfile.errors;
        }
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setName(data?.name || "");
    setTitle(data?.title || "");
    setDesc(data?.description || "");
  }, [data?.name, data?.title, data?.description]);
  return {
    name,
    setName,
    title,
    setTitle,
    desc,
    setDesc,
    error,
    setError,
    isOpen,
    setIsOpen,
    profileImage,
    setProfileImage,
    backgroundImage,
    setBackgroundImage,
    handleBackground,
    handlePhoto,
    handleSubmit,
    isLoading,
  };
};

export default useHandleEdit;
