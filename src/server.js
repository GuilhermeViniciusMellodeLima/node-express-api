//const express = require('express')
import express from 'express'
import {PORT, HOST} from './config.js'        
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import logger from './middlewares/logger.js'


const app = express()

//middleware
app.use(express.json())
app.use('/user', logger)


//routes
app.get('/', (req, res) => {
  res.json({success: "Bem-vindo a API!"})
})

app.use('/user', userRouter)
app.use('/products', productRouter)


//run server
app.listen(PORT, () => {
  console.log(`Servidor rodando em ${HOST}:${PORT}`)
})