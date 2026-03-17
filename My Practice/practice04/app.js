const http = require('http');
const requesthandler = require('./user');
const server = http.createServer(requesthandler);


const PORT = 3003;
console.log("Server run successfully");
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});