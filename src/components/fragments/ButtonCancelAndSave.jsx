import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonCancelAndSave = ({ isDisable, isLoading }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="button"
        className="bg-gray-500 hover:bg-gray-600 text-white text-xl px-3 h-8"
        onClick={() => navigate("/")}
      >
        Cancel
      </button>
      <button
        disabled={isDisable}
        className={`bg-blue-500  ${
          isDisable ? "bg-blue-800" : "bg-blue-500 hover:bg-blue-700"
        }  text-white text-xl px-3 h-8`}
        type="submit"
      >
        Save
      </button>
    </>
  );
};

export default ButtonCancelAndSave;
