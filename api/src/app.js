require('dotenv').config()
const io= require('./sockets/index.socket')
const express= require('express')

const app= express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
