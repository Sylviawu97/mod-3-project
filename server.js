const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
// lets us do process.env (get variables from .env file)
// now I can use process.env.VARIABLE_NAME
// when my server starts, I want to connect to my database

const app = express();
app.use(express.json());
// GET DATA
app.post("/create-application",(req,res)=>{
    console.log(req.body)
})

app.listen(4001, () => {
    console.log("listening on 4001")
})