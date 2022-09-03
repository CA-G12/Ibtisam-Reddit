const { Pool } = require('pg');
require('dotenv').config();

const { NODE_ENV, DATABASE_URL, DB_URL, DB_TEST } = process.env;

let DatabaseURL = '';
let ssl = false;

switch( NODE_ENV ) {
    case 'production':
        DatabaseURL = DATABASE_URL;
        ssl = { rejectUnauthorized: false };
        break;
    case 'development':
        DatabaseURL = DB_URL;
        break;
    case 'test':
        DatabaseURL = DB_TEST;
        break;
    default:
        throw new Error('Invalid DATABASE URL')
}

const connection = new Pool({
    connectionString: DatabaseURL,
    ssl
});

module.exports = connection;
