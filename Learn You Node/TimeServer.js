var net = require('net');
var strftime = require('strftime');
var server = net.createServer( function (socket){
    socket.write(strftime('%Y-%m-%d %H:%M'));
    socket.end('\n');
});
server.listen(process.argv[2]);