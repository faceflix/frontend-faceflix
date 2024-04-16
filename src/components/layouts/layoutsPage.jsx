import React from "react";
import { Link, Outlet } from "react-router-dom";
const LayoutsPage = () => {
  return (
    <>
      <div className="mb-10">
        <Outlet />
      </div>
      <Link
        to={"/post"}
        className="w-full flex justify-center items-center max-w-[530px] h-14 mx-auto fixed bottom-0 left-0 right-0 rounded-full bg-[var(--whiteBlue)] z-[99] "
      >
        <div className="inline-block py-1 px-3 border-2 border-[var(--lightBlue)] font-bold text-[var(--lightBlue)] rounded-xl">
          +
        </div>
      </Link>
    </>
  );
};

export default LayoutsPage;
