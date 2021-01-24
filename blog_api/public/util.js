const data_source = `https://api.hatchways.io/assessment/blog/posts/?tag=`;


exports.ping_data = () => {
    return `https://api.hatchways.io/assessment/blog/posts/?tag=tech`;
}

exports.posts_data = function(tag, sort, direc) {

    return data_source+tag+"&sortBy="+sort+"&direction="+direc;

}