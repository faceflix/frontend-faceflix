const Input = ({ placeholder, type, name, className = "w-full px-3 py-2" }) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
