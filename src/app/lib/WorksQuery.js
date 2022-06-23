
function works(field, work_id){
    if(field && work_id)
        return `select * from vwGetWorks where ${field} = ${work_id}`;
    else
        return 'select * from vwGetWorks';      
}

function work_receive(id){
    return `select a.ID, a.USER_ID, b.name_users as NAME_RECEIVERS, c.name_work_types, a.COMMENT_WORK_RECEIVE, TOTAL_TIME, TOTAL_TIME_CHECK, BEGIN_DATE_AT, END_DATE_AT, STATUS
    from gv_work_receives a join gv_users b on a.user_id = b.id join gv_work_types c on a.work_type_id = c.id join gv_work_status d on a.work_status_id = d.id
    where a.work_id = ${id}`;
}

function work_receive_by_id(id){
    return `select a.ID, b.name_users as TEN_NGUOI_NHAN, c.name_work_types, a.COMMENT_WORK_RECEIVE, TOTAL_TIME, TOTAL_TIME_CHECK, BEGIN_DATE_AT, END_DATE_AT
    from gv_work_receives a join gv_users b on a.user_id = b.id join gv_work_types c on a.work_type_id = c.id
    where a.id = ${id}`;
}


//
function add_work(body){
    return `insert into gv_works values(null, ${body.USER_ID}, ${body.WORK_LEVEL_ID}, ${body.WORK_RECEIVE_ID}, ${body.WORK_EVALUTE_ID}, ${body.WORK_ID}, '${body.EVALUTE_COMMENT}', '${body.NAME_WORKS}', '${body.NOTE}',TO_TIMESTAMP('${body.END_DATE_AT}', 'DD/MM/YYYY HH24:MI:SS'), TO_TIMESTAMP('${body.CREATED_AT}', 'DD/MM/YYYY HH24:MI:SS'), TO_TIMESTAMP('${body.UPDATED_AT}', 'DD/MM/YYYY HH24:MI:SS'), ${body.IS_SEEN}, TO_TIMESTAMP('${body.BEGIN_DATE_AT}', 'DD/MM/YYYY HH24:MI:SS'), ${body.STATUS})`;
}

function add_work_receive(body){
    return `INSERT INTO gv_work_receives VALUES (NULL, ${body.WORK_ID}, ${body.USER_ID}, ${body.WORK_TYPE_ID}, ${body.WORK_EVALUTE_ID}, '${body.COMMENT_WORK_RECEIVE}', ${body.TOTAL_TIME}, ${body.TOTAL_TIME_CHECK}, TO_TIMESTAMP('${body.BEGIN_DATE_AT}', 'DD/MM/YYYY HH24:MI:SS'), TO_TIMESTAMP('${body.END_DATE_AT}', 'DD/MM/YYYY HH24:MI:SS'), TO_TIMESTAMP('${body.CREATED_AT}', 'DD/MM/YYYY HH24:MI:SS'), TO_TIMESTAMP('${body.CREATED_AT}', 'DD/MM/YYYY HH24:MI:SS'), ${body.STATUS})`;
}

function last_work(){
    return 'select ID from gv_works where rownum = 1 order by ID desc'
}

function update_work_receive(body){
    return `UPDATE gv_work_receives 
    SET USER_ID = ${body.USER_ID}, COMMENT_WORK_RECEIVE = '${body.COMMENT_WORK_RECEIVE}', BEGIN_DATE_AT = TO_TIMESTAMP('${body.BEGIN_DATE_AT}', 'DD/MM/YYYY HH24:MI:SS'), END_DATE_AT = TO_TIMESTAMP('${body.END_DATE_AT}', 'DD/MM/YYYY HH24:MI:SS'), UPDATE_AT = TO_TIMESTAMP('${body.UPDATE_AT}', 'DD/MM/YYYY HH24:MI:SS')
    WHERE ID = ${body.ID}`
}

function delete_work_receive(id){
    return `DELETE FROM gv_work_receives WHERE ID = ${id}`
}


function work_status(body){
    return `update gv_works set work_status_id = ${body.STATUS} where id = ${body.ID}`;
}

function work_receive_status(body){
    return `update gv_work_receives set work_status_id = ${body.STATUS} where id = ${body.ID}`;
}

function check_status(id){
    return `select work_status_id as STATUS
    from gv_work_receives
    where work_id = ${id}`
}

module.exports = {works, work_receive, add_work, add_work_receive, last_work, update_work_receive, delete_work_receive, work_receive_by_id, work_status, work_receive_status, check_status };
