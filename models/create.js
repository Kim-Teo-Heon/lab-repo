var db=require('../db');

exports.create_data= function(req){
    let sql = 'INSERT INTO lab_intro(img,text,filename) VALUES(?,?,?)';
    let post = req.body
    let img= req.file.location;
    let text = post.text;
    let filename = req.file.originalname;

    console.log(img);

    db.query(sql, [img,text,filename],function (err, data) {
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