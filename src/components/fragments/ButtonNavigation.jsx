import React, { useState } from "react";

const ButtonNavigation = ({ activeIndex, setActiveIndex }) => {
  return (
    <div className="bg-[var(--whiteBlue)] mt-5 mx-auto rounded-full flex w-full max-w-[286px]  overflow-hidden relative">
      <div
        className={`${
          activeIndex == 0
            ? `translate-x-0`
            : activeIndex == 1
            ? `translate-x-[6.2rem]`
            : activeIndex == 2
            ? "translate-x-[12.6rem]"
            : ""
        }
            after:bg-white after:border-2 after:border-[var(--primary)] after:w-24 after:h-full  after:absolute  
            after:inset-0 after:rounded-full  transition-all z-0
         `}
      ></div>
      <Button
        onClick={() => setActiveIndex(0)}
        src="iconToggle/image.png"
      ></Button>
      <Button
        i={1}
        onClick={() => setActiveIndex(1)}
        src="iconToggle/video.png"
      />
      <Button onClick={() => setActiveIndex(2)} src="iconToggle/blog.png" />
    </div>
  );
};

const Button = ({ onClick, src }) => {
  return (
    <button
      onClick={onClick}
      className={`  relative  py-3 px-9 transition-all`}
    >
      <img src={src} alt="" className=" z-[999]" />
    </button>
  );
};

export default ButtonNavigation;
