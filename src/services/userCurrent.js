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
      "http://localhost:3000/api/users/current",
      config
    );
    callback(res.data.data);
  } catch (err) {
    error(err);
  }
};
