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
    read.read_admin_research(req, res);
})

router.post('/create', upload.single('img'),(req,res)=>{
    if(req.file == undefined){
        res.send(alert.img_err());
    } else if(req.body.text == ''){
        res.send(alert.text_err());
    } else{
        create.create_research(req, res);
        res.redirect('/dksekgns-admin/research');
    }
})

router.get('/update/:page_id',(req, res)=>{
    read.read_admin_research(req, res);    
})

router.post('/update/:page_id', upload.single('img'),(req,res)=>{
    update.update_research(req,res);

    s3.deleteObject({
        Bucket : 'kongju-ahnlab',
        Key: req.body.filename
    }, function(err, data){});

    res.redirect('/dksekgns-admin/research');
})

router.post('/delete/:page_id',(req, res)=>{
    delete_.delete_research(req,res);

    s3.deleteObject({
        Bucket : 'kongju-ahnlab',
        Key: req.body.filename
    }, function(err, data){});

    res.redirect('/dksekgns-admin/research');
})

module.exports = router;