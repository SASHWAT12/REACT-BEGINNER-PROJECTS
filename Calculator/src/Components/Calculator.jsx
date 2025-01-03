import React, { useState } from "react";
import "./Stylings/Calculator.css";
import Display from "./Display";
import Keypad from "./Keypad";

const Calculator = () => {
    const [value,setValue] = useState("");

    const handleClick = (currVal)=>{ 
        //logic
        if(currVal === "AC"){//case1
            setValue("");//
        }
        else if(currVal === "="){//case2
            try {
                setValue(eval(value).toString());
            } catch (error) {
                console.log(error);
                setValue("Error");
            }
        }
        else{//case3 - input is number or operator
            setValue((prevValue) => prevValue + currVal);
        }
    }

    return(
        <div className="calculator">
            <Display value = {value}/>
            <br />
            <Keypad handleClick={handleClick}/>
        </div>
    )
}

export default Calculator;