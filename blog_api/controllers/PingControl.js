const axios = require('axios');
const api_url = require('../util/url');

//check connection status
exports.post_ping = (req, res, next) => {

  const PING_PATH = api_url.ping_data_url();

  axios.get(PING_PATH)
    .then((response) => {
        
      const SUCCESS = {success : true};

      res.json(SUCCESS);
    })
    .catch((error) => 
        console.log("error")
    );    
}