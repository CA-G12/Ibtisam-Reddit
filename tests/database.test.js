const supertest = require('supertest');
const router = require('../server/app');
const connection = require('../server/database/config/connection');
const dbBuild = require('../server/database/config/build');

beforeAll(() => dbBuild());
afterAll(() => connection.end());
