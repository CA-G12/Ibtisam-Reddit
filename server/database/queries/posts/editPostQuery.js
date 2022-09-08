const connection = require('../../config/connection');

const editPostQuery = (post_id, content) => {
    const sql = {
        'text': `update posts set content =$2 where id =$1 returning posts.content`,
        'values': [post_id, content]
    }

    return connection.query(sql);
}

module.exports = editPostQuery;
