const read_model = require('../models/read');

exports.read_data= (req, res)=>{
    read_model.read_data((data)=>{
        if(req.params.page_id){
            res.render('update',{data : data, page_id : req.params.page_id});
        } else{
            res.render('./index/index',{data : data});
        }
    })
}

exports.read_members= (req, res)=>{
    read_model.read_members((data)=>{
        
        console.log(data);

        if(req.params.page_id){
            res.render('members-update',{members : data, page_id : req.params.page_id});
        } else{
            res.render('./members/members',{members : data});
        }
    })
}

exports.read_admin_data= (req, res)=>{
    read_model.read_data((data)=>{
        if(req.params.page_id){
            res.render('./admin/index/update',{data : data, page_id : req.params.page_id});
        } else{
            res.render('./admin/index/index',{data : data});
        }
    })
}

exports.read_admin_members = (req, res)=>{
    read_model.read_members((data)=>{

        if(req.params.page_id){
            res.render('./admin/members/members-update',{members : data, page_id : req.params.page_id});
        } else{
            res.render('./admin/members/members',{members : data});
        }
    })
}