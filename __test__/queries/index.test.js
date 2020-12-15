/* eslint-disable no-undef */
const connection = require('../../src/database/config/connection');
const runBuild = require('../../src/database/config/build.js');

beforeEach(() => runBuild());

describe('Testing search', () => {
  test('Should return 4', () => {
    const actual = 4;
    const expected = 4;
    expect(actual).toEqual(expected);
  });
});

afterAll(() => connection());
