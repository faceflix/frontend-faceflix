import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "./pages/login";
import router from "./router/";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  );
}

export default App;
