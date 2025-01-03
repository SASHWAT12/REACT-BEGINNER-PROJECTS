import React from "react";
import "./Stylings/Display.css";

const Display = ({value}) =>{
    return (
        <div className="DisplayBox">
            <div className="numVal">
                {value || "0"}
            </div>
        </div>
    );
}

export default Display;