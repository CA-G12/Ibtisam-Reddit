const { getAllPostQuery } = require('../../database/queries/posts/index');

const getPosts = (req, res, next) => {
    getAllPostQuery()
    .then((result) => res.json(result.rows))
    .catch((err) => console.error(err))
};

module.exports = getPosts;