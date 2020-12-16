
const{ getFromUsers} = require('../database/queries/getFromUsers');
const {errCatcher} = require('../utils/errCatcher')

const checkUserName = (req, res, next) => {
    const {username} = req.body;
    getFromUsers(username).then(result => {
        if(result.rows.length == 0 ){
            next(errCatcher('user not exist', 400))
        }else{
            next();
        }
     
    }).catch(next)
    

}
module.exports = {checkUserName}

