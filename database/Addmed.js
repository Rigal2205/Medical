const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    urlToImage:{
        type:String,
        required:true
    },
    
})
const adata=mongoose.model('adata',userSchema)

module.exports=adata