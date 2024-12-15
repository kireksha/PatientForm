import { useState } from "react";

export const Input = ({
  isTextarea = false,
  labelText,
  placeholder = "",
  inputType = "text",
  inputName,
}) => {
  const [text, setText] = useState("");
  const onChange = ({ target }) => {
    setText(target.value);
  };

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
          value={text}
          data-client={inputName}
        />
      ) : (
        <input
          className="form-control client-form"
          name={inputName}
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
          value={text}
          required={true}
          data-client={inputName}
        />
      )}
    </div>
  );
};
