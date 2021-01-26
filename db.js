const mysql=require('mysql');
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '741085',
    database : 'lab'
})
db.connect();

module.exports=db;