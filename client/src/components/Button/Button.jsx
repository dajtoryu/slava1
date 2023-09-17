import React from "react";
import styles from "./Button.module.css";
import { useState } from "react";

export const Button=()=>{
     const [state,setClicked] = useState({clicked:false});

     const changeByClick = ()=>{
        let cl = !state.clicked;
        setClicked({clicked:cl});
        console.log(1);
     }
    return(
        <button onClick={()=>changeByClick()} className={state.clicked ? styles.active : styles.nonactive}>Buy</button>
    )
}