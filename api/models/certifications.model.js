import mongoose from "mongoose";

const certificationscha=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    organization:{
        type:String,
        required:true
    }
},{timestamps:true});

const Certification=mongoose.model('certifications',certificationscha);

export default Certification;