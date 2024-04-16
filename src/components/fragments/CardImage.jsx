import React, { useEffect, useState } from "react";
import { userImages } from "../../services/userImage";
import Modal from "./Modal";

const CardImage = ({ id }) => {
  const [image, setImage] = useState([]);
  const [imagebyId, setImagebyId] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (imageId) => {
    setIsOpen((isOpen) => !isOpen);
    const fetchImage = async () => {
      const config = {
        method: "get",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      try {
        const res = await fetch(
          `http://localhost:3000/api/users/${id}/image/${imageId}`,
          config
        );
        if (!res.ok) {
          throw new Error("Images not found !!!");
        }
        const getImages = await res.json();
        setImagebyId(getImages?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImage();
  };

  useEffect(() => {
    const fetchImage = async () => {
      const config = {
        method: "get",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      try {
        const res = await fetch(
          `http://localhost:3000/api/users/${id}/image`,
          config
        );
        if (!res.ok) {
          throw new Error("Images not found !!!");
        }
        const getImages = await res.json();
        console.log(getImages);
        setImage(getImages.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImage();
  }, [id]);
  return (
    <>
      <section
        className={`mt-5 w-full max-w-[444px]  mx-auto  ${
          image.length > 0 ? "gallery" : ""
        }  `}
      >
        {image.length > 0 ? (
          image.map((item) => (
            <div key={item?.id} className="mb-4">
              <img
                onClick={(e) => handleClick(item?.id)}
                className="w-full cursor-pointer"
                src={item?.image}
                alt={item?.title}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-xl font-bold text-red-500">
            Data not found
          </p>
        )}
      </section>
      {isOpen && <Modal image={imagebyId} onclose={() => setIsOpen(false)} />}
    </>
  );
};

export default CardImage;
