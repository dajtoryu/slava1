import React from "react";
import styles from "./Card.module.css";
import {Button} from "../Button/Button.jsx";
export const Card=({author,image,text,title})=>{
    
    return(
        <div className={styles.card}>
        <div className={styles.card_inner}>
            <div className={styles.card_header}>
                <div className={styles.staff}>Staff Picks</div>
            <hr className={styles.line} />
            <div className={styles.title_author}>
                <div  className={styles.title}>
                    {title}

                </div>
                <div className={styles.author}>
                    By <span >{author}</span>
                </div>

            </div>
            </div>
            
            <div className={styles.textimagebutton}>
                <div className={styles.textimage}>
                    <div className={styles.text}>{text}</div>
                    <div className={styles.image}>
                        <img className={styles.picture } src={`././src/img/${image}`} alt="" /> 
                    </div>
                </div>
                
                <div className={styles.buying}>
                    <Button />
                </div>
            </div>
            
        </div>
    </div>
    );
}