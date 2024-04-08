import React from "react";

const Banner = ({ bg, display, src, w, onClick, children }) => {
  return (
    <div className={`${bg} ${display} w-full h-[6.5rem] overflow-hidden`}>
      <img
        onClick={onClick}
        src={src}
        className={`${w} object-cover  object-center`}
      ></img>
      {children}
    </div>
  );
};

export default Banner;
