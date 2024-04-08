import React from "react";
import Banner from "../components/fragments/Banner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const EditProfile = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = axios.patch("http://localhost:3000/api/users/current/profile");
  };
  const handleClick = () => {};
  return (
    <div className="w-full min-h-screen max-w-[500px] mx-auto relative  ">
      <button className="w-full max-w-[400px] h-14 mx-auto fixed bottom-0 left-0 right-0 rounded-full bg-[var(--whiteBlue)]">
        <div className="inline-block py-1 px-3 border-2 border-[var(--lightBlue)] font-bold text-[var(--lightBlue)] rounded-xl">
          +
        </div>
      </button>
      <Banner
        onClick={handleClick}
        bg="bg-gray-400"
        display="flex justify-center items-center"
        src={"icon/icon-image.png"}
        w={"w-14 h-14 mx-auto"}
      >
        <input
          className="absolute opacity-0 inset-0 w-full h-full"
          type="file"
        />
      </Banner>
      <div className=" flex  gap-5 items-end absolute top-16 left-5">
        <div className="  w-24 h-24  flex items-center justify-center bg-gray-400 border-2  border-[var(--primary)] overflow-hidden rounded-full relative ">
          <img
            src={"icon/icon-image.png"}
            className=" object-cover object-center"
            alt=""
          />
          <input
            className="absolute opacity-0 inset-0 w-full h-full"
            type="file"
          />
        </div>
      </div>
      <div className="w-full max-w-[400px] mx-auto bg-[var(--whiteBlue)]  mt-20">
        <form onSubmit={(e) => handleSubmit(e)} action="">
          <h1 className="text-2xl font-bold">Edit Profile</h1>
          <input type="text" placeholder="Nama kamu disini" />
          <input type="text" placeholder="title kamu disini" />
          <input type="text" placeholder="Deskripsi" />
          <h1 className="text-2xl font-bold">Edit Account</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Email" />
          <button onClick={() => navigate("/")}>Cancel</button>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
