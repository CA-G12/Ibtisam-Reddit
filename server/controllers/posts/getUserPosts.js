const { getUserPostQuery } = require('../../database/queries/posts/index');
const jwt = require('jsonwebtoken');

const getUserPost = (req, res, next) => {
    const token = req.cookies.token;

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err){
            res.status(400).json({msg: 'Token invalid'});
        } 
        const id = decoded.id;
        getUserPostQuery(id)
        .then((data) => res.json(data.rows))
        .catch((err) => next(err))
    })
}

module.exports = getUserPost;
