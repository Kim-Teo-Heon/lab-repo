const express = require('express');
const router = express.Router();
const multer = require('multer');
const multer_s3 = require('multer-s3');
const aws = require('aws-sdk');

const read = require('../controllers/read');
const create = require('../controllers/create');
const delete_ = require('../controllers/delete');
const update = require('../controllers/update');
const alert = require('../public/javascripts/alert');

aws.config.loadFromPath(__dirname + '/../config/s3.json');
s3 = new aws.S3();
const upload = multer({
    storage: multer_s3({
        s3: s3,
        bucket: 'kongju-ahnlab',
        acl: 'public-read',
        key: function(req, file, cb){
            cb(null, file.originalname ); // 이름 설정
        }
    })
})

router.get('/',(req, res)=>{
    read.read_admin_publications(req, res);
})

router.post('/create',(req,res)=>{
    let post = req.body;

    if(post.year == ''){
        res.redirect(alert.year_err);
    } else if(post.publications == ''){
        res.redirect(alert.text_err);
    } else{
    create.create_publications(req, res);
    res.redirect('/dksekgns-admin/publications');
    }
})

router.get('/update/:page_id',(req, res)=>{
    read.read_admin_publications(req, res);    
})

router.post('/update/:page_id',(req,res)=>{
        update.update_publications(req,res);
        res.redirect('/dksekgns-admin/publications');
})

router.post('/delete/:page_id',(req, res)=>{
    delete_.delete_publications(req,res);
    res.redirect('/dksekgns-admin/publications');
})

module.exports = router;