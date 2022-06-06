const USERS = require('../../config/db/users');
const helper = require('../lib/helper');

class UsersController{
    //[GET] /users
    async index(req, res){
        const data = await USERS.GET();
        
        data.forEach(data => {
            //format CREATED_AT
            let date = data.CREATED_AT.toString();
            data.CREATED_AT = helper.formatDate(date);
            //format UPDATED_AT
            date = data.UPDATED_AT.toString();
            data.UPDATED_AT = helper.formatDate(date);
        })
        res.json(data);
    }

    //[GET] /users/:slug
    async show(req, res){
        const id = req.params.slug;
        const data = await USERS.GET_ID(id);
        //format CREATED_AT
        let date = data.CREATED_AT.toString();
        data.CREATED_AT = helper.formatDate(date);
        //format UPDATED_AT
        date = data.UPDATED_AT.toString();
        data.UPDATED_AT = helper.formatDate(date);
        res.json(data);
    }

    //[POST] /users/create
    create(req, res){
        const body = req.body;
        res.json(body);
    }

}

module.exports = new UsersController;
