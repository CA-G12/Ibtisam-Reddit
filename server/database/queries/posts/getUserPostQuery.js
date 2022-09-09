const connection = require('../../config/connection');

const getUserPostQuery = (id)=> {

    const sql = {
        'text': ` SELECT users.username,
                    users.avatar,
                    posts.content,
                    posts.post_date, 
                    posts.likes
            from users left join posts 
            on users.id = posts.user_id 
            where posts.user_id=$1
            order by posts.post_date DESC; `,
         
        'values': [id]
    }

    return connection.query(sql);
}

module.exports = getUserPostQuery;
