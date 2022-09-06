const { addPostQuery } = require('../../database/queries/posts/index');
const jwt = require('jsonwebtoken');

const addPost = (req, res, next) => {
    const token = req.cookies;
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if(err){
        res.status(400).json({msg: 'Token invalid'});
      } 
        const content = req.params.post;
        const user_id = token.userId;
        const title = 'this is new post';
        addPostQuery(content, title, user_id)
        // .then(() => res.status(201).redirect('/homePage'))
        .catch(err=> console.log(err));
      });
    
};

module.exports = addPost;
