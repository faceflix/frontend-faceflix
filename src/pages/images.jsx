import BannerPhotoLayouts from "../components/layouts/bannerPhotoLayouts";
import Input from "../components/Elements/Input";
import ButtonCancelAndSave from "../components/fragments/ButtonCancelAndSave";
import useHandleImage from "../hooks/useHandleImage";

const ImagePost = () => {
  const { tempImage, handleImage, handleSubmit, error, isLogin } =
    useHandleImage();
  return (
    <BannerPhotoLayouts data={isLogin}>
      <main className="mt-32 px-8">
        <div className="w-full sm:max-w-[444px] sm:mx-auto bg-[var(--whiteBlue)] px-10 py-5 rounded-2xl">
          <p className="text-2xl font-bold mb-3">Upload Your Post</p>
          <p className="text-center text-red-500">{error ? error : ""}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-full sm:max-w-[444px] sm:mx-auto bg-[var(--whiteBlue)] px-8 py-3">
            <div className="flex flex-col gap-2">
              <Input
                type={"text"}
                placeholder={"Nama Kamu disini"}
                name={"name"}
              />
              <Input
                type={"text"}
                placeholder={"Title Kamu Disini"}
                name={"title"}
              />
              <textarea
                name="description"
                placeholder="Deskripsikan Kamu tulis Disini"
                className="px-3"
                id=""
                cols="35"
                rows="6"
              ></textarea>
              <div className="bg-white w-full max-w-[402px] h-[210px] p-2 cursor-pointer relative">
                <input
                  type="file"
                  onChange={(e) => handleImage(e)}
                  name="image"
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <div className=" w-full h-full flex flex-col justify-center  items-center border border-dashed border-black ">
                  {tempImage ? (
                    <div className="w-full text-center">
                      File Has been Uploaded
                    </div>
                  ) : (
                    <>
                      <img
                        src="/icon/icon-image.png"
                        className="w-[50px] h-[50px]"
                        alt=""
                      />
                      <div className="text-center">
                        <p>Upload Your Image</p>
                        <p>support JPG/PNG for Image</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-1">
              <ButtonCancelAndSave isDisable={!tempImage} />
            </div>
          </div>
        </form>
      </main>
    </BannerPhotoLayouts>
  );
};

export default ImagePost;
