var fs = require('fs');
var path = require('path');
module.exports= function(directory, extension, callback){
    var result = [];
    extension = '.' + extension; 
    fs.readdir(directory,'utf8',function(error,fileList){
        if(error){
            return callback(error);
        }
        fileList.forEach(file => {
            //if(file.indexOf(extension)>-1){
            if(path.extname(file) === extension){    
                result.push(file);
            }
        });
        callback(null,result);
    });
}