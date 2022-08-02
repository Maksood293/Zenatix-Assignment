import React from "react";

function Input({ id, label, type, placeholder, handleChange, value, message }) {
  return (
    <div class="form-control mr-4">
      <label for={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {message?.length > 0 && <small>{message}</small>}
    </div>
  );
}

export default Input;