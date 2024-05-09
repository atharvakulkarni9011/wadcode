const express=require("express");
const app=express();
const path=require("path");

const publicPath= path.join(__dirname, "public");
app.use(express.static(publicPath));


app.listen(8080 , (req,res)=>{
    console.log("app is listening...");
})