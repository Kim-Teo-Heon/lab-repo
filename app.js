const express = require('express'); 
const body_parser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine','ejs');
app.use(body_parser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/update',express.static(path.join(__dirname,'public')));
app.use('/members',express.static(path.join(__dirname,'public')));
app.use('/members/update',express.static(path.join(__dirname,'public')));

app.use('/dksekgns-admin',express.static(path.join(__dirname,'public')));
app.use('/dksekgns-admin/update',express.static(path.join(__dirname,'public')));
app.use('/dksekgns-admin/members/update',express.static(path.join(__dirname,'public')));
app.use('/dksekgns-admin/research/update',express.static(path.join(__dirname,'public')));
app.use('/dksekgns-admin/publications/update',express.static(path.join(__dirname,'public')));

const login = require('./controllers/login');

const members_route = require('./routes/admin-members');
const index_route = require('./routes/index');
const admin_router = require('./routes/admin');
const reserch_router = require('./routes/admin-research');
const publications_router = require('./routes/admin-pulications');

app.use('/',index_route);
app.use('/dksekgns-admin', admin_router);
app.use('/dksekgns-admin/members',members_route);
app.use('/dksekgns-admin/research', reserch_router);
app.use('/dksekgns-admin/publications', publications_router);

app.get('/admin', (req,res)=>{
    res.render('admin');
})

app.post('/admin' ,(req, res)=>{
    login.read_admin(req, res);
})

module.exports = app;

