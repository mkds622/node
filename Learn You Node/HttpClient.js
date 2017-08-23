var http = require('http');
var url = require('url');
var uriRequested= url.parse(process.argv[2]);

var options = {
    host : uriRequested.hostname,
    port : uriRequested.port,
    path : uriRequested.path
};
http.get(options, function(response){
    response.setEncoding('utf8');
    response.on("data", function(chunk){
        console.log(chunk);
    })
}).on('error', function(e){
    console.log(e);
});

/* Alternate Solution

 var http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)


*/