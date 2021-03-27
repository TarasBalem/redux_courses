import React from "react";
import PropTypes from "prop-types";

const TextInput = ({name, label, handleChange, value, error}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={[name]}>{label}</label>
      <input
        id={name}
        value={value}
        onChange={handleChange}
        name={name}
        type="text"
        className="form-control"
        placeholder={label}
      />
      {error && <div className="error text-danger">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  value: "",
  error: "",
};

export default TextInput;
