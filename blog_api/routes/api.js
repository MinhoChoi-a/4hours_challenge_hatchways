var express = require('express');
var router = express.Router();

const PING_DATA = require('../controllers/PingControl');
const POSTS_DATA = require('../controllers/PostsControl');

const CACHE = require('../util/cache')

//root url '/api'
router.get('/', function(req, res, next) {
  res.send('Coding Test - BACKEND API');
});

//route for 'ping'
router.get('/ping', PING_DATA.post_ping);

//route for 'get data'
router.get('/posts', CACHE.cache(10), POSTS_DATA.data_get);

module.exports = router;
