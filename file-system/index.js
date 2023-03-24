const fs = require('fs');

const data = "My interest in playing video game and read docs about diff-diff technology"
fs.writeFile('file.txt',data,(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File written successfully\n");
    }
})
fs.readFile('file.txt','utf-8',(err, data)=>{
console.log(data)
})