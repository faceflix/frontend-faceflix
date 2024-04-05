import React from "react";
import AuthLayouts from "../components/layouts/authLayouts";
import FormLogin from "../components/fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayouts>
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
