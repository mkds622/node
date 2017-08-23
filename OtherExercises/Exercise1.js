/*
using NodeJS, Node Streams and HTTP Server
1) On start of the program, it creates a dummy file of 500mb+ in size using Node Streams.
2) Open the HTTP server on any port, and when accessed the port it should download the file created in 1st step.
3) Check the RAM performance during download.
4) The download logic should be written in a way that, RAM required during the start of the program and RAM used 
   during the download process should be more or less same.
*/

var http = require('http');
var fs = require('fs');
var wStream = fs.createWriteStream('dummy.txt',{defaultEncoding:'utf8'});
var fd = fs.open('./dummy.txt', 'r+', (err, fd) => {
    fs.ftruncate(fd, 1024 * 1024 * 1024, function (err) {
        console.log(err);
    });
});
wStream.close();
http.createServer(function (request, response) {
    var locationOfFile = '/Users/Mini1/Desktop/Meet/NodeJS/node/OtherExercises/dummy.txt';
    fs.exists(locationOfFile, function (exists) {
        if (!exists) {
            response.writeHead(404, { 'Content-Type': 'text/plain' })
            response.write('404 Not Found\n')
            response.end()
            return
        }
        // var wStream = fs.createWriteStream('DownloadedDummy.txt');        
        // response.setHeader("content-type", "text-plain");
        // var readable = fs.createReadStream(locationOfFile, { encoding: 'utf8', autoClose: true })
        //     .pipe(wStream);
        var wFile = fs.open("DownloadedDummy.txt",'w+',function(err,fd){
        //var rFile = fs.open(locationOfFile, 'r+');
        fs.readFile('dummy.txt','utf8',(err,string1)=>{
            if(err)
                return console.log(err);
            console.log("here");
            fs.writeFile(fd,string1,(err)=>{
            });
        });
    });
    });
}).listen(3000);