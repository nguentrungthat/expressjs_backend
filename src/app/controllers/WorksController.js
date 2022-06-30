const WORKS = require('../../config/db/works');
const helper = require('../lib/helper');
let Model = require('../../config/model/model');

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
        try{
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
                    //console.log(receive);
                    await WORKS.CREATE_WORK_RECEIVE(receive);
                }
            }
        }
        catch(err){
            res.sendStatus(400);
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


    //[POST] /works/project_by_userid
    async project_by_userid(req, res){
        const body = req.body;
        const data = await WORKS.PROJECT_BY_USERID(body.ID);
        res.json(data);
    }

    //[POST] /works/work_by_projectid
    async work_by_projectid(req, res){
        const data = await WORKS.WORK_BY_PROJECTID(req.body);
        res.json(data);
    }

    //[POST] /works/delete_work
    async delete_work(req, res){
        try{
            await LOGS.DELETE_WORK(req.body.ID);
            res.json(200);
        }
        catch{
            res.sendStatus(400);
        }
    }

    //[POST] /works/delete_work_receive
    async delete_work_receive(req, res){
        try{
            await LOGS.DELETE_WORK_RECEIVE(req.body.ID);
            res.json(200);
        }
        catch{
            res.sendStatus(400);
        }
    }
}

module.exports = new WorksController;
