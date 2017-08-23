var fs = require('fs');
var http = require('http');
var url = require('url');
var port = process.argv[2];
var locationOfFile = process.argv[3];

http.createServer(function(request,response){
    
    fs.exists(locationOfFile, function(exists){
        if(!exists) {
            response.writeHead(404, {'Content-Type': 'text/plain'})
            response.write('404 Not Found\n')
            response.end()
            return
        }
        
        response.setHeader("content-type", "text-plain");
        var readable = fs.createReadStream(locationOfFile, {encoding : 'utf8', autoClose:true})
                        .pipe(response);
    });
}).listen(port);

/*
Alternate solution
var http = require('http')
    var fs = require('fs')
    
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))

*/