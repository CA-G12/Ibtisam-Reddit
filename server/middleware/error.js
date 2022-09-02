const path = require('path');

const notFound = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..', 'client', 'public', 'pages', '404.html'));
};

const serverError = (err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, '..', '..', 'client', 'public', 'pages', '500.html'));
};

module.exports = {
  notFound,
  serverError,
};
