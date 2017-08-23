var http = require('http');
var url = require('url');
var uriRequested= url.parse(process.argv[2]);

var bl = require('bl');

// var options = {
//     host : uriRequested.hostname,
//     port : uriRequested.port,
//     path : uriRequested.path
// };
http.get(process.argv[2], function(response){
    response.pipe(bl(function(err,data){
        if(err)
            console.log(err);
        console.log(data.toString().length);
        console.log(data.toString());  
    }));
}).on('error', function(e){
    console.log(e);
})

