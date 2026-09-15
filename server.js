import express from 'express'
import {connect} from 'mongoose'
import {config} from 'dotenv'
import { sentenceRouter } from './sentence-api/sentence.router.js'
config()

const app=express()

//body parser
app.use(express.json())
app.use("/sentence",sentenceRouter)

//get port from env
let port=process.env.PORT
let DB_URL=process.env.DB_URL

//function to connect DB
async function connectDB(){
    try{
        await connect(DB_URL)
        console.log("DB connected")
        //start the HTTP server
        app.listen(port,()=>console.log(`Server listening on port ${port}`))

    }catch(err){
        console.log("Error in DB connection :",err)
    }
}


connectDB()

//error handling middleware
app.use((err,req,res,next)=>{
    console.log("Err is ",err)
    res.json({success:false,message:"Error occurred",reason:err.message})
})