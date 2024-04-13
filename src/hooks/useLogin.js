import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const useLogin = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
    navigate("/login");
  }, [navigate]);

  return {
    token,
  };
};

export default useLogin;
