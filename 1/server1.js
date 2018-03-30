var http = require('http')
http.createServer(function(req, res){
    res.writeHeader(200, {'Content-Type':'text/plain'});
    res.end('Hello world.');
}).listen(3000);
console.log('server running at http://localhost:3000')

