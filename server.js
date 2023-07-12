const express = require('express');
const path = require('path');
const ApplicationForm = require("./models/Application");
const express = require('express');
const dotenv = require('dotenv');
app.use(express.json());
app.use(express.static(path.join(__dirname, "/build")));
dotenv.config();
require("./config/database")
// lets us do process.env (get variables from .env file)
// now I can use process.env.VARIABLE_NAME
// when my server starts, I want to connect to my database



const app = express();
app.use(express.json());
// GET DATA
app.post("/create-application",async(req,res)=>{
    console.log(req.body)
    // use model to make a create request to the collection
    let response=await ApplicationForm.create(req.body)
})
app.get("/applications", async(req,res)=>{
    let response=await ApplicationForm.find();
    res.send(response)
})
app.put("./applications/:idOfApp/:newPerson",async(req,res)=>{
    const idOfApp=req.params.idOfApp;
     const newPerson=req.params.newPerson;
     let response = await ApplicationForm.findByIdAndUpdate(idOfApp, {name: newPerson})
     res.send(response)

})
app.delete('/applications/:idOfApp', async (req, res) => {
    const idOfApp = req.params.idOfApp;
    let response = await ApplicationForm.findByIdAndDelete(idOfApp)
    res.send(response)
})


app.listen(4001, () => {
    console.log("listening on 4001")
})