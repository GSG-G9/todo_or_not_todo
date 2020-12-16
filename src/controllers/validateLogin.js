const Joi = require('joi');
const {errCatcher} = require('../utils/errCatcher')



const validateLogin = (req, res, next) => {
    const schema = joi.object({
        username: Joi.string().alphanum().required(),
        password: Joi.string().min(6).max(30).alphanum().required()
      })
      const {err, value} =schema.validate(req.body);
      if(err){
        next(errCatcher('user not exist', 400))
      }else{
          next();
      }

}
module.exports = {validateLogin}
