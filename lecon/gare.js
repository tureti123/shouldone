const express=require('express')
const home= require('./routes/home')
const app=express()
app.use(express.json())
app.use("/home",home)
const port =process.env.PORT || 3000
app.listen(port,()=>console.log(port))