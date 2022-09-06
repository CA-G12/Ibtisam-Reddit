const {deletePostQuery} = require('../../database/queries/posts/index');
const jwt = require('jsonwebtoken');

const deletePost = (req, res, next) => {
    const token =  req.cookies.token;

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
        if (err){
            console.log(err)
        } else {
            deletePostQuery(req.params.id, decoded.id)
            .then(() => res.redirect('/homePage'))
            .catch((err) => res.status(500).json({ msg: `server error${err}` }));
        }
    })

};

module.exports = deletePost;
