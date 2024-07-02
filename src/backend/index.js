import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt'
const app=express()
const port=3000;
import logins from './logins.js'

//convert into json format
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors())
app.use(bodyParser.json())

//*register user
app.post("/sign-up",async(req,res)=>{
    console.log(req.body)

    try{
        const data ={
        name: req.body.username,
        password: req.body.password,
        email: req.body.email
        }
        //check if user already exist or not
        const existingUser = await logins.findOne({name: data.name})
        if(existingUser){
            res.json({validity:false,message:"User already exist, please select different username"})
        }else{
            // hashing the password
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(data.password,saltRounds)
            data.password = hashedPassword;

            const userdata = await logins.insertMany(data)
            res.status(201).json({validity : true ,username: userdata.name,email:userdata.email});
            
            // console.log(userdata);
    }}catch(error){
        return res.json({message : "Internal server error", error : error})
     }
    
});

//*login user
app.post("/sign-in",async(req,res)=>{
    try{
        
        const check = await logins.findOne({name: req.body.username})
        console.log("check",check)
        if(!check){
           return  res.json({message : "user name cannot found"});
        }
        //compare the hash password
        const ispasswordmatch = await bcrypt.compare(req.body.password,check.password)
        if(ispasswordmatch){
            res.status(201).json({validity : true ,username: check.name,email:check.email});
        }else{
            res.status(401).json({validity : false , message : "Incorrect passowrd" });
        }
    }catch(error){
       return res.json({message : "Internal server error", error : error})
    }
});

//*User home page
app.get("/profile/:username",async(req,res)=>{
    try{
        const check = await logins.findOne({name: req.params.username})
            res.status(201).json({username: check.name,email:check.email});
    }catch(error){

       return res.json({message : "Internal server error", error : error})
    }
})


app.listen(port,()=>{
    console.log(`Server at port ${port}`)
})