const connection = require('../../config/connection');

const editPostQuery = (post_id, content, user_id) => {
    const sql = {
        'text': `update posts set content =$2 where id =$1 and user_id =$3 returning posts.content, posts.id`,
        'values': [post_id, content, user_id]
    }

    return connection.query(sql);
}

module.exports = editPostQuery;
