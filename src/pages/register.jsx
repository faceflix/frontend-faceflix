import React from "react";
import AuthLayouts from "../components/layouts/authLayouts";
import FormRegister from "../components/fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayouts title="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
