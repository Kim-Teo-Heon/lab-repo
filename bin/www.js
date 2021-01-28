const http = require('http');
const app = require('../app');

let port = 8080;

const server = http.createServer(app);

server.listen(port);