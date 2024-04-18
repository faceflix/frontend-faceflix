const Input = ({
  placeholder,
  type,
  name,
  className = "w-full px-3 py-2",
  onChange,
  value,
}) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
