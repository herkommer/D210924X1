const anka = require('http');

const port = 80;

const server = anka.createServer(function (pelicanRequest, swanResponse){

    swanResponse.statusCode = 200;
    swanResponse.setHeader('Content-Type', 'text/plain');

    swanResponse.end('Hello from Node Server');
});

server.listen(port);

console.log('Server up and running at port ' + port);