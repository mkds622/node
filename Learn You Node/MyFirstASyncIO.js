var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath,function(error, buffer){
    if(error){
        console.log("Data Read Error! Please Try again");
    }
    console.log(buffer.toString().split('\n').length -1);
})