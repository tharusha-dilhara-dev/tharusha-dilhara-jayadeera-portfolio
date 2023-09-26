import  express  from "express";
import {  getproject } from "../controllers/getdata.controller.js";

const router=express.Router();


router.get('/project',getproject);




export default router;
