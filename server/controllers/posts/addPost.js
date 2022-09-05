const { addPostQuery } = require('../../database/queries/posts/index');

const addPost = (req, res, next) => {
    console.log(req.body);
    // addPostQuery();
    // verify token and get the username and id
};

module.exports = addPost;
