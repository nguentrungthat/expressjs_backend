const WORKS = require('../../config/db/works');
const helper = require('../lib/helper');

class WorksController{
    //[GET] /works
    async index(req, res){
        const data = await WORKS.GET();
        data.forEach(data => {
            //format TG_TAO
            let date = data.TG_TAO.toString();
            data.TG_TAO = helper.formatDate(date);
            //format TG_HET_HAN
            date = data.TG_HET_HAN.toString();
            data.TG_HET_HAN = helper.formatDate(date);
        })
        res.json(data);
    }

    //[POST] /works/ID
    async show(req, res){
        const body = req.body;
        const data = await WORKS.GET_ID(body.ID);
        res.json(data);
    }

    //[POST] /works/create
    create(req, res){
        const body = req.body;
        res.json(body);
    }

}

module.exports = new WorksController;
