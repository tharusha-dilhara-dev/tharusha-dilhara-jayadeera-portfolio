import  express  from "express";
import {  getcertificate, getproject } from "../controllers/getdata.controller.js";

const router=express.Router();


router.get('/project',getproject);
router.get('/certificate',getcertificate);



export default router;
