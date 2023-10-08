const express=require('express')
const router=express.Router()


const authController=require("../controllers/auth")
const isAuth = require("../middleware/is-auth");

router.post("/signin", authController.login);


module.exports=router