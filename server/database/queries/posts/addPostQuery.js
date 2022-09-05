const connection = require('../../config/connection');

const addPostQuery = () => {
    console.log('lll')

    const sql = {
        'Text': '',
        'Values': ''
    }

    return connection.query(sql);
}

module.exports = addPostQuery;
