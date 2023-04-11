// pass all imports
import express from 'express'
import bodyParser from 'body-parser'
import { User} from '../models/user'

const login = express.Router()
login.use(bodyParser.json());
    
    // create route utilizing the post request
    login.post('./users', async(req, res) => {
        const {name, email, password}= req.body;
    
        try{
            const user = await User.findOne({email}); 
            
            if (!user || user.password !==password) {
                //if the user isn't found or the password is incorrect return an error massage
                return res.status(401).json({ message: 'The gmail or the password does not match'})
            }
            //send a a response to the client that the users exist 
            res.status(200).json({ message: 'User exists', user});
            // response to any errors that occur during the database connection
        } catch(error){
            console.log(error);
            res.status(500).json({ message: 'Something went wrong while creating the user'})
        }
    });    
   export default login;