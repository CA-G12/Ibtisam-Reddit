const { addPostQuery } = require('../../database/queries/posts/index');
const jwt = require('jsonwebtoken');

const addPost = (req, res, next) => {
    const token = req.cookies;
    console.log(token);
    console.log(process.env.SECRET_KEY)
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        const content = req.body;
        addPostQuery(content, decoded.id)
        .then(({rows})=>res.json(rows))
      });
    
};

module.exports = addPost;
