function logs(id){
    if(id)
        return `select WORK_RECEIVE_ID, BEGIN_DATE_AT, END_DATE_AT, TIME_WORK_LOGS, TIME_CHECK, CONTENT, TITLE from gv_work_logs where ID = ${id}`;
    return 'select ID, WORK_RECEIVE_ID, BEGIN_DATE_AT, END_DATE_AT, TIME_WORK_LOGS, TIME_CHECK, CONTENT, TITLE from gv_work_logs'
}

function create_log(body){
    return `insert into gv_work_logs values(null, ${body.WORK_RECEIVE_ID}, TO_TIMESTAMP('${body.BEGIN_DATE_AT}', 'DD/MM/YYYY HH24:MI:SS'), TO_TIMESTAMP('${body.END_DATE_AT}', 'DD/MM/YYYY HH24:MI:SS'), ${body.TIME_WORK_LOGS}, ${body.TIME_CHECK}, '${body.CONTENT}', '${body.TITLE}', TO_TIMESTAMP('${body.CREATED_AT}', 'DD/MM/YYYY HH24:MI:SS'), TO_TIMESTAMP('${body.UPDATED_AT}', 'DD/MM/YYYY HH24:MI:SS'))`
}

function update_log(body){
    return `update gv_work_logs
    set BEGIN_DATE_AT = TO_TIMESTAMP('${body.BEGIN_DATE_AT}', 'DD/MM/YYYY HH24:MI:SS'), END_DATE_AT = TO_TIMESTAMP('${body.END_DATE_AT}', 'DD/MM/YYYY HH24:MI:SS'), TIME_WORK_LOGS = ${body.TIME_WORK_LOGS}, TIME_CHECK = ${body.TIME_CHECK}, CONTENT = '${body.CONTENT}', TITLE = '${body.TITLE}', UPDATED_AT = ${body.UPDATED_AT}
    where ID = ${body.ID}`
}

function get_time(id){
    return `select TOTAL_TIME, TOTAL_TIME_CHECK from gv_work_receives where ID = ${id}`
}

function update_time(body){
    return `update gv_work_receives
    set TOTAL_TIME = ${body.TOTAL_TIME}, TOTAL_TIME_CHECK = ${body.TOTAL_TIME_CHECK}
    where ID = ${body.ID}`
}

module.exports = {logs, update_log, create_log, get_time, update_time }
