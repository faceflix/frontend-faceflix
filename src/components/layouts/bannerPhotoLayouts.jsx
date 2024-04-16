import NameAndTitle from "../fragments/NameAndTitle";
import Banner from "../fragments/Banner";
import useLogin from "../../hooks/useLogin";
import ProfileImage from "../fragments/ProfileImage";

const BannerPhotoLayouts = ({ children }) => {
  const { data } = useLogin();
  return (
    <div className="w-full min-h-screen max-w-[532px] mx-auto relative  ">
      <Banner
        src={data?.backgroundImage || "icon/banner_default.png"}
        w={"w-full scale-125"}
      />
      <header className=" flex  gap-5 items-center absolute top-16  left-7">
        <ProfileImage src={data?.profileImage || "blog/blog1/png"} />
        <NameAndTitle
          name={data?.name || data?.email}
          title={data?.title || "Your Title in here"}
        />
      </header>
      {children}
    </div>
  );
};

export default BannerPhotoLayouts;
