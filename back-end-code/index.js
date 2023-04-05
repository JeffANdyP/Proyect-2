import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors());


app.get("/", (req, res) => {
    res.send('Hello From BacK-End')
})
app.listen(5000, ()=> {
    console.log('Hey Back-End is running')
} )