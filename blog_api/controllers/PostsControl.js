const axios = require('axios');
const api_url = require('../util/url');

const unique = require('../util/unique');

const VALID_SORT = ['id', 'reads', 'likes', 'popularity'];
const VALID_DIRECTION = ['desc', 'asc'];

//get data using axios
exports.data_get = (req, res, next) => {
    
    //check parameter for tag
    if(req.query.tags == null || req.query.tags == undefined) {    
        res.statusCode = 400;
        res.json({error: "Tag parameter is required"});
        return;
    }

    var sort = req.query.sortBy;
    var direc = req.query.direction;
    var tagList = (req.query.tags).split(',');

    //check parameter for direction
    if(!VALID_DIRECTION.includes(direc)) {
        res.statusCode = 400;
        res.json({error: "direction parameter is invalid"});
        return;
    }

    //check parameter for sortBy
    if(!VALID_SORT.includes(sort)){
        res.statusCode = 400;
        res.json({error: "sortBy parameter is invalid"});
        return;
    }

    var axios_list = []

    tagList.forEach( tag => {
        axios_list.push(api_url.posts_data_url(tag, sort, direc))        
    });

    //concurrent requests
    axios.all(axios_list.map(l => axios.get(l)))
        .then( (response) => {
            
            var data = [];
            response.forEach( r => {                
                var post_data = r.data.posts
                
                var concat_array = data.concat(post_data);

                data = concat_array;                
            })
            
            var unique_data = unique.get_unique(data, direc, sort)
            
            const DATA = {posts : unique_data};

            res.statusCode = 200;
            res.json(DATA);            
            return;
            })
        .catch((error) => 
        console.log("error")
    ); 
}
