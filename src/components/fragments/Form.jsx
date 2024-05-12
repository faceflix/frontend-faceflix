const Form = ({
  children,
  action,
  method,
  onSubmit,
  className,
  isDisabled,
  onClick,
}) => {
  return (
    <form
      className={className}
      action={action}
      method={method}
      onSubmit={onSubmit}
      onClick={onClick}
    >
      <div> </div>
      {children}
      <button
        disabled={isDisabled}
        className={` h-10 font-bold text-xl ${
          isDisabled ? `bg-blue-500` : "bg-[#87c4ff] hover:bg-[#87c3ffd0]"
        }`}
        type="submit"
      >
        {isDisabled ? "Loading..." : "Login"}
      </button>
    </form>
  );
};

export default Form;
