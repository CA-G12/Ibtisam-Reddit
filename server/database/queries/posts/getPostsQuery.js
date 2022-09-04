const connection = require('../../config/connection');

const getPostsQuery = (user_id) =>{
    const sql = {
        'text': 'SELECT * FROM posts where user_id = $1',
        'values': [user_id]
    };
    return connection.query(sql);
};

module.exports = getPostsQuery;
