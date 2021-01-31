const express = require('express');
const router = express.Router();

const read = require('../controllers/read');

router.get('/',(req,res) =>{
    read.read_data(req, res);
}); 

router.get('/members',(req, res)=>{
    read.read_members(req, res);
})

router.get('/research',(req, res)=>{
    read.read_research(req, res);
})

router.get('/publications',(req, res)=>{
    read.read_publications(req, res);
})


module.exports = router;