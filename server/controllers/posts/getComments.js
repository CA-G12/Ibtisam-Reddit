const { getCommentsQuery } = require('../../database/queries/posts/index');

const getComments = (req, res, next) => {
    getCommentsQuery()
    .then((result) => console.log(result.rows))
    .catch((err) => console.error(err))
};

module.exports = getComments;