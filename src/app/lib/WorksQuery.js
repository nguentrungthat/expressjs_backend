
function works(work_id){
    if(work_id)
        return `select a.ID, a.name_works as TEN_CV, b.name_users as TEN_NGUOI_TAO, d.name_work_levels as LOAI_CV, a.created_at as TG_TAO, a.end_date_at as TG_HET_HAN, IS_SEEN 
        from gv_works a join gv_users b on a.user_id = b.id join gv_work_levels d on a.work_level_id = d.id
        where work_id = ${work_id}`;
    else
        return 'select a.ID, a.name_works as TEN_CV, b.name_users as TEN_NGUOI_TAO, d.name_work_levels as LOAI_CV, a.created_at as TG_TAO, a.end_date_at as TG_HET_HAN, IS_SEEN from gv_works a join gv_users b on a.user_id = b.id join gv_work_levels d on a.work_level_id = d.id';      
}

function work_receive(id){
    return `select a.ID, b.name_users as TEN_NGUOI_NHAN, c.name_work_types, a.COMMENT_WORK_RECEIVE, TOTAL_TIME, TOTAL_TIME_CHECK, BEGIN_DATE_AT, END_DATE_AT
    from gv_work_receives a join gv_users b on a.user_id = b.id join gv_work_types c on a.work_type_id = c.id
    where a.work_id = ${id}`;
}

function work_id(id){
    return `select b.name_users as TEN_NGUOI_NHAN, TOTAL_TIME
    from gv_work_receives a join gv_users b on a.user_id = b.id
    where a.work_id = ${id}`;
}

//
function add_work(body){
    return `insert into gv_works values(null, ${body.USER_ID}, ${body.WORK_LEVEL_ID}, ${body.WORK_RECEIVE_ID}, ${body.WORK_EVALUTE_ID}, ${body.WORK_LEVEL_ID}, '${body.EVALUTE_COMMENT}', '${body.NAME_WORKS}', '${body.NOTE}',TO_TIMESTAMP('${body.END_DATE_AT}', 'DD/MM/YYYY HH24:MI:SS'), TO_TIMESTAMP('${body.CREATED_AT}', 'DD/MM/YYYY HH24:MI:SS'), TO_TIMESTAMP('${body.UPDATED_AT}', 'DD/MM/YYYY HH24:MI:SS'), ${body.IS_SEEN})`;
}

function add_work_receive(body){
    return `INSERT INTO gv_work_receives VALUES (NULL, ${body.WORK_ID}, ${body.USER_ID}, ${body.WORK_TYPE_ID}, ${body.WORK_EVALUTE_ID}, '${body.COMMENT}', ${body.TOTAL_TIME}, ${body.TOTAL_TIME_CHECK}, TO_TIMESTAMP('${body.BEGIN_DATE_AT}', 'DD/MM/YYYY HH24:MI:SS'), TO_TIMESTAMP('${body.END_DATE_AT}', 'DD/MM/YYYY HH24:MI:SS'), TO_TIMESTAMP('${body.CREATED_AT}', 'DD/MM/YYYY HH24:MI:SS'), TO_TIMESTAMP('${body.CREATED_AT}', 'DD/MM/YYYY HH24:MI:SS'))`;
}

function last_work(){
    return 'select ID from gv_works where rownum = 1 order by ID desc'
}

module.exports = {works, work_id, work_receive, add_work, add_work_receive, last_work };
