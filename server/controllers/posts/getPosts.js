const { getAllPostQuery } = require('../../database/queries/posts/index');
const customizedServerError = require('../../middleware/customizedServerError');

const getPosts = (req, res, next) => {
    getAllPostQuery()
    .then((result) => res.json(result.rows))
    .catch((err) => next(err));
};

module.exports = getPosts;