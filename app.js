const express = require('express'); 
const body_parser = require('body-parser');
const path = require('path');
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

const app = express();

app.set('view engine','ejs');
app.use(body_parser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'uploads')));
app.use('/update',express.static(path.join(__dirname,'public')));
app.use('/update',express.static(path.join(__dirname,'uploads')));
app.use('/members',express.static(path.join(__dirname,'public')));
app.use('/members',express.static(path.join(__dirname,'uploads')));
app.use('/members/update',express.static(path.join(__dirname,'public')));
app.use('/members/update',express.static(path.join(__dirname,'uploads')));


const create = require('./controllers/create');
const read = require('./controllers/read');
const delete_=require('./controllers/delete');
const update = require('./controllers/update');
const { update_data } = require('./models/update');

app.get('/',(req,res) =>{
    read.read_data(req, res);
}); 

app.post('/create',upload.single('img'),(req, res)=>{
    create.create_data(req, res);
    res.redirect('/');
})

app.post('/delete/:page_id',(req, res)=>{
    delete_.delete_data(req, res)
    res.redirect('/');
})

app.get('/update/:page_id',(req, res)=>{
    read.read_data(req,res);
})

app.post('/update/:page_id',upload.single('img'),(req, res)=>{
    update.update_data(req,res);
    res.redirect('/');
})

app.get('/members',(req, res)=>{
    read.read_members(req, res);
})

app.post('/members/create', upload.single('img'),(req,res)=>{
    create.create_members(req, res);
    res.redirect('/members');
})

app.get('/members/update/:page_id',(req, res)=>{
    read.read_members(req, res);    
})

app.post('/members/update/:page_id', upload.single('img'),(req,res)=>{
    update.udpate_members(req,res);
    res.redirect('/members');
})

app.post('/members/delete/:page_id',(req, res)=>{
    delete_.delete_members(req,res);
    res.redirect('/members');
})

module.exports = app;

