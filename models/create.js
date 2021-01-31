var db=require('../db');

exports.create_data= function(req){
    let sql = 'INSERT INTO lab_intro(img,text,filename) VALUES(?,?,?)';
    let post = req.body
    let img= req.file.location;
    let text = post.text;
    let filename = req.file.originalname;

    db.query(sql, [img,text,filename],function (err, data) {
    if(err) {
      throw err;
    }
    });
  }

exports.create_members= function(req){
  let sql = 'INSERT INTO members(img,name,filename) VALUES(?,?,?)';
  let post = req.body
  let img= req.file.location;
  let name = post.name;
  let filename = req.file.originalname;

  db.query(sql, [img,name,filename],function (err, data) {
  if(err) {
    throw err;
  }
  });

}

exports.create_research= function(req){
  let sql = 'INSERT INTO research(img,text,filename) VALUES(?,?,?)';
  let post = req.body
  let img= req.file.location;
  let text = post.text;
  let filename = req.file.originalname;

  db.query(sql, [img,text,filename],function (err, data) {
  if(err) {
    throw err;
  }
  });
}

exports.create_publications= function(req){
  let sql = 'INSERT INTO publications(year,publications) VALUES(?,?)';
  let post = req.body
  let year= post.year;
  let publications = post.publications;

  db.query(sql, [year, publications],function (err, data) {
  if(err) {
    throw err;
  }
  });
}