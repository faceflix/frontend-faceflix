import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserCurrent } from "../services/userCurrent";

const useLogin = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    getUserCurrent(
      (res) => setData(res),
      token,
      (err) => {
        if (err.response.status == 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      }
    );
  }, [navigate]);

  return {
    data,
  };
};

export default useLogin;
