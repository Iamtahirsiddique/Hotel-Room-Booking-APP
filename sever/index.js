import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'

const app = express();
dotenv.config();

const connect = async () => {
    try{
        mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            console.log("Connectted to database")
        })
    }catch(error){
        throw error;
    }
};

app.use('/auth',authRoute);
app.listen(process.env.PORT,()=>{
    connect();
    console.log(`Server is running at ${process.env.PORT}`);
});