const fs=require('fs');
console.log('1.Start of Script');
console.log('2.Reading file Synchronously');
const dataSync=fs.readFileSync('user-details.txt','utf8');
console.log('3.synchronous read complete');
//Async
console.log('4.Reading file asynchronously');
fs.readFile('user-details.txt','utf8',(err,dataAsync)=>{
    if(err) throw err;
    console.log('6.Asynchronously read complete');
});
console.log('5.End of Script');