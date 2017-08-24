var Http = require('http');
var map = require('through2-map');

Http.createServer(function(request,response){
    if(request.method !== 'POST'){
        return console.log("send a POST request!");
    }
    request.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(response);
}).listen(parseInt(process.argv[2]));