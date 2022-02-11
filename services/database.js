// import mongoose
const mongoose = require("mongoose")

//connection 

mongoose.connect('mongodb://localhost:27017/BankAppDB',{
    useNewUrlParser:true
})

//model creation

const User=mongoose.model('User',{
    acno:Number,
    uname:String,
    password:String,
    balance:Number,
    transaction:[]
})

//export model

module.exports={
    User,
    
}

