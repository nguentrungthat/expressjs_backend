const LOGS = require('../../config/db/logs');
const helper = require('../lib/helper');
let Model = require('../../config/model/model');


class LogsController{

    //[GET] /logs
    async index(req, res){
        const data = await LOGS.GET();
        let logs = Model.logModel(data);
        for (const log of logs){
            //format BEGIN_DATE_AT
            let date = log.BEGIN_DATE_AT.toString();
            log.BEGIN_DATE_AT = helper.formatDate(date);
            //format END_DATE_AT
            date = log.END_DATE_AT.toString();
            log.END_DATE_AT = helper.formatDate(date);
            //format END_DATE_AT
            date = log.CREATED_AT.toString();
            log.CREATED_AT = helper.formatDate(date);
            //format END_DATE_AT
            date = log.UPDATED_AT.toString();
            log.UPDATED_AT = helper.formatDate(date);
        }
        res.json(logs);
    }

    //[POST] /logs/receive_id
    async receive_id(req, res){
        const data = await LOGS.LOGS_BY_RECEIVEID(req.body.ID);
        //let logs = Model.logModel(data);
        for (const log of data){
            //format BEGIN_DATE_AT
            let date = log.BEGIN_DATE_AT.toString();
            log.BEGIN_DATE_AT = helper.formatDate(date);
            //format END_DATE_AT
            date = log.END_DATE_AT.toString();
            log.END_DATE_AT = helper.formatDate(date);
            //format CREATED_AT
            date = log.CREATED_AT.toString();
            log.CREATED_AT = helper.formatDate(date);
            //format UPDATED_AT
            date = log.UPDATED_AT.toString();
            log.UPDATED_AT = helper.formatDate(date);
        }
        res.json(data);
    }

    //[POST] /logs/create
    async create(req, res){
        const logs = Model.logModel(req.body);
        //console.log(logs);
        for(let log of logs){
            if(log.ID)
               {
                   await LOGS.UPDATE_LOG(log);
                    const logs_by_receiveID = await LOGS.LOGS_BY_RECEIVEID(log.WORK_RECEIVE_ID);
                    let body = {
                        ID: log.WORK_RECEIVE_ID,
                        TOTAL_TIME: 0,
                        TOTAL_TIME_CHECK: 0
                    }
                    let total_time = 0;
                    let total_time_check = 0; 
                    for(const elm of logs_by_receiveID){
                        total_time += elm.TIME_WORK_LOGS;
                        total_time_check += elm.TIME_CHECK;
                    }        
                    body.TOTAL_TIME = total_time;
                    body.TOTAL_TIME_CHECK = total_time_check;
                    await LOGS.UPDATE_TIME(body);
               }
            else{
                await LOGS.CREATE_LOG(log);
                const work_receive = await LOGS.GET_TIME(log.WORK_RECEIVE_ID);
                let total_time = work_receive.TOTAL_TIME + log.TIME_WORK_LOGS;
                let total_time_check = work_receive.TOTAL_TIME_CHECK + log.TIME_CHECK;
                let body = {
                    ID: log.WORK_RECEIVE_ID,
                    TOTAL_TIME: total_time,
                    TOTAL_TIME_CHECK: total_time_check
                }
                await LOGS.UPDATE_TIME(body);
            }
        }
        res.sendStatus(200);
    }

    //[POST] /logs/update
    async update(req, res){
        const log = Model.logModel(req.body);
        await LOGS.UPDATE_LOG(log);
        const logs_by_receiveID = await LOGS.LOGS_BY_RECEIVEID(log.WORK_RECEIVE_ID);
        let body = {
            ID: log.WORK_RECEIVE_ID,
            TOTAL_TIME: 0,
            TOTAL_TIME_CHECK: 0
        }
        let total_time = 0;
        let total_time_check = 0; 
        for(const elm of logs_by_receiveID){
            total_time += elm.TIME_WORK_LOGS;
            total_time_check += elm.TIME_CHECK;
        }        
        body.TOTAL_TIME = total_time;
        body.TOTAL_TIME_CHECK = total_time_check;
        await LOGS.UPDATE_TIME(body);
        console.log(log)
        res.json(body);
    }

    //[POST] /logs/receives_by_userID
    async receives_by_userID(req, res){
        const receivers = await LOGS.RECEIVERS_BY_USERID(req.body.ID);
        res.json(receivers);
    }

    //[POST] /logs/user_id
    async user_id(req, res){
        const data = await LOGS.LOGS_BY_USERID(req.body.ID);
        //console.log(data);
        //let logs = Model.logModel(data);
        for (const log of data){
            //format BEGIN_DATE_AT
            let date = log.BEGIN_DATE_AT.toString();
            log.BEGIN_DATE_AT = helper.formatDate(date);
            //format END_DATE_AT
            date = log.END_DATE_AT.toString();
            log.END_DATE_AT = helper.formatDate(date);
            //format CREATED_AT
            date = log.CREATED_AT.toString();
            log.CREATED_AT = helper.formatDate(date);
            //format UPDATED_AT
            date = log.UPDATED_AT.toString();
            log.UPDATED_AT = helper.formatDate(date);
        }
        res.json(data);
    }

}

module.exports = new LogsController;
