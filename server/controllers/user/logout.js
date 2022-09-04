const logout = (req, res, next) => {
    res.clearCookie('token').redirect('/');
}

module.exports = logout;