const connection = require('../../config/connection');

const getCommentsQuery = () => {
    // const sql = `SELECT users.username,
    //                     users.avatar,
    //                     posts.id,
    //                     comments.id,
    //                     comments.content as comment,
    //                     comments.post_id,
    //                     comments.user_id
    //             from users left join posts 
    //             on users.id = posts.user_id 
    //             inner join comments on comments.post_id = posts.id
    //             order by posts.post_date DESC`;

    const sql = ` SELECT comments.*,
                        users.username,
                        users.avatar 
                        from comments join users 
                        on comments.user_id = users.id; `

    return connection.query(sql);
}

module.exports = getCommentsQuery;
