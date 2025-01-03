const express= require('express');
const Contact=require("./module/Contact")
const app =express();
const mongoose=require("mongoose")
const cors=require('cors');
const PORT=2000;
app.use(cors());//
app.use(express.json()) //req na ander body banave ander je data apde mkliyo ae store kre
app.use(express.urlencoded({extended:false})) // form data control and send data in req body
mongoose.connect("mongodb://127.0.0.1:27017/Portfolio")
 
 app.post("/contact",async(req,res)=>{
    console.log(req.body);
     const result=await Contact.create({
        name:req?.body?.name,
        email:req?.body?.email,
        contact:req?.body?.contact
        
     }) 
     res.json(result)           
 })
 app.get("/Test",async(req,res)=>{
    const allData=await Contact.find()
    res.json(allData)
    
    
 })


app.listen(PORT,()=>{


    console.log("server Started On "+PORT);
    
}
);