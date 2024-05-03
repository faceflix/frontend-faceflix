import React, { useState } from "react";
import { Link } from "react-router-dom";
import BannerPhotoLayouts from "../components/layouts/bannerPhotoLayouts";
import useLogin from "../hooks/useLogin";

const PostPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const urlImage = ["image", "video", "blog"];
  const { data } = useLogin();
  return (
    <BannerPhotoLayouts data={data}>
      <main className="mt-32 px-7">
        <div className="w-full sm:max-w-[400px] sm:mx-auto bg-[var(--whiteBlue)] px-10 py-5 rounded-2xl">
          <p className="text-3xl font-bold mb-3">Select Post</p>
          <div className="flex flex-col gap-7  ">
            {urlImage.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`flex justify-center items-center w-full h-[136px] bg-white border-2  ${
                  activeIndex == i
                    ? "border-blue-500"
                    : "border-[var(--primary)]"
                }`}
              >
                <img
                  src={`iconToggle/${item}.png`}
                  className="h-full max-h-[94px]"
                  alt=""
                />
              </div>
            ))}

            <div className=" text-end">
              <Link
                to={
                  activeIndex == 0
                    ? "/post/image"
                    : activeIndex == 1
                    ? "/post/video"
                    : activeIndex == 2
                    ? "/post/blog"
                    : ""
                }
                className="px-3 text-white bg-blue-500"
              >
                NEXT
              </Link>
            </div>
          </div>
        </div>
      </main>
    </BannerPhotoLayouts>
  );
};

export default PostPage;
