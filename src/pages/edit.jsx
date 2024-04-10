import React, { useEffect, useState } from "react";
import Banner from "../components/fragments/Banner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const EditProfile = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [imageBackground, setImageBackground] = useState("");
  const [imagePhoto, setImagePhoto] = useState("");
  const handleChangePhoto = (e) => {
    const file = e.target.files[0];
    console.log(file);
    let reader = new FileReader();
    reader.onload = function (event) {
      setImageBackground(event.target.result);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const res = axios.patch("http://localhost:3000/api/users/current/profile");
  };

  const handleClick = () => {};
  return (
    <div className="w-full min-h-screen max-w-[500px] mx-auto relative mb-20  ">
      <button className="w-full max-w-[400px] h-14 mx-auto fixed bottom-0 left-0 right-0 rounded-full bg-[var(--whiteBlue)]">
        <div className="inline-block py-1 px-3 border-2 border-[var(--lightBlue)] font-bold text-[var(--lightBlue)] rounded-xl">
          +
        </div>
      </button>
      <Banner
        onClick={handleClick}
        bg="bg-gray-400"
        display="flex justify-center items-center"
        src={imageBackground || "icon/icon-image.png"}
        w={`${imageBackground ? "w-full" : "w-14 h-14 mx-auto"} `}
      >
        <input
          accept="image/*"
          onChange={(e) => handleChangePhoto(e)}
          className="absolute opacity-0 inset-0 w-full h-full"
          type="file"
        />
      </Banner>
      <div className=" flex  gap-5 items-end absolute top-16 left-5">
        <div className="  w-24 h-24  flex items-center justify-center bg-gray-400 border-2  border-[var(--primary)] overflow-hidden rounded-full relative ">
          <img
            src={imagePhoto || "icon/icon-image.png"}
            className=" object-cover object-center"
            alt=""
          />
          <input
            onChange={(e) => setImagePhoto(e.target.value)}
            className="absolute opacity-0 inset-0 w-full h-full"
            type="file"
            accept="image/*"
          />
        </div>
      </div>
      <div className="mt-20 px-7">
        <div className="w-full sm:max-w-[400px] sm:mx-auto bg-[var(--whiteBlue)] px-3 py-2">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Edit Profile</h1>
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
                name=""
                placeholder="Deskripsikan Kamu tulis Disini"
                className="px-3"
                id=""
                cols="35"
                rows="6"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Edit Account</h1>
              <Input name={"email"} type="email" placeholder="Email" />
              <div className="w-full bg-white h-10 flex relative">
                <Input
                  name={"password"}
                  type={isOpen ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-3"
                />
                <img
                  className="absolute right-3 top-2"
                  onClick={() => setIsOpen((x) => !x)}
                  src={`icon/eye-${isOpen ? "open" : "close"}.png`}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-3 flex gap-1">
              <button
                className="bg-gray-500 text-white text-xl px-3 h-8"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white text-xl px-3 h-8"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Input = ({ placeholder, type, name, className = "w-full px-3 py-2" }) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};
export default EditProfile;
