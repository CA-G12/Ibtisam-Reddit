const {editPostQuery} = require('../../database/queries/posts/index');
const {getPostQuery} = require('../../database/queries/posts/index')
const jwt = require('jsonwebtoken')

const getPost = (req, res, next) => {
    const id = req.body.post_id;
    const token = req.cookies;

    jwt.verify(token.token, process.env.SECRET_KEY, (err, decoded) => {
      if(err){
        res.status(400).json({msg: 'Token invalid'});
      }
        const user_id = decoded.id;

        getPostQuery(id, user_id)
        .then((result) => res.json(result.rows))
        .catch(err => next(err))
    })
}

const editPost = (req, res, next) => {
    const token = req.cookies;

    jwt.verify(token.token, process.env.SECRET_KEY, (err, decoded) => {
      if(err){
        res.status(400).json({msg: 'Token invalid'});
      }
        const user_id = decoded.id;
        const id = req.body.post_id;
        const content = req.body.content;

        editPostQuery(id, content, user_id)
        .then((result) => res.json(result.rows))
        .catch(err => next(err))
    })
}

module.exports = {
    getPost,
    editPost
};