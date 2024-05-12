import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const CardVideo = ({ id }) => {
  const [videos, setVideos] = useState([]);
  const [videoById, setVideoById] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (videoId) => {
    setIsOpen((isOpen) => !isOpen);
    const fetchData = async () => {
      const config = {
        method: "get",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/users/${id}/video/${videoId}`,
          config
        );
        const getVideo = await res.json();
        setVideoById(getVideo?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };
  useEffect(() => {
    const fetchVideos = async () => {
      const config = {
        method: "get",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/users/${id}/video`,
          config
        );
        if (!res.ok) {
          throw new Error("Videos not found !!!");
        }
        const getVideos = await res.json();
        setVideos(getVideos.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, [id]);
  return (
    <>
      <section className="mt-5 w-full max-w-[444px] flex flex-col gap-2 mx-auto  ">
        {videos.length > 0 ? (
          videos.map((item) => {
            return (
              <video
                onClick={() => handleClick(item?.id)}
                key={item?.id}
                src={item?.video}
                className="h-[129px] w-full object-cover rounded-2xl overflow-hidden cursor-pointer "
              >
                <source src={item.video} type="video/mp4,mkv" />
              </video>
            );
          })
        ) : (
          <p className="text-red-500 text-center text-xl font-bold">
            Video not found
          </p>
        )}
      </section>
      {isOpen && <Modal data={videoById} onclose={() => setIsOpen(false)} />}
    </>
  );
};

export default CardVideo;
