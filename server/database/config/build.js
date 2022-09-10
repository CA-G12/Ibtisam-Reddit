const path = require('path');
const fs = require('fs');
const connection = require('./connection');

const dbBuild = () => {
    const dataBase = fs.readFileSync(path.join(__dirname, '..', 'migration', 'build.sql')).toString();
    return connection.query(dataBase);
}

module.exports = dbBuild;