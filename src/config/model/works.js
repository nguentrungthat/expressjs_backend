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
    let now = new Date();
    let work_receive = {
        ID: null,
        WORK_ID: null, 
        USER_ID: null, 
        WORK_TYPE_ID: null, 
        WORK_EVALUTE_ID: null, 
        COMMENT_WORK_RECEIVE: ' ', 
        TOTAL_TIME: 0, 
        TOTAL_TIME_CHECK: 0, 
        BEGIN_DATE_AT: null, 
        END_DATE_AT: null, 
        CREATED_AT: now.toLocaleDateString('en-GB'), 
        UPDATE_AT: now.toLocaleDateString('en-GB')
    };
    if(obj){
        work_receive = {
            ID: helper.check(obj.ID, null),
            WORK_ID: helper.check(obj.WORK_ID, null), 
            USER_ID: helper.check(obj.USER_ID, null), 
            WORK_TYPE_ID: helper.check(obj.WORK_TYPE_ID, null),
            WORK_EVALUTE_ID: helper.check(obj.WORK_EVALUTE_ID, null), 
            COMMENT_WORK_RECEIVE: helper.check(obj.COMMENT_WORK_RECEIVE, ' '), 
            TOTAL_TIME: helper.check(obj.TOTAL_TIME, 0), 
            TOTAL_TIME_CHECK: helper.check(obj.TOTAL_TIME_CHECK, 0), 
            BEGIN_DATE_AT: helper.check(obj.BEGIN_DATE_AT, null), 
            END_DATE_AT: helper.check(obj.END_DATE_AT, null), 
            CREATED_AT: helper.check(obj.CREATED_AT, now.toLocaleDateString('en-GB')), 
            UPDATE_AT: helper.check(obj.UPDATE_AT, now.toLocaleDateString('en-GB'))
        }
    }
    return work_receive;
}

function workModel(obj){
    let now = new Date();
    let work = { 
        ID: null,
        USER_ID: null, 
        WORK_LEVEL_ID: null,
        WORK_RECEIVE_ID: null, 
        WORK_EVALUTE_ID: null, 
        WORK_ID: null, 
        EVALUTE_COMMENT: ' ',
        NAME_WORKS: ' ', 
        NOTE: ' ', 
        END_DATE_AT: null, 
        CREATED_AT: now.toLocaleDateString('en-GB'), 
        UPDATED_AT: now.toLocaleDateString('en-GB'), 
        IS_SEEN: 0
    };
    if(obj){
        work = { 
            ID: helper.check(obj.ID, null),
            USER_ID: helper.check(obj.USER_ID, null), 
            WORK_LEVEL_ID: helper.check(obj.WORK_LEVEL_ID, null),
            WORK_RECEIVE_ID: helper.check(obj.WORK_RECEIVE_ID, null), 
            WORK_EVALUTE_ID: helper.check(obj.WORK_EVALUTE_ID, null), 
            WORK_ID: helper.check(obj.WORK_ID, null), 
            EVALUTE_COMMENT: helper.check(obj.EVALUTE_COMMENT, ' '),
            NAME_WORKS: helper.check(obj.NAME_WORKS, ' '), 
            NOTE: helper.check(obj.NOTE, ' '), 
            END_DATE_AT: helper.check(obj.END_DATE_AT, null), 
            CREATED_AT: helper.check(obj.CREATED_AT, now.toLocaleDateString('en-GB')), 
            UPDATED_AT: helper.check(obj.UPDATED_AT, now.toLocaleDateString('en-GB')), 
            IS_SEEN: helper.check(obj.IS_SEEN, 0)
        };
    }
    return work;
}

module.exports =  {get_workModel, workModel, receivesModel };