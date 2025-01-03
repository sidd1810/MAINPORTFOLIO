const mongoose=require("mongoose")

const PortfolioSchema=new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    email:{
        require:true,
        type:String
    },
    contact:{
        require:true,
        type:Number
    },
    
})
const Contact=mongoose.model("contact",PortfolioSchema)
module.exports=Contact