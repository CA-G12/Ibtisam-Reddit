const connection = require('../../config/connection');

const addCommentQuery = (content, post_id , user_id) => {
    const sql = {
        text: 'insert into comments (content, post_id, user_id) values ($1, $2, $3) returning *',
        values: [content, post_id, user_id],
    }

    return connection.query(sql);
}

module.exports = addCommentQuery;
