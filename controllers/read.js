const read_model = require('../models/read');
const fs = require('fs');

exports.read_data= (req, res)=>{
    read_model.read_data((data)=>{
        if(req.params.page_id){
            res.render('update',{data : data, page_id : req.params.page_id});
        } else{
            res.render('index',{data : data});
        }
    })
}

exports.read_members= (req, res)=>{
    read_model.read_members((data)=>{
        
        console.log(data);

        if(req.params.page_id){
            res.render('members-update',{members : data, page_id : req.params.page_id});
        } else{
            res.render('members',{members : data});
        }
    })
}