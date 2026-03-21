const express=require('express');



const app=express();
app.use((req,res,next)=>{
    console.log("First Dummy Middleware",req.url,req.method);
    next();

});
app.use((req,res,next)=>{
    console.log("Second  Dummy Middleware",req.url,req.method);
    next();

});
// app.use((req,res,next)=>{
//     console.log("Third Middleware",req.url,req.method);
//     res.send("<h1>Welcome to Home Page</h1>");
// })
app.get("/",(req,res)=>{
    console.log("Handling / for Get",req.url,req.method);
     res.send(`<h1>Welcome to Home Page</h1>`);
});
app.get("/Contact-us",(req,res)=>{
    console.log("Handling /contact-us for Get",req.url,req.method);
      res.send(`<h1>Welcome to Contact-us Page</h1>
        <form action="/Contact-us" method="POST">
        <input type="text" name="name"placeholder="Enter your name"/>
        <input type="email" name="email"placeholder="Enter your Email"/>
        <input type="Submit" />
        </form>
        `)
});
app.post("/Contact-us",(req,res,next)=>{
    console.log("Handling /Contact-us for POST",req.url,req.method);
    res.send("<h1>We will Contact you shortly</h1>");

})

const PORT=3001;
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
});