const Joi = require('joi');
const bcrypt = require('bcryptjs');
const { addUser } = require('../database/queries/addData');
const { getUser } = require('../database/queries/getData');
const { errCatcher } = require('../utils/errCatcher');

const addNewUser = (req, res, next) => {
  getUser(req.body).then(({ rows }) => {
    if (rows.length > 0) {
      throw errCatcher('user already registered ', 409);
    }
  })
    .then(() => {
      const signupSchema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).alphanum().required(),
        confirmPassword: Joi.ref('password'),
      });
      const result = signupSchema.validate(req.body);
      if (result.error) {
        throw errCatcher('Validation Error ', 400);
      }
    })
    .then(() => bcrypt.hash(req.body.password, 10))
    .then((hashPass) => {
      console.log('hashed', hashPass);
      return addUser({ ...req.body, password: hashPass });
    })
    .then(({ rows }) => res.status(201).json({ rows, status: 201 }))
    .catch(next);
};
module.exports = { addNewUser };
