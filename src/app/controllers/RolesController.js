const db = require('../../config/db');

class RolesController{
    //[GET] /roles
    async index(req, res){
        const data = await db.connect('ROLES');
        console.log(data);
        res.json(data);
    }

    //[GET] /roles/:slug
    async show(req, res){
        const data = await db.connect('ROLES');
        console.log(data);
        res.json(data);
    }

}

module.exports = new RolesController;
