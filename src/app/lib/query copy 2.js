function works(){
    return 'select a.ID, a.name_works as TEN_CV, b.name_users as TEN_NGUOI_TAO, d.name_work_levels as LOAI_CV, a.created_at as TG_TAO, a.end_date_at as TG_HET_HAN from gv_works a join gv_users b on a.user_id = b.id join gv_work_levels d on a.work_level_id = d.id';      
}

function work_id(id){
    return `select b.name_users as TEN_NGUOI_NHAN, c.name_work_types, a.COMMENT_WORK_RECEIVE, TOTAL_TIME, TOTAL_TIME_CHECK
    from gv_work_receives a join gv_users b on a.user_id = b.id join gv_work_types c on a.work_type_id = c.id
    where a.work_id = ${id}`
}

module.exports = {works, work_id };
