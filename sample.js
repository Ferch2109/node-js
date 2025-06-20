// To run the file execute 'node sample.js'
// This will internally launch the server at port 8000
// Go to http://localhost:8000 to confirm is working.

var protocol = require("http");

protocol.createServer((request, response) => {
    response.writeHead(200, {'Content-type': 'text/html'});
    response.end('Hello 1st node app... '); // will be attached to the data/payload
}).listen(8000) // bind server to a particular port