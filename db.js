const mysql=require('mysql');
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'lab'
})
db.connect();

module.exports=db;