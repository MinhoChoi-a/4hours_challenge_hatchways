var express = require('express');
var router = express.Router();
var axios = require('axios');

var api_util = require('../public/util');

/* GET home page. */
router.get('/ping', function(req, res, next) {
  
  var ping_path = api_util.ping_data();

  axios.get(ping_path)
    .then((response) => {
        
      var success = {success : true};
      
      res.json(success);

    })
    .catch((error) => 
        console.log("error")
    );
    
});


router.get('/posts', function(req, res, next) {

  /**
  var sort = req.params.
  var direc = req.params. 
  var tag = req.params.
  

  if(req.params.tag == null) {
    
    res.statusCode = 400;
    res.json({error: "Tag parameter is required"});

  }

  else { */

  var tag = "tech";
  var sort = "popularity";
  var direc = "desc";

  var axios_path = api_util.posts_data(tag, sort, direc);
  
  axios.get(axios_path)
    .then((response) => {
      res.json(response.data.posts);
    })
    .catch((error) => 
    console.log("error")
    );

  }

//}
);



module.exports = router;
