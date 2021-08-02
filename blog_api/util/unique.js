exports.get_unique = (data, direc, sort) => {
    
    //get unique list using post id
    var unique_data = [...new Map(data.map(post =>
        [post.id, post])).values()];
    
    //ascending order
    if(direc === 'asc') {
        unique_data.sort((a,b) => a[sort] - b[sort])
    }

    //descending order
    else {
        unique_data.sort((a,b) => b[sort]- a[sort])                
    }

    return unique_data;
}
