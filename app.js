const express = require('express'); 
const body_parser = require('body-parser');
const path = require('path');

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

app.use('/dksekgns-admin',express.static(path.join(__dirname,'public')));
app.use('/dksekgns-admin',express.static(path.join(__dirname,'uploads')));
app.use('/dksekgns-admin/update',express.static(path.join(__dirname,'public')));
app.use('/dksekgns-admin/update',express.static(path.join(__dirname,'uploads')));


const members_route = require('./routes/members');
const index_route = require('./routes/index');
const admin_router = require('./routes/admin');

app.use('/',index_route);
app.use('/members',members_route);

app.get('/admin', (req,res)=>{
    res.render('admin');
})

const login = require('./controllers/login');
// const read = require('./controllers/read');
// const create = require('./controllers/create');
// const delete_ = require('./controllers/delete');
// const update = require('./controllers/update');

// const multer = require('multer');
// const multer_s3 = require('multer-s3');
// const aws = require('aws-sdk');
// aws.config.loadFromPath(__dirname + '/config/s3.json');

// s3 = new aws.S3();
// const upload = multer({
//     storage: multer_s3({
//         s3: s3,
//         bucket: 'kongju-ahnlab',
//         acl: 'public-read',
//         key: function(req, file, cb){
//             cb(null, file.originalname ); // 이름 설정
//         }
//     })
// })


app.post('/admin' ,(req, res)=>{
    login.read_admin(req, res);
})

// app.get('/dksekgns-admin',upload.single('img'), (req, res)=>{
//     read.read_admin_data(req,res);
// })

// app.post('/admin/create',upload.single('img'),(req, res)=>{
//     create.create_data(req, res);
//     res.redirect('/dksekgns-admin');
//     console.log('file : '+ req.file.location);
// })

// app.post('/admin/delete/:page_id',(req, res)=>{
//     delete_.delete_data(req, res);
    
//     s3.deleteObject({
//         Bucket : 'kongju-ahnlab',
//         Key: req.body.filename
//     }, function(err, data){});

//     res.redirect('/dksekgns-admin');
// })

// app.get('/dksekgns-admin/update/:page_id',(req, res)=>{
//     read.read_admin_data(req,res);
// })

// app.post('/admin/update/:page_id', upload.single('img'),(req, res)=>{
//     update.update_data(req,res);

//     s3.deleteObject({
//         Bucket : 'kongju-ahnlab',
//         Key: req.body.filename
//     }, function(err, data){});

//     res.redirect('/dksekgns-admin');
// })

app.use('/dksekgns-admin', admin_router);

// app.get('/dksekgns-admin/members',upload.single('img'), (req, res)=>{
//     read.read_admin_members(req,res);
// })


// app.get('/',(req,res) =>{
//     read.read_data(req, res);
// }); 

// app.post('/create',upload.single('img'),(req, res)=>{
//     create.create_data(req, res);
//     res.redirect('/');
// })

// app.post('/delete/:page_id',(req, res)=>{
//     delete_.delete_data(req, res)
//     res.redirect('/');
// })

// app.get('/update/:page_id',(req, res)=>{
//     read.read_data(req,res);
// })

// app.post('/update/:page_id',upload.single('img'),(req, res)=>{
//     update.update_data(req,res);
//     res.redirect('/');
// })

// app.get('/members',(req, res)=>{
//     read.read_members(req, res);
// })

// app.post('/members/create', upload.single('img'),(req,res)=>{
//     create.create_members(req, res);
//     res.redirect('/members');
// })

// app.get('/members/update/:page_id',(req, res)=>{
//     read.read_members(req, res);    
// })

// app.post('/members/update/:page_id', upload.single('img'),(req,res)=>{
//     update.udpate_members(req,res);
//     res.redirect('/members');
// })

// app.post('/members/delete/:page_id',(req, res)=>{
//     delete_.delete_members(req,res);
//     res.redirect('/members');
// })

module.exports = app;

