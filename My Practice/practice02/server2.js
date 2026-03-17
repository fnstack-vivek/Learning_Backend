const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url==='/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>');
    res.write('<body><h1>WELCOME TO HOME</h1></body>');
    res.write('</html>');
     return res.end();}
    else if(req.url==='/products'){
        res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>');
    res.write('<body><h1>FIRST SERVER RESPONSE</h1></body>');
    res.write('</html>');
    return res.end();
    }
    else{ 
          res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>');
    res.write('<body><h1> checkout product</h1></body>');
    res.write('</html>');
    return res.end();
        
        
        
    }

});

const PORT = 3001;
console.log("Server run successfully");
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});