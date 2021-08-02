const data_source = `https://api.hatchways.io/assessment/blog/posts/?tag=`;

exports.ping_data_url = () => {
    return `https://api.hatchways.io/assessment/blog/posts/?tag=tech`;
}

exports.posts_data_url = function(tag, sort, direc) {
    return data_source+tag+"&sortBy="+sort+"&direction="+direc;
}