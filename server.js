const express = require('express');
const server = express();

server.use(express  .static(__dirname));

server.get('/',(req,res) =>{
    res.status(200).sendFile(__dirname + '/index.html');
}); 
server.listen(3000, () => {
    console.log('The server is running on port 3000');
});