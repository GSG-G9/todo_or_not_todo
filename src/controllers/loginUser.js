const {join} = require('path')

const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

const {getHashedPassword} = require('../database/queries/getHashedPassword');
const {getUserId} = require('../database/queries/getUserId');


const Login = (req, res, next) => {
    const{ username, password } = req.body;
    getHashedPassword(username).then(hashedpassword => {
      bcrypt.compare(password, hashedpassword).then(res => {
        if(res){
          getUserId(username).then(userId => {
            JWT.sign({id: userId}, process.env.SECRET_KEY, {expiresIn:3600}, (err, token) => {
              if(err){
                next(errCatcher('action not allowed', 403));
              }
              res.cookie('token', token).redirect(join(__dirname, '..', 'public','main.html'));
            })

          })


        }
      })


    })

}

module.exports = {Login}


