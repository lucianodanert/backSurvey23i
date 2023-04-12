import mongoose from "mongoose";
import * as dotenv from 'dotenv';


dotenv.config()

/* const url = "mongodb://127.0.0.1:27017/test"; */
/* const url = URL; */

console.log(process.env.URL);
mongoose.connect(process.env.URL);
/* mongoose.connect(url); */

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("BD conectada");
});
