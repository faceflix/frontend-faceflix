import { redirect } from "react-router-dom";
import React, { useState } from "react";

const useLogin = () => {
  const [isLogin, setIsLogin] = useState("");
  if (localStorage.getItem("token")) {
    setIsLogin(localStorage.getItem("token"));
  }

  redirect("/login");
  return {
    isLogin,
  };
};

export default useLogin;
