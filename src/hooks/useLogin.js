import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login"); 
    const fetchLogin = async () => {
      try {
        const config = {
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        };

        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/users/current`,
          config
        );
        const json = await res.json();
        if (json.errors) {
          throw json;
        }
        setData(json.data);
        console.log(json);
      } catch (err) {
        if (err.statusCode == 401) {
          localStorage.removeItem("token");
          navigate("/login");
          console.log(err);
        }
      }
    };
    fetchLogin();
  }, [navigate]);

  return {
    data,
  };
};

export default useLogin;
