import { useEffect, useState } from "react";
import { getUserCurrent } from "../services/userCurrent";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../components/fragments/Banner";
import ButtonNavigation from "../components/fragments/ButtonNavigation";
import useLogin from "../hooks/useLogin";
import { userImages } from "../services/userImage";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    getUserCurrent(
      (res) => setData(res),
      token,
      (err) => {
        if (err.response.status == 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
        console.log(err);
      }
    );
  }, [navigate]);
  useEffect(() => {
    const fetchImage = async () => {
      const config = {
        method: "get",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      try {
        const res = await fetch(
          `http://localhost:3000/api/users/${data?.id}/image`,
          config
        );
        if (!res.ok) {
          throw new Error("Images not found !!!");
        }
        const getImages = await res.json();
        setImage(userImages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImage();
  }, [data?.id]);
  return (
    <div className="w-full min-h-screen max-w-[500px] mx-auto relative  ">
      <Banner src={data?.backgroundImage || "banner.png"} w={"w-full"} />
      <header className=" flex  gap-5 items-end absolute top-16 left-5">
        <ProfileImage src={data?.profileImage || "profileImage.jpg"} />
        <NameAndTitle
          name={data?.name || "Kirito asli Kediri"}
          title={data?.title || "Gamer | Web2 | Web3 | Hengker"}
        />
      </header>
      <main className="mt-20 px-8">
        <section className="w-full max-w-[350px] mx-auto py-1 px-3 flex justify-around bg-[var(--whiteBlue)]  rounded-2xl ">
          <AmountOfContent num={data?.countImage} title={"Image"} />
          <AmountOfContent num={data?.countVideo} title={"Video"} />
          <AmountOfContent num={data?.countBlog} title={"Blog"} />
        </section>
        <section className="bg-[var(--whiteBlue)] w-full max-w-[350px] mx-auto mt-3 py-3 px-4 line-clamp-4 text-sm text-justify overflow-hidden">
          <p>
            {data?.description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."}
          </p>
        </section>
        <ButtonNavigation
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        {activeIndex == 0 ? (
          <section
            className={`mt-5 w-full max-w-[400px] mx-auto  ${
              image.length > 0 ? "gallery" : ""
            }  `}
          >
            {image.length > 0 ? (
              image.map((item) => (
                <div key={item?.id} className="mb-4">
                  <img
                    className="w-full max-w-[190px]"
                    src={item?.src}
                    alt={item?.src}
                  />
                </div>
              ))
            ) : (
              <p className="text-center text-xl font-bold text-red-500">
                Data not found
              </p>
            )}
          </section>
        ) : null}
        {activeIndex == 1 ? (
          <section className="mt-5 w-full max-w-[400px]  mx-auto">
            <p className="text-center text-xl font-bold text-red-500">
              Data not found
            </p>
          </section>
        ) : null}
      </main>
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

const ProfileImage = ({ src }) => {
  return (
    <div className=" overflow-hidden rounded-full w-24 h-24 ">
      <img
        src={src}
        className=" w-full h-full  object-cover object-center"
        alt={src}
      />
    </div>
  );
};

const NameAndTitle = ({ name, title }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <header>
      <p className="text-xl font-bold flex gap-1 items-center">
        {name}
        <Link
          to={"/edit"}
          className="text-xs text-blue-600 hover:text-blue-700 cursor-pointer"
        >
          Edit
        </Link>
        <button
          onClick={handleClick}
          className="inline-block text-xs text-blue-400 hover:text-red-500"
        >
          Sign Out
        </button>
      </p>
      <p className="font-light ">{title}</p>
    </header>
  );
};

export default HomePage;
