require("dotenv").config()
const express=require("express")
const mongoose=require("mongoose")
const userRoutes=require('./routes/users')
const swaggerUi = require('swagger-ui-express');
const swaggerJSDocs = require('./swagger.json');
const app=express()
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDocs));
app.use("/api/users",userRoutes)
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("connected to db and listening on port "+process.env.PORT)
    })

})
.catch((err)=>{
    console.log(err)
})