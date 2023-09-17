import React from "react";
import styles from "./PickList.module.css"
export const PickList=({click,picks,seasonNames})=>{
    const elements = picks.map((el,key)=>{
           if(el)
           return (

            <div key={key.toString()} onClick={()=>click(seasonNames[key])}className={styles.pick_winter}>
            <div className={styles.pick_circle}>
                
                   <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <circle cx="8.5" cy="8.5" r="7.5" stroke="black" strokeWidth="2"/>
                    <circle cx="8.5" cy="8.5" r="3.5" fill="black"/>
                  </svg>
                
                
            </div>
            <div className={styles.pick_text} >
                <b>{seasonNames[key]}</b>
            </div>
            
        </div>  

           )

           return(
            <div key={key.toString()} onClick={()=>click(seasonNames[key])}className={styles.pick_winter}>
            <div className={styles.pick_circle}>
                
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                              <circle cx="8.5" cy="8.5" r="7.5" stroke="black" strokeWidth="2"/>
            </svg>
                
                
            </div>
            <div className={styles.pick_text} >
                {seasonNames[key]}
            </div>
            
        </div>  
           )

    })


    return(

        <div className={styles.pick} >
            
          <div className={styles.pick_title} >
              Pick favorites of season
          </div>
          <div className={styles.pick_selecting}>
                {elements}
                   
                  </div>  
              
                  </div>
  
                      
              
              
          
    )
}