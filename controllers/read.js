const read_model = require('../models/read');

exports.read_data= (req, res)=>{
    read_model.read_data((data)=>{
        res.render('./index/index',{data : data});
    })
}

exports.read_members= (req, res)=>{
    read_model.read_members((data)=>{
        res.render('./members/members',{members : data});
    })
}

exports.read_research = (req, res)=>{
    read_model.read_research((data)=>{
        res.render('./research/research',{research : data});
    })
}

exports.read_publications = (req, res)=>{
    read_model.read_publications((data)=>{
        res.render('./publications/publications',{publications : data});
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
            res.render('./admin/members/update',{members : data, page_id : req.params.page_id});
        } else{
            res.render('./admin/members/members',{members : data});
        }
    })
}

exports.read_admin_research = (req, res)=>{
    read_model.read_research((data)=>{

        if(req.params.page_id){
            res.render('./admin/research/update',{research : data, page_id : req.params.page_id});
        } else{
            res.render('./admin/research/research',{research : data});
        }
    })
}

exports.read_admin_publications = (req, res)=>{
    read_model.read_publications((data)=>{
        if(req.params.page_id){
            res.render('./admin/publications/update',{publications : data, page_id : req.params.page_id});
        } else{
            res.render('./admin/publications/publications',{publications : data});
        }
    })
}