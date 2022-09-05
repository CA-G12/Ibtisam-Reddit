const connection = require('../../config/connection');

const addPostQuery = (content, id) => {
    const sql = {
        'Text': 'Insert into posts (content, user_id) values ($1, $2) returning *',
        'Values': [content, id]
    }

    return connection.query(sql);
}

module.exports = addPostQuery;
