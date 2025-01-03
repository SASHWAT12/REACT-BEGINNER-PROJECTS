import React from "react";
import Buttons from "./Buttons";
import "./Stylings/Keypad.css";

const Keypad = ({handleClick}) =>{
    const buttons = [
        { label: "7" }, { label: "8" }, { label: "9" }, { label: "/" , className:"operator"},
        { label: "4" }, { label: "5" }, { label: "6" }, { label: "*", className:"operator"},
        { label: "1" }, { label: "2" }, { label: "3" }, { label: "-", className:"operator"},
        { label: "0", className:"large"}, { label: "." }, { label: "+", className:"operator"}, { label: "=", className:"equal large"},
        { label: "AC", className:"clear large"}
    ];

    return (
        <div className="KeypadBox">
            {buttons.map((btn,index)=>(
                <Buttons 
                  key = {index}
                  label = {btn.label}
                  className = {btn.className}
                  handleClick={() => handleClick(btn.label)}
                />
            ))}
        </div>
    );
}

export default Keypad;