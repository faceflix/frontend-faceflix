import React, { useEffect } from "react";

const Modal = ({ onclose, image }) => {
  return (
    <div className="w-full fixed  inset-0 overflow-auto  ">
      <div
        onClick={onclose}
        className="bg-black bg-opacity-35 fixed inset-0 -z-10"
      ></div>
      <div className="bg-[var(--whiteBlue)] w-full max-w-[336px] my-10  pb-3  mx-auto overflow-hidden">
        <div className="w-full overflow-hidden relative">
          <img
            src={image?.image}
            className=" w-full scale-125 object-cover"
            alt=""
          />
          <button
            onClick={onclose}
            className="absolute right-5 top-3 text-lg text-white"
          >
            X
          </button>
        </div>
        <div className="mx-6 my-6 px-3 py-3 bg-white">
          <p className="font-light text-sm">
            {image?.createAt || `15-02-2024`}
          </p>
          <p className="text-xl font-semibold">{image?.title}</p>
          <p className="text-sm font-light">{image?.description}</p>
          <div className="flex justify-end">
            <button className=" bg-blue-500 text-white px-3">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
