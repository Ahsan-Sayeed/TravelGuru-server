const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema({
    data: String
})
const Table = mongoose.model('Table',schema);

router.get('/',(req,res)=>{
    res.send('hello world')
})

router.post('/',async(req,res)=>{
    const result = await Table.insertMany([{
        data:'hello there'
    }])
    res.status(200).send(result);
    console.log(result);
})

module.exports = router;
