const ProfileImage = ({ src }) => {
  return (
    <div className=" overflow-hidden rounded-full w-[139px] h-[139px] ">
      <img
        src={src}
        className=" w-full h-full  object-cover object-center"
        alt={src}
      />
    </div>
  );
};
export default ProfileImage;
