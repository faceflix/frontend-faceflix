import { useEffect, useState } from "react";
import { getUserCurrent } from "../services/userCurrent";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../components/fragments/Banner";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    getUserCurrent((res) => setData(res), localStorage.getItem("token"));
  }, [navigate]);
  console.log(data);
  return (
    <div className="w-full min-h-screen max-w-[500px] mx-auto relative  ">
      <button className="w-full max-w-[400px] h-14 mx-auto fixed bottom-0 left-0 right-0 rounded-full bg-[var(--whiteBlue)]">
        <div className="inline-block py-1 px-3 border-2 border-[var(--lightBlue)] font-bold text-[var(--lightBlue)] rounded-xl">
          +
        </div>
      </button>
      <Banner src={data?.backgroundImage || "banner.png"} w={"w-full"} />
      <div className=" flex  gap-5 items-end absolute top-16 left-5">
        <div className=" overflow-hidden rounded-full w-24 h-24 ">
          <img
            src={data?.profileImage || "profileImage.jpg"}
            className=" w-full h-full  object-cover object-center"
            alt=""
          />
        </div>
        <div>
          <p className="text-xl font-bold flex gap-1 items-center">
            {data?.name || "Kirito asli Kediri"}
            <Link to={"/edit"} className="text-xs text-blue-600 cursor-pointer">
              Edit
            </Link>
          </p>
          <p className="font-light ">
            {data?.title || "Gamer | Web2 | Web3 | Hengker"}
          </p>
        </div>
      </div>
      <div className="mt-20 px-8">
        <div className="w-full max-w-[350px] mx-auto py-1 px-3 flex justify-around bg-[var(--whiteBlue)]  rounded-2xl ">
          <AmountOfContent num={data?.countImage} title={"Image"} />
          <AmountOfContent num={data?.countVideo} title={"Video"} />
          <AmountOfContent num={data?.countBlog} title={"Blog"} />
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
