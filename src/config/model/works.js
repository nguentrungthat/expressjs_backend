const helper = require('../../app/lib/helper');

function get_workModel(obj){
    let works =[];
    if(obj){
        obj.forEach(element => {
            let work = {
                ID: element.ID,
                TEN_CV: element.TEN_CV,
                TEN_NGUOI_TAO: element.TEN_NGUOI_TAO,
                LOAI_CV: element.LOAI_CV,
                TG_TAO: element.TG_TAO,
                TG_HET_HAN: element.TG_HET_HAN,
                IS_SEEN: element.IS_SEEN,
                TEN_NGUOI_NHAN: ' ',
                TOTAL_TIME: 0
            }
            works.push(work);
        });
    }
    return works;
}

function receivesModel(obj){
    let work_receive = {
        WORK_ID: null, 
        USER_ID: null, 
        WORK_TYPE_ID: null, 
        WORK_EVALUTE_ID: null, 
        COMMENT: null, 
        TOTAL_TIME: null, 
        TOTAL_TIME_CHECK: null, 
        BEGIN_DATE_AT: null, 
        END_DATE_AT: null, 
        CREATED_AT: null, 
        UPDATE_AT: null
    };
    if(obj){
        work_receive = {
            WORK_ID: helper.check(obj.WORK_ID), 
            USER_ID: helper.check(obj.USER_ID), 
            WORK_TYPE_ID: helper.check(obj.WORK_TYPE_ID),
            WORK_EVALUTE_ID: helper.check(obj.WORK_EVALUTE_ID), 
            COMMENT: helper.check(obj.COMMENT), 
            TOTAL_TIME: helper.check(obj.TOTAL_TIME), 
            TOTAL_TIME_CHECK: helper.check(obj.TOTAL_TIME_CHECK), 
            BEGIN_DATE_AT: helper.check(obj.BEGIN_DATE_AT), 
            END_DATE_AT: helper.check(obj.END_DATE_AT), 
            CREATED_AT: helper.check(obj.CREATED_AT), 
            UPDATE_AT: helper.check(obj.UPDATE_AT)
        }
    }
    return work_receive;
}

function workModel(obj){
    let work = { 
        USER_ID: null , 
        WORK_LEVEL_ID: null,
        WORK_RECEIVE_ID: null, 
        WORK_EVALUTE_ID: null, 
        WORK_ID: null, 
        EVALUTE_COMMENT: null,
        NAME_WORKS: null, 
        NOTE: null, 
        END_DATE_AT: null, 
        CREATED_AT: null, 
        UPDATED_AT: null, 
        IS_SEEN: null
    };
    if(obj){
        work = { 
            USER_ID: helper.check(obj.USER_ID), 
            WORK_LEVEL_ID: helper.check(obj.WORK_LEVEL_ID),
            WORK_RECEIVE_ID: helper.check(obj.WORK_RECEIVE_ID), 
            WORK_EVALUTE_ID: helper.check(obj.WORK_EVALUTE_ID), 
            WORK_ID: helper.check(obj.WORK_ID), 
            EVALUTE_COMMENT: helper.check(obj.EVALUTE_COMMENT),
            NAME_WORKS: helper.check(obj.NAME_WORKS), 
            NOTE: helper.check(obj.NOTE), 
            END_DATE_AT: helper.check(obj.END_DATE_AT), 
            CREATED_AT: helper.check(obj.CREATED_AT), 
            UPDATED_AT: helper.check(obj.UPDATED_AT), 
            IS_SEEN: helper.check(obj.IS_SEEN)
        };
    }
    return work;
}

module.exports =  {get_workModel, workModel, receivesModel };