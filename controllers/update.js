const update_model = require('../models/update');


exports.update_data = function(req,res){
    
    update_model.update_data(req,function(){
      console.log("updated success");
    })
    }//데이터 전송이 끝나면 실행

exports.udpate_members= function(req,res){
    update_model.update_members(req,function(){
        console.log("updated members");
      })
}
