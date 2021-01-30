const express = require('express');
const router = express.Router();

const read = require('../controllers/read');

router.get('/',(req,res) =>{
    read.read_data(req, res);
}); 

module.exports = router;