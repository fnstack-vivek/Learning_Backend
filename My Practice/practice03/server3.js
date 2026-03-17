const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.method ,req.url);
    if(req.url==="/home"){
        res.write("Welcome to home");
        return res.end();

    }
    
    if(req.url==="/men"){
        res.write("Welcome to Men section");
        return res.end();
    }
        if(req.url==="/women"){
        res.write("Welcome to Women section");
    return res.end();
}

        if(req.url==="/kinds"){

        res.write(" Welcome to kinds store");
     return res.end();
}
        if(req.url==="/carts"){
             

            res.write("Welcome to Cart issue centre");
         return res.end();}
    res.write(`
        <html lang="en">
        <head>
        <title>Myantra</title>
    <html>
     <body>
<head>
    <nav>
       <ul>
       <li><a href="/home">Home</a></li>
       <li><a href="/men">Men</a></li>
       <li><a href="/women">Women</a></li>
       <li><a href="/kinds">Kinds</a></li>
       <li><a href="/carts">Cart</a></li>
    </ul>
</nav>
</head>
</body>
</html>
    `);
    res.end();
});
    const PORT = 3003;
console.log("Server run successfully");
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

