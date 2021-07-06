const express = require('express');
const app = express();
const router = require('./router/index');
const bodyParser = require('body-parser');

//设置静态资源目录
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);
app.listen(3300);