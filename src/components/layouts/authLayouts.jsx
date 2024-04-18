import { Link } from "react-router-dom";

const AuthLayouts = ({ children, title }) => {
  return (
    <div className="bg-auth mt-[5.5rem] flex flex-col px-10  justify-center w-full max-w-[33.5rem]  mx-auto ">
      <header>
        <h2 className="  text-center font-mono font-bold italic text-[2rem]">
          Face Flix
        </h2>
      </header>
      <div className="mb-3 flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-center">
          {title == "register" ? "Register" : "Login"}
        </h3>
      </div>
      {children}
      <div className="relative mt-[20px]">
        <hr className="bg-black" />
        <div className="bg-white absolute  px-5 left-[50%] right-[50%] -top-3 -translate-x-10   ">
          OR
        </div>
      </div>
      <h2 className=" w-full flex justify-center py-2 items-center mx-auto mt-5 font-semibold gap-2  border border-opacity-0 hover:border-opacity-100  border-black cursor-pointer ">
        <img
          className="w-[20px] h-full "
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        />
        Continue With Google
      </h2>
      <div className="flex justify-center items-center text-[12px] mt-3 gap-1">
        {title == "register" ? "Remember Password?" : "Forgot Password?"}
        <div className="h-3 w-[1px] bg-black"></div>
        <p>
          {title == "register" ? "Do you have Account?" : "Need new Account?"}
        </p>
        <Link
          to={title == "register" ? "/login" : "/register"}
          className="hover:text-blue-500"
        >
          {title == "register" ? "Login!" : "SignUp?"}
        </Link>
      </div>
    </div>
  );
};

export default AuthLayouts;
