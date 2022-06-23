function users(){
    return 'select * from vwGetUsers';      
}

function user_id(id){
    return `select * from vwGetUsers where ID = ${id}`
}

module.exports = {users, user_id };
