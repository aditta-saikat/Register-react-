const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://aditta_saikat:penguin007@cluster0.2jxyc6x.mongodb.net/?retryWrites=true&w=majority" , { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/login' , (req , res) => {
    const {email,password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success!");
            }else{
                res.json("Password is incorrect!");
            }
        }else{
            res.json("No record existed!");
        }
    })
})

app.post('/register' , (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(8080 , () =>{
    console.log("Server is running!")
})
