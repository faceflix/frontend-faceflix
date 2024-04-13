import React from "react";
import { Outlet } from "react-router-dom";
const LayoutsPage = () => {
  return (
    <>
      <button className="w-full max-w-[400px] h-14 mx-auto fixed bottom-0 left-0 right-0 rounded-full bg-[var(--whiteBlue)] z-[99]">
        <div className="inline-block py-1 px-3 border-2 border-[var(--lightBlue)] font-bold text-[var(--lightBlue)] rounded-xl">
          +
        </div>
      </button>
      <Outlet />
    </>
  );
};

export default LayoutsPage;
