const e = require('express')
const express = require('express')
const connectDatabase = require('./connection/conn')
const userRouter = require('./routes/userroutes')
const app = express()
const swaggerUI = require('swagger-ui-express')
const swaggerdoc = require('./swagger.json')



app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(userRouter)




app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerdoc))


app.use((err,req,res,next)=>{
    const {status =500 , message = "Something went wrong"} = err;
    res.status(status).json(message)
})
connectDatabase()
.then(()=>{
    app.listen(3000,()=>{
        console.log("server running and up at port 3000")
    })
})
.then((err)=>{
   return  new Error(err)
})
