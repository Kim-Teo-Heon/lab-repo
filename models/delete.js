var db=require('../db');
const s3 = require('../config/s3');

exports.delete_data = function(req){
  let sql = 'DELETE FROM lab_intro WHERE id=?';
  let id = req.params.page_id;
  db.query(sql, [id],function (err, data) {
  if(err) {
    throw err;
  }
  // s3.deleteObject({
  //   Bucket : 'kongju-ahnlab',
  //   Key: data.img
  // }, function(err, data){});

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

