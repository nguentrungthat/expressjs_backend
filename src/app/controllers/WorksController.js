const WORKS = require('../../config/db/works');
const helper = require('../lib/helper');
let Model = require('../../config/model/model');
const crypto = require('crypto');

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
                str = str + elm.NAME_RECEIVERS + ', ';
                time = time + elm.TOTAL_TIME;
            });
            works.NAME_RECEIVERS = str.slice(0,str.length - 2);
            works.TOTAL_TIME = time;
            //format TG_TAO
            let date = works.BEGIN_DATE_AT.toString();
            works.BEGIN_DATE_AT = helper.formatDate(date);
            //format TG_HET_HAN
            date = works.END_DATE_AT.toString();
            works.END_DATE_AT = helper.formatDate(date);
        }
        res.json(objWorks);
    }

    //[POST] /works/id
    async id(req, res){
        const body = req.body;
        const data = await WORKS.GET_ID(body.ID);
        res.json(data);
    }

    //[POST] /works/work_receive_id
    async work_receive_id(req, res){
        const body = req.body;
        const data = await WORKS.GET_WORK_RECEIVE_ID(body.ID);
        res.json(data);
    }

    //[POST] /works/create
    async create(req, res){
        const body = req.body;
        const works = Model.workModel(req.body);
        //console.log(works);
        await WORKS.CREATE_WORK(works);
        if(body.WORK_RECEIVES){
            const work_receives = body.WORK_RECEIVES;
            const work_id = await WORKS.LAST_WORK();
            for (const receives of work_receives){
                const receive = Model.receivesModel(receives);
                receive.WORK_ID = work_id.ID;
                receive.USER_ID = receives.ID;
                console.log(receive);
                await WORKS.CREATE_WORK_RECEIVE(receive);
            }
        }
        //console.log(body);
        res.sendStatus(200);
        return;
    }

    //[POST] /works/work_id
    async work_id(req, res){
        if(req.body.WORK_ID){
            const data = await WORKS.GET('work_id', req.body.WORK_ID); 
            let objWorks = Model.get_workModel(data);
            for (const works of objWorks){
            const work_receives = await WORKS.GET_ID(works.ID);
            let str = '';
            let time = 0;
            work_receives.forEach(elm => {
                str = str + elm.NAME_RECEIVERS + ', ';
                time = time + elm.TOTAL_TIME;
            });
            works.NAME_RECEIVERS = str.slice(0,str.length - 2);
            works.TOTAL_TIME = time;
            //format TG_TAO
            let date = works.BEGIN_DATE_AT.toString();
            works.TGBEGIN_DATE_AT_TAO = helper.formatDate(date);
            //format TG_HET_HAN
            date = works.END_DATE_AT.toString();
            works.END_DATE_AT = helper.formatDate(date);
            }
            res.json(objWorks);
        }
    }

    //[POST] /works/update_work_receive
    async update_work_receive(req, res){
        const body = Model.receivesModel(req.body);
        await WORKS.UPDATE_WORK_RECEIVE(body);
        res.sendStatus(200);
        return;
    }

    //[POST] /works/filter_creater
    async filter_creater(req, res){
        const data = await WORKS.FILTER_WORK_CREATER(req.body.ID); 
        let objWorks = Model.get_workModel(data);
        for (const works of objWorks){
            const work_receives = await WORKS.GET_ID(works.ID);
            let str = '';
            let time = 0;
            work_receives.forEach(elm => {
                str = str + elm.NAME_RECEIVERS + ', ';
                time = time + elm.TOTAL_TIME;
            });
            works.NAME_RECEIVERS = str.slice(0,str.length - 2);
            works.TOTAL_TIME = time;
            //format TG_TAO
            let date = works.BEGIN_DATE_AT.toString();
            works.BEGIN_DATE_AT = helper.formatDate(date);
            //format TG_HET_HAN
            date = works.END_DATE_AT.toString();
            works.END_DATE_AT = helper.formatDate(date);
        }
        res.json(objWorks);
    }

    //[POST] /works/filter_receiver
    async filter_receiver(req, res){
        const receives = await WORKS.FILTER_WORK_RECEIVER(req.body.ID); 
        let objWorks = [];
        for (const receive of receives){
            const work = await WORKS.GET('id' ,receive.WORK_ID);
            const objWork = Model.get_workModel(work);
            //console.log(objWork);
            const work_receives = await WORKS.GET_ID(receive.WORK_ID);
            let str = '';
            let time = 0;
            work_receives.forEach(elm => {
                str = str + elm.NAME_RECEIVERS + ', ';
                time = time + elm.TOTAL_TIME;
            });
            objWork[0].NAME_RECEIVERS = str.slice(0,str.length - 2);
            objWork[0].TOTAL_TIME = time;
            //format TG_TAO
            let date = objWork[0].BEGIN_DATE_AT.toString();
            objWork[0].BEGIN_DATE_AT = helper.formatDate(date);
            //format TG_HET_HAN
            date = objWork[0].END_DATE_AT.toString();
            objWork[0].END_DATE_AT = helper.formatDate(date);
            objWorks.push(objWork[0]);
        }
        res.json(objWorks);
    }

    //[POST] /works/update_work_status
    async update_work_status(req, res){
        const ID = req.body.ID;
        const status = await WORKS.CHECK_STATUS(ID);
        if(status.length == 0){
            res.sendStatus(404);
            return;
        }
        for(const elm of status){
            if(elm.STATUS == 1){
                res.sendStatus(400);
                return;
            }
        }
        await WORKS.UPDATE_WORK_STATUS(req.body);
        res.sendStatus(200);
        return;
    }

    //[POST] /works/update_receive_status
    async update_receive_status(req, res){
        await WORKS.UPDATE_WORK_RECEIVE_STATUS(req.body);
        res.sendStatus(200);
        return;
    }
}

module.exports = new WorksController;
