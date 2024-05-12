import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Form from "./Form";

const FormLogin = () => {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLogin(true);

    const user = {
      email,
      password,
    };
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      console.log(data);
      if (data.errors) {
        throw data.errors;
      }

      localStorage.setItem("token", data.data.token);
      navigate("/");
    } catch (error) {
      setError(error);
    } finally {
      setEmail("");
      setPassword("");
      setIsLogin(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div>
      <div className="text-center">
        {error ? <p className="text-[13px] text-red-500">{error}</p> : null}
      </div>
      <Form
        isDisabled={isLogin}
        onClick={() => setError("")}
        onSubmit={(e) => handleSubmit(e)}
        className={"  flex flex-col gap-2"}
      >
        <input
          className="rounded-md bg-[#ffeed9] h-10 px-5"
          name="email"
          value={email}
          placeholder="Masukkan email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="rounded-md bg-[#ffeed9] h-10 px-5"
          name="password"
          value={password}
          type="password"
          placeholder="Masukkan Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form>
    </div>
  );
};

export default FormLogin;
