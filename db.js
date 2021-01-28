const mysql=require('mysql');
const db = mysql.createConnection({
    host : 'localhost',
    user : 'kim',
    password : 'xogjs4821@',
    database : 'lab'
})
db.connect();

module.exports=db;