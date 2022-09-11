const { addCommentQuery } = require('../../database/queries/posts/index');
const jwt = require('jsonwebtoken');

const addComment = (req, res, next) => {
    const token = req.cookies;
    jwt.verify(token.token, process.env.SECRET_KEY, (err, decoded) => {
      if(err){
        res.status(400).json({msg: 'Token invalid'});
      } 
        const content = req.body.content;
        const user_id = decoded.id;
        const post_id = req.body.postId;

        addCommentQuery(content, post_id , user_id)
        .then(() => {
            res.status(200).json({message: 'Comment is added successfully'})
          })
        .catch((err) => next(err));
      });
    
};

module.exports = addComment;
