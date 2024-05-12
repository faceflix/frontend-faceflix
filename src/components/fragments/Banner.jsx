import React from "react";

const Banner = ({ bg, display, src, w, onClick, children }) => {
  return (
    <div
      className={`${bg} ${display} w-full h-[6.5rem] overflow-hidden relative`}
    >
      <img
        onClick={onClick}
        src={src}
        className={`${w} object-cover  object-center h-full`}
      ></img>
      {children}
    </div>
  );
};

export default Banner;
