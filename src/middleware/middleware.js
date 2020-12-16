const jwt = require('jsonwebtoken');
const { errCatcher } = require('../utils/errCatcher');

const authenticate = (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.SECRET_KEY, (err, encoded) => {
    if (err) {
      return next(errCatcher('Unauthorized', 401));
    }
    req.id = encoded.id;
    return next();
  });
};

module.exports = {
  authenticate,
};
