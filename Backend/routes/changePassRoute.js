const express=require('express')
const router=express.Router()
const changePassController=require("../controllers/changePassword")

router.post("/", changePassController.changePassword);

module.exports=router