const connection = require('../../config/connection');

const getAllUserInfo = (email) => {
    const sql = {
        'text': 'SELECT email FROM users where email = $1',
        'values': [email]
    }
    return connection.query(sql);
}

module.exports = getAllUserInfo;
