const router = require('express').Router();
// eslint-disable-next-line import/no-unresolved
const Joi = require('joi');

router.post('/signup', (req, res) => {
  const signupSchema = Joi.object({
    username: Joi.string().alphanum().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    confirmPassword: Joi.ref('password'),
  });
  const result = signupSchema.validate(req.body);
  if (result.error === undefined) {
    res.json({ message: 'success validate ' });
  } else {
    res.status(400).json({ message: 'Validation error' });
  }
});
