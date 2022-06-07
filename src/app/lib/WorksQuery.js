
// const knex = require('knex')({
//     client: 'oracledb',
//     connection:{
//         user: 'thuctap',
//         password: 'thuctap123',
//         connectString: '10.102.13.14:1521/JOB'
//     }
// });

// function knex_works(){
//     return knex.select().from('gv_works').toString();
// }

function works(){
    return 'select a.ID, a.name_works as TEN_CV, b.name_users as TEN_NGUOI_TAO, d.name_work_levels as LOAI_CV, a.created_at as TG_TAO, a.end_date_at as TG_HET_HAN, IS_SEEN from gv_works a join gv_users b on a.user_id = b.id join gv_work_levels d on a.work_level_id = d.id';      
}

function work_receive(id){
    return `select a.ID, b.name_users as TEN_NGUOI_NHAN, c.name_work_types, a.COMMENT_WORK_RECEIVE, TOTAL_TIME, TOTAL_TIME_CHECK
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
    return `insert into gv_works values(null, ${body.USER_ID}, ${body.WORK_LEVEL_ID}, '', ${body.WORK_EVALUTE_ID}, '', '', '${body.NAME_WORKS}', '',TO_TIMESTAMP('${body.END_DATE_AT}', 'DD/MM/YYYY'), TO_TIMESTAMP('${body.CREATE_AT}', 'DD/MM/YYYY'), TO_TIMESTAMP('${body.UPDATE_AT}', 'DD/MM/YYYY'), 0)`;
}

module.exports = {works, work_id, work_receive, add_work };
