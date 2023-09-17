import express from 'express';
import cors from 'cors';
//import path from 'path';
import {data} from './data.js';
const app=express();
app.use(cors());
app.get('/:season',(req,res)=>{
    const js = data[req.params.season];
    setTimeout(()=>{
        res.json(js);
    },500)
     
})
app.listen(3000,()=>{
    console.log(1);
})