var fs = require('fs')
var directory = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(directory,'utf8',function(error,fileList){
    fileList.forEach(file => {
        if(file.indexOf(extension)>-1){
            console.log(file);
        }
    })
});


//alternate solution

// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
