import React, { useEffect, useState } from "react";
import BannerPhotoLayouts from "../components/layouts/bannerPhotoLayouts";
import ButtonCancelAndSave from "../components/fragments/ButtonCancelAndSave";
import Input from "../components/Elements/Input";

import useLogin from "../hooks/useLogin";
import Editor from "../components/fragments/Editor";
import { useNavigate } from "react-router-dom";
const BlogPost = () => {
  const [error, setError] = useState("");
  const [isTest, setTest] = useState("");
  const [model, setModel] = useState("Example Set");
  const navigate = useNavigate();
  const { data } = useLogin();
  const handleModelChange = (event) => {
    setModel(event);
  };

  const handleSubmit = async (e) => {
    const title = e.target[0].value;
    const text = e.target[1].value;
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ title, text }),
    };

    try {
      const res = await fetch(
        `http://localhost:3000/api/users/${data?.id}/blog`,
        config
      );
      const postBlog = await res.json();
      if (postBlog.errors) {
        throw postBlog.errors;
      }
      if (postBlog.statusCode == 201) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  const handleImage = () => {};
  console.log(data?.id);
  return (
    <BannerPhotoLayouts>
      <div>
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
                  placeholder={"Berikan Judul"}
                  name={"title"}
                />
                <Input
                  type={"text"}
                  placeholder={"isi teks nya"}
                  name={"text"}
                />
                <div className="bg-white w-full max-w-[402px] h-[210px] p-2 cursor-pointer relative">
                  <input
                    type="file"
                    onChange={(e) => handleImage(e)}
                    name="image"
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className=" w-full h-full flex flex-col justify-center  items-center border border-dashed border-black ">
                    {isTest ? (
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
              <Editor handleModelChange={handleModelChange} model={model} />
              <div className="mt-4 flex justify-end gap-1">
                <ButtonCancelAndSave />
              </div>
            </div>
          </form>
        </main>
      </div>
    </BannerPhotoLayouts>
  );
};

export default BlogPost;
