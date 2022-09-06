const connection = require('../../config/connection');

const deletePostQuery = (id, userId)=>{
    const query=` delete from posts where id=$1 and user_id = $2;`

    return connection.query(query, [id, userId]);
}

module.exports = deletePostQuery;
