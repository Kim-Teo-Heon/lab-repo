const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, 'uploads/images')
    },
    filename : function(req, file, cb){
        cb(null, file.originalname); 
    }
})

const upload = multer({storage : storage});

const create = require('../controllers/create');
const read = require('../controllers/read');
const delete_=require('../controllers/delete');
const update = require('../controllers/update');

router.get('/',(req, res)=>{
    read.read_members(req, res);
})

router.post('/create', upload.single('img'),(req,res)=>{
    create.create_members(req, res);
    res.redirect('/members');
})

router.get('/update/:page_id',(req, res)=>{
    read.read_members(req, res);    
})

router.post('/update/:page_id', upload.single('img'),(req,res)=>{
    update.udpate_members(req,res);
    res.redirect('/members');
})

router.post('/delete/:page_id',(req, res)=>{
    delete_.delete_members(req,res);
    res.redirect('/members');
})

module.exports = router;