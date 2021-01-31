var db=require('../db');

exports.update_data = function(req){
    let sql = 'UPDATE lab_intro SET img=?, text=?, filename=? WHERE id=?';
    let img= req.file.location;
    let text= req.body.text;
    let id = req.params.page_id;
    let filename = req.file.originalname;

    db.query(sql, [img,text,filename,id],function (err, data) {
    if(err) {
      throw err;
    }
    });
  }

exports.update_members = function(req){
    let sql = 'UPDATE members SET img=?, name=?, filename=? WHERE id=?';
    let img= req.file.location;
    let name= req.body.name;
    let id = req.params.page_id;
    let filename = req.file.originalname;

    db.query(sql, [img,name,filename,id],function (err, data) {
    if(err) {
      throw err;
    }
    });
  }

  exports.update_research = function(req){
    let sql = 'UPDATE research SET img=?, text=?, filename=? WHERE id=?';
    let img= req.file.location;
    let text= req.body.text;
    let id = req.params.page_id;
    let filename = req.file.originalname;

    db.query(sql, [img,text,filename,id],function (err, data) {
    if(err) {
      throw err;
    }
    });
  }

  exports.update_publications = function(req){
    let sql = 'UPDATE publications SET year=?, publications=? WHERE id=?';
    let post = req.body
    let year = post.year;
    let publications = post.publications;
    let id = req.params.page_id;


    db.query(sql, [year, publications,id],function (err, data) {
    if(err) {
      throw err;
    }
    });
  }
  