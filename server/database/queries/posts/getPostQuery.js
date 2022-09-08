const connection = require('../../config/connection');

const getPostQuery = (id, user_id) => {
    const sql = {
        'text': `SELECT posts.content from posts WHERE id=$1 and user_id=$2`,
        'values': [id, user_id]
    }
    return connection.query(sql);
}

module.exports = getPostQuery;
