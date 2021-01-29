const login_model = require('../models/login');

exports.read_admin = (req,res)=>{
    login_model.read_admin(req, res, (data)=>{
        
        if(data[0] !== undefined){
            console.log('login');
            res.redirect('/dksekgns-admin');
        } else{
            console.log('false');
            res.redirect('/');
        }
    })
}
