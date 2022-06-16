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
        }
        res.json(logs);
    }

    //[POST] /logs/create
    async create(req, res){
        const logs = Model.logModel(req.body);
        for(let log of logs){
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
        res.json(logs);
    }

    //[POST] /logs/update
    async update(req, res){
        const log = Model.logModel(req.body);
        await LOGS.UPDATE_LOG(log);
        const work_receive = await LOGS.GET_TIME(log.WORK_RECEIVE_ID);
        let total_time = work_receive.TOTAL_TIME + log.TIME_WORK_LOGS;
        let total_time_check = work_receive.TOTAL_TIME_CHECK + log.TIME_CHECK;
        let body = {
            ID: log.WORK_RECEIVE_ID,
            TOTALTIME: total_time,
            TOTAL_TIME_CHECK: total_time_check
        }
        await LOGS.UPDATE_TIME(body);
        res.json(log);
    }

}

module.exports = new LogsController;
