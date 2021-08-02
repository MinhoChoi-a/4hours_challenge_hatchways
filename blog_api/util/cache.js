var cache = require('memory-cache')

var mcache = new cache.Cache();

//middleware to manage memory cache on server
exports.cache = (duration) => {
    return (req, res, next) => {
        let key = '__express__'+ req.originalUrl || req.url
        let cachedBody = mcache.get(key)

        if(cachedBody) {
            res.statusCode = 200;
            //return cached data
            res.send(cachedBody)
            return
        }
        else {
            res.sendResponse = res.send
            res.send = (body) => {
                mcache.put(key, body, duration * 1000);
                //pass to the PostsContorl
                res.sendResponse(body)
            }
            next()
        }
    }
}