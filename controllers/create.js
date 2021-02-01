var create_model=require('../models/create');

exports.create_data = function(req,res){
    create_model.create_data(req,function(){
      console.log("created succes");
    });
}//데이터 전송이 끝나면 실행

exports.create_members = function(req,res){
  create_model.create_members(req,()=>{
    console.log('create members');
  })
}

exports.create_research = function(req,res){
  create_model.create_research(req,()=>{
    console.log('create research');
  })
}

exports.create_publications = function(req,res){
  create_model.create_publications(req,()=>{
    console.log('create publications');
  })
}