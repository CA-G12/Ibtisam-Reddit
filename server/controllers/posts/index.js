const getPosts = require('./getPosts');
const addPost = require('./addPost');
const deletePost = require('./deletePost');
const getComments = require('./getComments');
const {editPost, getPost} = require('./editPost');

module.exports = {
    getPosts,
    addPost,
    deletePost,
    editPost,
    getPost,
    getComments
};
