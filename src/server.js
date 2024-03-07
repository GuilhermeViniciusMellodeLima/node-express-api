//const express = require('express')
import express from 'express'
import {PORT, HOST} from './config.js'        
import logger from './middleware/logger.js'
import userRouter from './routers/userRouter.js'
import productsRouter from './routers/productsRouter.js'


const app = express()

//middleware
app.use(express.json())
app.use(logger)

//routes
app.get('/', (req, res) => {
  res.json({success: "Bem-vindo a API!"})
})

app.use('/user', userRouter)
app.user('/products', productsRouter)


//run server
app.listen(PORT, () => {
  console.log(`Servidor rodando em ${HOST}:${PORT}`)
})