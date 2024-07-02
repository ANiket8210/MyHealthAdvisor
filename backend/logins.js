import mongoose, { connect as _connect, Schema } from "mongoose";
import * as dotenv from 'dotenv'

dotenv.config({path:'../.env'});
const connect = _connect(process.env.MONGODB_LINK)
connect.then(()=>{
    console.log("database connected")
})
.catch(()=>{
    console.log("database not connected")
});

// create a schema
const LoginSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    }
});

const logins = new mongoose.model("logins",LoginSchema);

export default logins