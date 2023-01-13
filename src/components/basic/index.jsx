export const Button = (props) => {
  const { children, clickFunc, className } = props;

  return (
    <button onClick={clickFunc} className={className}>
      {children}
    </button>
  );
};

export const Input = (props) => {
  const { type, placeholder, onChange, value, className } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={className}
    />
  );
};
