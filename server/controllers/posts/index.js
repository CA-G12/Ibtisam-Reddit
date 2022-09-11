const getPosts = require('./getPosts');
const addPost = require('./addPost');
const deletePost = require('./deletePost');
const getComments = require('./getComments');
const editPost = require('./editPost');
const getUserPost = require('./getUserPosts');
const addComment = require('./addComment');

module.exports = {
    getPosts,
    addPost,
    deletePost,
    editPost,
    getComments,
    getUserPost,
    addComment
};
