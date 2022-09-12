const connection = require('../../config/connection');

const deleteCommentQuery = (id, userId)=>{
    const query=` delete from comments where id=$1 and user_id = $2;`

    return connection.query(query, [id, userId]);
}

module.exports = deleteCommentQuery;
