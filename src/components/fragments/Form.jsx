const Form = ({ children, action, method, onSubmit, className }) => {
  return (
    <form
      className={className}
      action={action}
      method={method}
      onSubmit={onSubmit}
    >
      <div> </div>

      {children}
      <button
        className="bg-[#87c4ff] hover:bg-[#87c3ffd0] h-10 font-bold text-xl"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Form;
