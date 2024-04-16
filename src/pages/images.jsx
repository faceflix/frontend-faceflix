import React, { useState } from "react";
import BannerPhotoLayouts from "../components/layouts/bannerPhotoLayouts";
import Input from "../components/Elements/Input";
import ButtonCancelAndSave from "../components/fragments/ButtonCancelAndSave";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const ImagePost = () => {
  const [tempImage, setTempImage] = useState("");
  const [error, setError] = useState("");
  const { data } = useLogin();
  const navigate = useNavigate();
  const handleImage = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
      setTempImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const title = e.target[1].value;
    const description = e.target[2].value;
    console.log(e.target);
    const form = new FormData();
    form.append("name", name);
    form.append("title", title);
    form.append("description", description);
    form.append("image", e.target[3].files[0]);

    console.log(form.getAll("name"));
    console.log(form.getAll("title"));
    console.log(form.getAll("description"));
    console.log(form.getAll("image"));
    const config = {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: form,
    };
    try {
      const res = await fetch(
        `http://localhost:3000/api/users/${data?.id}/image`,
        config
      );
      const fetchData = await res.json();
      if (fetchData.errors) {
        throw fetchData.errors;
      }
      console.log(fetchData);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  return (
    <BannerPhotoLayouts>
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
                  accept="image/*"
                  type="file"
                  onChange={(e) => handleImage(e)}
                  name="image"
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <div className=" w-full h-full flex flex-col justify-center  items-center border border-dashed border-black ">
                  {tempImage ? (
                    <div className="w-full overflow-hidden">
                      <img src={tempImage} className="w-full" alt="" />
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
              <ButtonCancelAndSave />
            </div>
          </div>
        </form>
      </main>
    </BannerPhotoLayouts>
  );
};

export default ImagePost;
