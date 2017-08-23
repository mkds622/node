var fs = require('fs');

var filePath = process.argv[2];

//var buffer = fs.readFileSync(filePath);
//console.log(buffer.toString().split('\n').length - 1);

//alternate solution

var buffer = fs.readFileSync(filePath,'utf8');
console.log(buffer.split('\n').length - 1);