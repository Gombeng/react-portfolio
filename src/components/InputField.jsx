const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  disabled,
  errors,
  placeholder,
}) => {
  return (
    <div>
      <label className="sr-only" htmlFor={name}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className={`w-full rounded-md outline-none shadow-sm p-3 text-sm ${
            errors[name] && "border-2 border-red-500"
          }`}
          placeholder={placeholder}
          name={name}
          id={name}
          rows="5"
          value={value}
          onChange={onChange}
          disabled={disabled}
        ></textarea>
      ) : (
        <input
          className={`w-full rounded-md outline-none shadow-sm p-3 text-sm ${
            errors[name] && "border-2 border-red-500"
          }`}
          placeholder={placeholder}
          name={name}
          type={type}
          id={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      )}
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
      )}
    </div>
  );
};

export default InputField;
