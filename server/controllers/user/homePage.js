const { join } = require('path');

const homePage = (req, res, next) => {
    res.status(200).sendFile(join(__dirname, '..', '..', '..', 'client', 'public', 'homePage.html'))
}

module.exports = homePage;
