const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pin:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
})
const add=mongoose.model('add',userSchema)

module.exports=add