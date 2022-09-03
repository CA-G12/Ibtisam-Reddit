const connection = require('../../config/connection');

const addUserQuery = ({username, email, password}) => {
    const sql = {
        'text': 'insert into users (username, email, password) values ($1, $2, $3) RETURNING *',
        'values': [username, email, password]
    }
    return connection.query(sql);
}

module.exports = addUserQuery;
