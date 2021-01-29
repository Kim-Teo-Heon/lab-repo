const db = require('../db');

exports.read_data = function(callback){
    let sql='SELECT * FROM lab_intro';
    db.query(sql,(err, data)=>{
        if(err) {
            throw err;
        }
        return callback(data);
    })
}

exports.read_members = function(callback){
    let sql='SELECT * FROM members';
    db.query(sql,(err, data)=>{
        if(err) {
            throw err;
        }
        return callback(data);
    })
}

exports.read_admin = function(req, res, callback){
    let sql='SELECT * FROM admin WHERE id=? AND password=?';

    let id = req.body.id;
    let password = req.body.password;
    console.log('id : '+id, 'pw :'+ password)

    db.query(sql,[id,password],(err, data)=>{
        if(err) {
            throw err;
        }
        return callback(data);
    })
}