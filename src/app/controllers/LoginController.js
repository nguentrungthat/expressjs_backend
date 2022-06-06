const login = require('../../config/db/login');
const USERS = require('../../config/db/users');
const helper = require('../lib/helper');

class LoginController{

    //[POST] /login
    async index(req, res, next){
        const body = req.body;
        console.log(body);
        const data = await login.LOGIN(body.EMAIL, body.PASSWORD_USERS);
        if (data.length == 0)
            res.json('Sai email hoặc password!');
        else{
            res.redirect(`/users/${data[0].ID}`);
        }
    }

}

module.exports = new LoginController;
