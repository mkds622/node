var http = require('http');
var url = require('url');

http.createServer(function(request,response){
    var reqUrl = url.parse(request.url,true);
    response.writeHead(200, { 'Content-Type' : 'application/json'});
    if(reqUrl.pathname === '/api/parsetime'){
        var time = new Date(reqUrl.query.iso);
        response.end(JSON.stringify({ 'hour'  :  time.getHours() , 'minute' : time.getMinutes() , 'second' : time.getSeconds() }));
    } 
    else if ( reqUrl.pathname === '/api/unixtime'){
        response.end(JSON.stringify({ 'unixtime' : new Date(reqUrl.query.iso).getTime()}));
    }
}).listen(parseInt(process.argv[2]));

/*
Alternate Solution:

var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime: time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2])) */