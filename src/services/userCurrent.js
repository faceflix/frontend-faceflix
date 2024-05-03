import axios from "axios";

export const getUserCurrent = async (callback, token, error) => {
  try {
    const config = {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/users/current`,
      config
    );
    callback(res.data.data);
  } catch (err) {
    error(err);
  }
};
