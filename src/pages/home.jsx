import { useEffect, useState } from "react";
import { getUserCurrent } from "../services/userCurrent";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../components/fragments/Banner";
import ButtonNavigation from "../components/fragments/ButtonNavigation";
import useLogin from "../hooks/useLogin";
import CardImage from "../components/fragments/CardImage";
import CardVideo from "../components/fragments/CardVideo";
import CardBlog from "../components/fragments/CardBlog";
import Modal from "../components/fragments/Modal";
import NameAndTitle from "../components/fragments/NameAndTitle";
import ProfileImage from "../components/fragments/ProfileImage";
import BannerPhotoLayouts from "../components/layouts/bannerPhotoLayouts";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const { data } = useLogin();
  const handleClick = (userId, idImage) => {
    console.log(`
    user id : ${userId}
    image id : ${idImage}
    `);
  };

  return (
    <>
      <BannerPhotoLayouts>
        <main className="mt-32 px-8">
          <section className="w-full max-w-[444px] mx-auto py-1 px-3 flex justify-around bg-[var(--whiteBlue)]  rounded-2xl ">
            <AmountOfContent num={data?.countImage} title={"Image"} />
            <AmountOfContent num={data?.countVideo} title={"Video"} />
            <AmountOfContent num={data?.countBlog} title={"Blog"} />
          </section>
          <section className="bg-[var(--whiteBlue)] w-full max-w-[444px] mx-auto mt-3 py-3 px-4 line-clamp-4 text-sm text-justify overflow-hidden rounded-xl">
            <p className="text-lg">
              {data?.description ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."}
            </p>
          </section>
          <ButtonNavigation
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          {activeIndex == 0 ? <CardImage id={data?.id} /> : null}
          {activeIndex == 1 ? <CardVideo id={data?.id} /> : null}
          {activeIndex == 2 ? <CardBlog id={data?.id} /> : null}
        </main>
      </BannerPhotoLayouts>
    </>
  );
};

function AmountOfContent({ num, title }) {
  return (
    <div className="text-center text-xl">
      <p className="font-bold">{num}</p>
      <p>{title}</p>
    </div>
  );
}

export default HomePage;
