const WORKS = require('../../config/db/works');
const helper = require('../lib/helper');
let Model = require('../../config/model/works');

class WorksController{
    //[GET] /works
    async index(req, res){
        const data = await WORKS.GET(); 
        let objWorks = Model.get_workModel(data);
        for (const works of objWorks){
            const work_receives = await WORKS.GET_ID(works.ID);
            let str = '';
            let time = 0;
            work_receives.forEach(elm => {
                str = str + elm.TEN_NGUOI_NHAN + ', ';
                time = time + elm.TOTAL_TIME;
            });
            works.TEN_NGUOI_NHAN = str.slice(0,str.length - 2);
            works.TOTAL_TIME = time;
            //format TG_TAO
            let date = works.TG_TAO.toString();
            works.TG_TAO = helper.formatDate(date);
            //format TG_HET_HAN
            date = works.TG_HET_HAN.toString();
            works.TG_HET_HAN = helper.formatDate(date);
        }
        res.json(objWorks);
    }

    //[POST] /works/ID
    async show(req, res){
        const body = req.body;
        const data = await WORKS.GET_ID(body.ID);
        res.json(data);
    }

    //[POST] /works/create
    async create(req, res){
        const body = req.body;
        console.log(body);
        await WORKS.CREATE_WORK(body);
        res.json("Successfully!");
    }

}

module.exports = new WorksController;
