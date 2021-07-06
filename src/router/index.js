const express = require('express')
let router = express.Router()
let index = require('./controller/index')
let file = require('./controller/file')
// router.get('/', index);
router.post('/upload/file', file.upload)
// router.get('/upload/done', file.merge)
// router.get('/upload/verify', file.verify)
module.exports = router