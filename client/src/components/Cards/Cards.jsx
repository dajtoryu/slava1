import React from "react";
import { useState,useEffect } from "react";
import { PickList } from "../PickList/PickList";
import { ListCard } from "../ListCard/ListCard";
//import {data} from "../../../src/data/data.js";
import styles from "./Cards.module.css";
import axios from 'axios';
export const Cards=()=>{


  const [state, setState] = useState({
      clicked:'winter',
      seasons:[
      true,
      false,
      false,
      false
      ],
      seasonNames : [
        'winter',
        'spring',
        'summer',
        'autumn'
              ],
      data:[],
      loading:false
              
     
     },);

     

     useEffect(()=>{getCards()},[setState]);
    
  
     const getCards  = async (season="winter")=>{
      setState((prvState)=>{
        return {...prvState,loading:true}
      })
      try{
        const resp = await axios.get(`http://localhost:3000/${season}`);
        const res =  await resp.data;
        console.log();
        setState((pstate)=>{
          return {...pstate,data:res,loading:false}
          })
        console.log(state);
      }catch(err){
        console.log(err);
      }
      
      
    }

    



     const changeSeason=(season)=>{ 
      
      const prevSeason = Object.keys(state.seasonNames).find(key=>state.seasonNames[key] === state.clicked);

      const currentSeason= Object.keys(state.seasonNames).find(key=>state.seasonNames[key] === season);
      
      getCards(season);
      
      let seasons =[...state.seasons];
          seasons[prevSeason]=false;
          seasons[currentSeason]=true;
      
      setState((prvState)=>{
        return {...prvState,clicked:season,seasons}
      });
       console.log(state);
     }
     
    
  return(
    <>
    <PickList click={changeSeason} picks={state.seasons} seasonNames={state.seasonNames}/>
    <div className={styles.cards}>
      
       {/* <ListCard  cards={data.cards[state.clicked]}/> */}
       <ListCard cards={state.data} />
    </div>
    
    </>
  )
    
}