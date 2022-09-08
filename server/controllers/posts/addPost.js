const { addPostQuery } = require('../../database/queries/posts/index');
const jwt = require('jsonwebtoken');

const addPost = (req, res, next) => {
    const token = req.cookies;
    jwt.verify(token.token, process.env.SECRET_KEY, (err, decoded) => {
      if(err){
        res.status(400).json({msg: 'Token invalid'});
      } 
        const content = req.params.post;
        const user_id = decoded.id;
        const title = 'this is new post';

        addPostQuery(content, title, user_id)
        .then(() => {
            res.status(200).json({message: 'Post is added successfully'})
          })
        .catch((err) => next(err));
      });
    
};

module.exports = addPost;
