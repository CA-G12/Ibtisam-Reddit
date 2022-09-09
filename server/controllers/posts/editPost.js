const {editPostQuery} = require('../../database/queries/posts/index');
const {getPostQuery} = require('../../database/queries/posts/index')
const jwt = require('jsonwebtoken')


const editPost = (req, res, next) => {
    const token = req.cookies.token;

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if(err){
        res.status(400).json({msg: 'You are not allowed to edit this post'});
      }
        const user_id = decoded.id;
        const id = req.body.post_id;
        const content = req.body.content;

        editPostQuery(id, content, user_id)
        .then((result) => res.json(result.rows[0]))
        .catch(err => next(err))
    })
}

module.exports = editPost;
