const db = require('../db');

exports.read_admin = function(req, res, callback){
    let sql='SELECT * FROM admin WHERE id=? AND password=?';

    let id = req.body.id;
    let password = req.body.password;
    console.log('id : '+id, 'pw :'+ password);

    db.query(sql,[id,password],(err, data)=>{
        if(err) {
            throw err;
        }
        return callback(data);
    })
}