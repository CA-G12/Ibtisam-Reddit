const connection = require('../../config/connection');

const addPostQuery = (content,title, user_id) => {
    const sql = {
        text: 'insert into posts (content, title, user_id) values ($1, $2, $3)',
        values: [content,title, user_id],
    }

    return connection.query(sql);
}

module.exports = addPostQuery;
