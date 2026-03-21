//Core module
//const http=require('http');
//External Module
const express=require('express');
//Local Module
const requestHandler=require('./user');


const app=express();
app.use("/",(req,res,next)=>{
    console.log("Came in first middleware" ,req.url,req.method);
     //res.send ("<p>Came from first middleware</p>");
    next();
});
// You cannot call  next() after response send.
app.get("/",(req,res,next)=>{
    console.log("Came in another middleware" ,req.url,req.method);
     res.send ("<p>Came from another middleware</p>");
    next();
});
app.use("/submit-details",(req,res ,next)=>{
    console.log("Came in Second middleware" ,req.url,req.method);
    res.send ("<p>Vivek Saini</p>");
    
});

//const server=http.createServer(app);
        

    
    const PORT=3001;
    app.listen(PORT,()=>{
        console.log(`Server running on address http://localhost:${PORT}`);
    });