import mongoose from "mongoose";

const projectschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    },
    gitlink:{
        type:String,
    },
    rating:{
        type:String,
    }
},{timestamps:true});

const Project=mongoose.model('project',projectschema);

export default Project;