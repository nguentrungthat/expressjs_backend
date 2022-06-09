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


    //[POST] /works/id
    async id(req, res){
        const body = req.body;
        const data = await WORKS.GET_ID(body.ID);
        res.json(data);
    }

    //[POST] /works/create
    async create(req, res){
        const body = req.body;
        const works = Model.workModel(req.body);
        await WORKS.CREATE_WORK(works);
        if(body.WORK_RECEIVES){
            const work_receives = body.WORK_RECEIVES;
            const work_id = await WORKS.LAST_WORK();
            for (const receives of work_receives){
                const receive = Model.receivesModel(receives);
                receive.WORK_ID = work_id.ID;
                console.log(receive);
                await WORKS.CREATE_WORK_RECEIVE(receive);
            }
        }
        //console.log(body);
        res.json(body);
    }

    //[POST] /works/work_id
    async work_id(req, res){
        if(req.body.WORK_ID){
            const data = await WORKS.GET(req.body.WORK_ID); 
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
    }

}

module.exports = new WorksController;
