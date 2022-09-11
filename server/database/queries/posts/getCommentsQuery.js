const connection = require('../../config/connection');

const getCommentsQuery = () => {
    const sql = ` SELECT comments.*,
                        users.username,
                        users.avatar 
                        from comments join users 
                        on comments.user_id = users.id; `

    return connection.query(sql);
}

module.exports = getCommentsQuery;
