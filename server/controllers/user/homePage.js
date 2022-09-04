const { join } = require('path');

const homePage = (req, res, next) => {
    res.sendFile(join(__dirname, '..', '..', '..', 'client', 'public', 'homePage.html'))
}

module.exports = homePage;
