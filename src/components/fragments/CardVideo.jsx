import React, { useEffect, useState } from "react";

const CardVideo = ({ id }) => {
  const [videos, setVideos] = useState([]);

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
          `http://localhost:3000/api/users/${id}/video`,
          config
        );
        if (!res.ok) {
          throw new Error("Videos not found !!!");
        }
        const getVideos = await res.json();
        setVideos([{ id: 1, video: "video/mov_bbb.mp4" }]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, [id]);
  return (
    <section className="mt-5 w-full max-w-[444px] flex flex-col gap-2 mx-auto  ">
      {videos.length > 0
        ? videos.map((item) => (
            <video
              key={item.id}
              className="h-[129px] w-full object-cover rounded-2xl overflow-hidden cursor-pointer "
            >
              <source src={item.video} type="video/mp4" />
            </video>
          ))
        : null}
    </section>
  );
};

export default CardVideo;
