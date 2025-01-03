import React from "react";
import "./Stylings/Buttons.css";

const Buttons = ({label,className,handleClick})=>{
    return(
        <div className= {`ButtonContainer ${className || ""}`}>
            <button onClick={handleClick} >{label}</button>
        </div>
    );
}

export default Buttons;