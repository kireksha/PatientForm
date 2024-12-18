export const Input = ({
  isTextarea = false,
  labelText,
  placeholder = "",
  inputType = "text",
  inputName,
  value,
  onChange,
}) => {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={inputName}>
        {labelText}
      </label>
      {isTextarea ? (
        <textarea
          className="form-control client-form"
          name={inputName}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-client={inputName}
        />
      ) : (
        <input
          className="form-control client-form"
          name={inputName}
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required={true}
          data-client={inputName}
        />
      )}
    </div>
  );
};
