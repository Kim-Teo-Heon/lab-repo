const http = require('http');
const app = require('../app');

let port = 80;

const server = http.createServer(app);

server.listen(port);