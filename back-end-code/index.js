import cors from 'cors'
import express from 'express'
// const express = require('express')
// const cors = require('cors')

const app = express()
app.use(cors());


app.get("/data", (req, res) => {
    res.send('Hello From BacK-End')
})
app.listen(5000, ()=> {
    console.log('Hello from Back-End')
} )