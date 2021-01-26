var db=require('../db');

exports.update_data = function(req){
    let sql = 'UPDATE lab_intro SET img=?, text=? WHERE id=?';
    let img= req.file.filename;
    let text= req.body.text;
    let id = req.params.page_id;

    db.query(sql, [img,text,id],function (err, data) {
    if(err) {
      throw err;
    }
    });
  }

exports.update_members = function(req){
    let sql = 'UPDATE members SET img=?, name=? WHERE id=?';
    let img= req.file.filename;
    let name= req.body.name;
    let id = req.params.page_id;

    db.query(sql, [img,name,id],function (err, data) {
    if(err) {
      throw err;
    }
    });
  }