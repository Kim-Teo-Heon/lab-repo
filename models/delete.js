var db=require('../db');


exports.delete_data = function(req){
  let sql = 'DELETE FROM lab_intro WHERE id=?';
  let id = req.params.page_id;
  
  db.query(sql, [id],function (err, data) {
  if(err) {
    throw err;
  }
  });
}

exports.delete_members = function(req){
  let sql = 'DELETE FROM members WHERE id=?';
  let id = req.params.page_id;
  
  db.query(sql, [id],function (err, data) {
  if(err) {
    throw err;
  }
  });
}

