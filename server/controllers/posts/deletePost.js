const {deletePostQuery} = require('../../database/queries/posts/index');
const jwt = require('jsonwebtoken');

const deletePost = (req, res, next) => {
    const token =  req.cookies.token;

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
        if (err){
            res.status(200).json({msg: 'Invalid Token'});
        } else {
            deletePostQuery(req.params.id, decoded.id)
            .then(() => {
                res.status(200).json({message: 'Post is deleted successfully'})
            })
            .catch((err) => next(err));
            }
    })

};

module.exports = deletePost;
