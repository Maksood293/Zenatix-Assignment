import React from "react";

function Dropdown({ studentDetail, handleChange, labelName }) {
  const types= [
    "all types", "grass", "bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"
  ]
  return (
    <div class="form-control">
      <label>{labelName}</label>
      <select
        class="form-select"
        aria-label="Default select example"
        
        onChange={(e) => handleChange(e)}
      >
        {types?.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
      
    </div>
  );
}

export default Dropdown;