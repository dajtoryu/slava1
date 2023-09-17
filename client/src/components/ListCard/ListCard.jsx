import React from "react";
import {Card} from "../Card/Card";

 export const ListCard=({cards})=>{
    
    const lst = cards.map((el,key)=>{
        return <Card title={el.tile}  author={el.author} text={el.text} image = {el.img} key={key.toString()}/>
    })
    return (
        <>
        {lst}
        </>

    )
    
}