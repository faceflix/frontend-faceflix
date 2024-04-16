import React, { useEffect, useState } from "react";
import { userBlogs } from "../../services/userBlog";

const CardBlog = ({ id }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlog = async () => {
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
          throw new Error("Blogs not found !!!");
        }
        const getBlogs = await res.json();
        setBlogs(userBlogs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, [id]);
  return (
    <section
      className={`mt-5 w-full max-w-[444px] mx-auto  grid grid-cols-2 gap-x-1    `}
    >
      {blogs.length > 0 ? (
        blogs.map((item) => (
          <div key={item?.id} className="mb-4">
            <img
              className="w-full  max-w-[216px] h-full "
              src={item?.src}
              alt={item?.src}
            />
          </div>
        ))
      ) : (
        <p className="text-center text-xl font-bold text-red-500">
          Data not found
        </p>
      )}
    </section>
  );
};

export default CardBlog;
