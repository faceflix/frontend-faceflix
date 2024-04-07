import { useEffect, useState } from "react";
import { getUserCurrent } from "../services/userCurrent";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // useEffect(() => {
  //   console.log(localStorage.getItem("token"));
  //   getUserCurrent((res) => console.log(res), localStorage.getItem("token"));
  // }, []);
  return (
    <div className="w-full  ">
      <div className="banner bg-blue-500 w-full h-24 overflow-hidden">
        <img
          src="banner.png"
          className="w-full object-cover  object-center"
        ></img>
      </div>
      <div className=" flex  gap-5 items-end absolute top-16 left-5">
        <div className=" overflow-hidden rounded-full w-24 h-24 ">
          <img
            src="iconFacebook.png"
            className=" w-full h-full  object-cover object-center"
            alt=""
          />
        </div>
        <div>
          <p className="text-xl font-bold">Nama Disini</p>
          <p className="font-light ">desc</p>
        </div>
      </div>
      <div className="mt-20 px-8">
        <div className="w-full max-w-[350px] mx-auto py-1 px-3 flex justify-around bg-[var(--whiteBlue)]  rounded-2xl ">
          <AmountOfContent num={205} title={"Image"} />
          <AmountOfContent num={205} title={"Video"} />
          <AmountOfContent num={205} title={"Blog"} />
        </div>
        <div className="bg-[var(--whiteBlue)] w-full max-w-[350px] mx-auto mt-3 py-3 px-4 line-clamp-4 text-sm text-justify overflow-hidden">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
            deleniti!
          </p>
        </div>
        <div className="bg-[var(--whiteBlue)] mt-5 mx-auto rounded-full flex w-full max-w-[300px]  overflow-hidden relative">
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
            i={0}
            activeIndex={activeIndex}
            onClick={() => setActiveIndex(0)}
            src="iconToggle/image.png"
          ></Button>
          <Button
            i={1}
            activeIndex={activeIndex}
            onClick={() => setActiveIndex(1)}
            src="iconToggle/video.png"
          />
          <Button
            i={2}
            activeIndex={activeIndex}
            onClick={() => setActiveIndex(2)}
            src="iconToggle/blog.png"
          />
        </div>
      </div>
    </div>
  );
};

function AmountOfContent({ num, title }) {
  return (
    <div className="text-center">
      <p className="font-bold">{num}</p>
      <p>{title}</p>
    </div>
  );
}

const Button = ({ activeIndex, i, onClick, src }) => {
  return (
    <button
      onClick={onClick}
      className={`  relative  py-3 px-9 transition-all`}
    >
      <img src={src} alt="" className=" z-[999]" />
    </button>
  );
};

export default HomePage;
