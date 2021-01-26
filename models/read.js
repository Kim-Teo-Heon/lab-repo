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