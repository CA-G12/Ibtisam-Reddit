const { join } = require('path');

const userProfile = (req, res, next) => {
    res.status(200).sendFile(join(__dirname, '..', '..', '..', 'client', 'public', 'userProfile.html'));
}

module.exports = userProfile;
