import express from "express";
import mongoose from "mongoose";
import getdata from './routes/getdata.routes.js';
import cors from 'cors';




mongoose.connect("mongodb+srv://tdjayadeera:lXnlQJ1RfyEwwL1X@cluster0.dxd3upl.mongodb.net/tdjayadeera?retryWrites=true&w=majority")
.then(()=>{
    console.log('connect to database')
})
.catch((err)=>{
    console.log(err);
})

const app=express();
app.use(cors({
    origin:"http://localhost:5173/"
}));




app.use('/api',getdata);



app.listen(3000,()=>{
    console.log('server is on port 3000');
})