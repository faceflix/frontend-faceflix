import NameAndTitle from "../fragments/NameAndTitle";
import Banner from "../fragments/Banner";
import useLogin from "../../hooks/useLogin";
import ProfileImage from "../fragments/ProfileImage";

const BannerPhotoLayouts = ({ children }) => {
  const { data } = useLogin();
  return (
    <div className="w-full min-h-screen max-w-[532px] mx-auto relative  ">
      <Banner src={data?.backgroundImage || "banner.png"} w={"w-full"} />
      <header className=" flex  gap-5 items-center absolute top-16  left-7">
        <ProfileImage src={data?.profileImage || "profileImage.jpg"} />
        <NameAndTitle
          name={data?.name || "Kirito asli Kediri"}
          title={data?.title || "Gamer | Web2 | Web3 | Hengker"}
        />
      </header>
      {children}
    </div>
  );
};

export default BannerPhotoLayouts;
