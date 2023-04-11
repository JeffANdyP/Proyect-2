import mongoose from 'mongoose'
import cors from 'cors'
import express from 'express'
// import { login } from '../back-end-code/controllers/LoginController'

//connection to mongoDB 
mongoose.set('strictQuery', false);
const API_url = 'mongodb+srv://ANdyjp:Creutiliazz@cluster0.6zw7cmp.mongodb.net/?retryWrites=true&w=majority/gameapp' 

async function connectToMongo() {
    try{
        await mongoose.connect(API_url);
        console.log('Awesome we are connected To MongoDb')
    } catch (error) {
        console.log(error);
    }
}
connectToMongo()

//Configuration
// require('dotenv').config()
// const PORT = process.env.PORT
const app = express()
app.use(cors());

//Controllers 
// const loginController = require('../controllers/LoginController')
// app.use('/login', loginController)
//Rutes

// Routes
app.get('/', (req, res) => {
    res.send('Hello From BacK-End')
})

app.use('/users', ()=> {
    res.send('some changes', login)
})

// app.post('/register',async (req, res) => {
//     try{
//         let foundUser = User.find((data) => req.body.email === data.email)
// })
app.listen(5000, ()=> {
    console.log('Hey Back-End is running')
})