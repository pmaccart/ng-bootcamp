// server.js
var connect = require('connect');
connect.createServer(
  connect.static(__dirname + '/../client')
).listen(3000);

console.log('Starting server on port 3000');