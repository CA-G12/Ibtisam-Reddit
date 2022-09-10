const { getCommentsQuery } = require('../../database/queries/posts/index');

const getComments = (req, res, next) => {
    getCommentsQuery()
    .then((result) => res.json(result.rows))
    .catch((err) => console.error(err))
};

module.exports = getComments;