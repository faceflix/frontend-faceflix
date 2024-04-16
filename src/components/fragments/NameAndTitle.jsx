import { Link, useNavigate } from "react-router-dom";

const NameAndTitle = ({ name, title }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <header>
      <p className="text-xl font-bold flex gap-1 items-center pt-3">
        {name}
        <Link
          to={"/edit"}
          className="text-xs text-blue-600 hover:text-blue-700 cursor-pointer"
        >
          Edit
        </Link>
        <button
          onClick={handleClick}
          className="inline-block text-xs text-blue-400 hover:text-red-500"
        >
          Sign Out
        </button>
      </p>
      <p className="font-light ">{title}</p>
    </header>
  );
};
export default NameAndTitle;
