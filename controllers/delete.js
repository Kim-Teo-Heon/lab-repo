var delete_model=require('../models/delete');


exports.delete_data = function(req,res, s3){
  delete_model.delete_data(req, s3, function(){
    console.log("delete succes");
  });
}//데이터 전송이 끝나면 실행

exports.delete_members = function(req,res){
  delete_model.delete_members(req,function(){
    console.log("delete members");
  });
}//데이터 전송이 끝나면 실행
