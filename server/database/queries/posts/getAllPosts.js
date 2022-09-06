const connection = require('../../config/connection');

const getAllPostQuery = () => {
    const sql = `SELECT users.username,
                        users.avatar,
                        posts.id,
                        posts.title,
                        posts.content,
                        posts.post_date, 
                        posts.likes
                from users left join posts 
                on users.id = posts.user_id 
                order by posts.post_date DESC`;

    return connection.query(sql);
}

module.exports = getAllPostQuery;
