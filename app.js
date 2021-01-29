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


const members_route = require('./routes/members');
const index_route = require('./routes/index');

app.use('/',index_route);
app.use('/members',members_route);

app.get('/admin', (req,res)=>{
    res.render('admin');
})

const login = require('./controllers/login');
const read = require('./controllers/read');

app.post('/admin', (req, res)=>{
    login.read_admin(req, res);
})



app.get('/dksekgns-admin', (req, res)=>{
    read.read_admin_data(req,res);
})

app.get('/dksekgns-admin/members', (req, res)=>{
    read.read_admin_members(req,res);
})
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

