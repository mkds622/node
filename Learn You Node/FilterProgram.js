var filterFiles = require('./FilterModule.js');

var directory = process.argv[2];
var extension = process.argv[3];

var filesFiltered = filterFiles(directory,extension, function(error,files){
    if(error){
        console.log(error);
    }
    files.forEach(file => console.log(file));
})