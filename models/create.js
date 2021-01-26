var db=require('../db');

exports.create_data= function(req){
    let sql = 'INSERT INTO lab_intro(img,text) VALUES(?,?)';
    let post = req.body
    let img= req.file.filename;
    let text = post.text;

    db.query(sql, [img,text],function (err, data) {
    if(err) {
      throw err;
    }
    });
  }

exports.create_members= function(req){
  let sql = 'INSERT INTO members(img,name) VALUES(?,?)';
  let post = req.body
  let img= req.file.filename;
  let name = post.name;

  db.query(sql, [img,name],function (err, data) {
  if(err) {
    throw err;
  }
  });
}