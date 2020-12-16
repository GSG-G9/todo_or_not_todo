/* eslint-disable no-undef */
const connection = require('../../src/database/config/connection');
const { runBuild } = require('../../src/database/config/build.js');

beforeEach(() => runBuild());

afterAll(() => connection.end());
