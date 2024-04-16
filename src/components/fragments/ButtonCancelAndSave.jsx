import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonCancelAndSave = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="button"
        className="bg-gray-500 text-white text-xl px-3 h-8"
        onClick={() => navigate("/")}
      >
        Cancel
      </button>
      <button className="bg-blue-500 text-white text-xl px-3 h-8" type="submit">
        Save
      </button>
    </>
  );
};

export default ButtonCancelAndSave;
