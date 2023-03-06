const {Router }  = require('express')
const userRouter = Router()
const mongoose = require('mongoose')
const createError = require('http-errors');
const usermodel = require('../model/usermodel');
const { eventNames, setMaxListeners } = require('../model/usermodel');

userRouter.post('/users',async(req,res,next)=>{
try {     
         const { name ,email,city } = req.body
        const user = await usermodel.create({name ,email,city})
        res.send(user)
} catch (error) {
    next(error)
    
}
    
})


userRouter.get('/users',async(req,res,next)=>{
    try {
        const user = await usermodel.find().lean()
        res.send(user)
        
    } catch (error) {
        next(error )
        
    }
})


userRouter.get('/users/:userId',async(req,res,next)=>{
    try{
        const {userId} = req.params;
        const  usr = await usermodel.findById(userId)
        res.send(usr)
    } catch (error) {
        next(error)
        
    }
})


userRouter.put('/users/:userId', async(req,res,next)=>{
    try {
        const {name,email,city} = req.body
        const {userId} = req.params;
        const user = await usermodel.findByIdAndUpdate(userId,{name,email,city},{new:true})
        res.send(user)
        
    } catch (error) {
        next(error)
        
    }
})



userRouter.delete('/users/:userId',async(req,res,next)=>{
    try {
        const {userId} = req.params;
        const user = await usermodel.findByIdAndDelete(userId)
        res.json(user)
        
    } catch (error) {
        next(error)
        
    }
})

module.exports = userRouter
