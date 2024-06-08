const Button = ({ className, children, ...rest }) => {
  return (
    <button
      className={`p-3 px-7 bg-black rounded-md text-white transition-all duration-300 hover:scale-105 hover:opacity-80 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
