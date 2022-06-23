function logs(id){
    if(id)
        return `select * from vwGetLogs where ID = ${id}`;
    return 'select * from vwGetLogs'
}

function logs_by_receiveID(id){
    return `select * from vwGetLogs where WORK_RECEIVE_ID = ${id}`;
 }

function create_log(body){
    return `begin P_Create_log(${body.WORK_RECEIVE_ID}, '${body.BEGIN_DATE_AT}', '${body.END_DATE_AT}', ${body.TIME_WORK_LOGS}, ${body.TIME_CHECK}, '${body.CONTENT}', '${body.TITLE}', '${body.CREATED_AT}', '${body.UPDATED_AT}'); end;`
}

function update_log(body){
    return `begin P_Update_log(${body.ID}, '${body.BEGIN_DATE_AT}', '${body.END_DATE_AT}', ${body.TIME_WORK_LOGS}, ${body.TIME_CHECK}, '${body.CONTENT}', '${body.TITLE}', '${body.UPDATED_AT}'); end;`
}

function get_time(id){
    return `select * from vwGetTimes where ID = ${id}`
}

function update_time(body){
    return `begin P_Update_time(${body.ID},${body.TOTAL_TIME},${body.TOTAL_TIME_CHECK}); end;`
}

function receive_by_userID(id){
    return `select * from vw_receive_by_userID where user_id = ${id}`;
}

module.exports = {logs, update_log, create_log, get_time, update_time, receive_by_userID, logs_by_receiveID }
