import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import products from './data/products.js'
import connectDB from './config/db.js'
connectDB()
const port=process.env.PORT || 5000;


const app = express()


app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/products/:pid',(req,res)=>{
    const product = products.find((p)=>p._id === req.params.pid)
    res.json(product)
})





app.listen(port,console.log(`server is running on ${port}`))



