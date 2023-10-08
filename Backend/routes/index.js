const express=require('express')
const router=express.Router()
const loginRoutes=require('./authRoutes')
const studentRoutes=require('./studentRoutes')
const facultyRoutes=require('./facultyRoutes')
const adminRoutes=require('./adminRoutes')

const Routes=[
    {
        path:'/login',
        route:loginRoutes
    },
    {
        path:'/student',
        route:studentRoutes
    },
    {
        path:'/faculty',
        route:facultyRoutes
    },
    {
        path:'/admin',
        route:adminRoutes
    },
]

Routes.forEach((route)=>{
    router.use(route.path,route.route)
})
module.exports=router