import React from "react";
import "./style.css";
const Popup = ({ data, handleClose }) => {
   
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={()=>handleClose(false)}>
          x
        </span>
        <h2>
          <b>Details</b>
        </h2>
        <div className="popup-item">
        <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`} class="card-img-top" style={{height:"170px"}} alt="..."/>
          <div className="popup-data" >
            <h4 >Name :{data.name}</h4>
            <h5 >Weight: {data.weight}</h5>
             <h6 >Type :{data.types[0].type.name}</h6>
             <p >Id: {data.id}</p> 
            </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;