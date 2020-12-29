const express = require('express');
const router = express.Router();

const {Post} = require('../models/Post');

router.get('/', (req, res) => {
    Post.find((err, docs) => {
        console.log(docs);
    })
})

module.exports = router;
