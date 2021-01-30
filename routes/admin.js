const express = require('express');
const router = express.Router();
const multer = require('multer');
const multer_s3 = require('multer-s3');
const aws = require('aws-sdk');

const read = require('../controllers/read');
const create = require('../controllers/create');
const delete_ = require('../controllers/delete');
const update = require('../controllers/update');

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

router.get('/',upload.single('img'), (req, res)=>{
    read.read_admin_data(req,res);
})

router.post('/create',upload.single('img'),(req, res)=>{
    create.create_data(req, res);
    res.redirect('/dksekgns-admin');
    console.log('file : '+ req.file.location);
})

router.post('/delete/:page_id',(req, res)=>{
    delete_.delete_data(req, res);
    
    s3.deleteObject({
        Bucket : 'kongju-ahnlab',
        Key: req.body.filename
    }, function(err, data){});

    res.redirect('/dksekgns-admin');
})

router.get('/update/:page_id',(req, res)=>{
    read.read_admin_data(req,res);
})

router.post('/update/:page_id', upload.single('img'),(req, res)=>{
    update.update_data(req,res);

    s3.deleteObject({
        Bucket : 'kongju-ahnlab',
        Key: req.body.filename
    }, function(err, data){});

    res.redirect('/dksekgns-admin');
})

module.exports = router;