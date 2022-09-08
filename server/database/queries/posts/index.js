const getAllPostQuery = require('./getAllPosts');
const getPostQuery = require('./getPostQuery');
const addPostQuery = require('./addPostQuery');
const deletePostQuery = require('./deletePostQuery');
const editPostQuery = require('./editPostQuery');
const getCommentsQuery = require('./getCommentsQuery');

module.exports = {
    getAllPostQuery,
    getPostQuery,
    addPostQuery,
    deletePostQuery,
    editPostQuery,
    getCommentsQuery
}
