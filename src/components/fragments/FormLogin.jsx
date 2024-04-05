import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Heading,
  FormControl,
  Stack,
  Input,
  Button,
  Text,
  Divider,
  AbsoluteCenter,
  Flex,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    const user = {
      email,
      password,
    };
    try {
      const res = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (data.errors) {
        throw data.errors;
      }

      setIsLogin(data);
      localStorage.setItem("token", data.data.token);
    } catch (error) {
      setError(error);
    } finally {
      email = "";
      password = "";
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setError("User Sudah Login");
    }
  }, []);
  return (
    <>
      <Box>
        <Center>
          {error ? (
            <Text fontSize={"13px"} color={"red.500"}>
              {error}
            </Text>
          ) : null}
        </Center>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormControl>
            <Stack spacing={3}>
              <Input
                rounded={10}
                bg={"#ffeed9"}
                name="email"
                value={email}
                placeholder="Masukkan email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                rounded={10}
                bg={"#ffeed9"}
                name="password"
                value={password}
                type="password"
                placeholder="Masukkan Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                bg={"#87c4ff"}
                _hover={{ background: "#39a6ffa9" }}
                w={"100%"}
              >
                Login
              </Button>
            </Stack>
          </FormControl>
        </Form>
      </Box>
    </>
  );
};

const Form = ({ children, action, method, onSubmit }) => {
  return (
    <form action={action} method={method} onSubmit={onSubmit}>
      <div> </div>

      {children}
    </form>
  );
};

export default FormLogin;
