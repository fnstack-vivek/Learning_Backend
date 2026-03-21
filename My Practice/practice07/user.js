const fs= require('fs');
const { URLSearchParams } = require('url');

const requesthandler = ((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete coding</title></head>');
        res.write('<body><h1>Enter your details</h1>');
        res.write('<form action="/products-details" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
        
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male" />');
        
        res.write('<label for="female">Female</label>');
        res.write('<input type="radio" id="female" name="gender" value="female" />');
        
        res.write('<label for="other">Other</label>');
        res.write('<input type="radio" id="other" name="gender" value="other" />');
        
        res.write('<br><input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }else if(req.url.toLocaleLowerCase()==="/products-details"&& req.method=="POST"){
            const body=[];
            req.on('data', chunk =>{
                console.log(chunk);
                body.push(chunk);

            });
            req.on('end',()=>{
                const fullbody= Buffer.concat(body).toString();
                const parms=new URLSearchParams(fullbody);
                // const bodyobject={};
                // for(const [key,val] of parms.entries()){
                //     bodyobject[key]=val;

                // }
                const bodyobject=Object.fromEntries(parms);// jo  kam comment three line ma ho raha ha bo is line ma akala ho raha ha
                console.log(bodyobject);
                fs.writeFileSync('user.txt',JSON.stringify(bodyObject));
            });

           
           res.statusCode=302;
           res.setHeader('Location', '/');
           return res.end();

    }
    else{
           res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>');
    res.write('<body><h1>Like/Share</h1></body>');
    res.write('</html>');
    return res.end();
    }
    
});
module.exports=requesthandler;
