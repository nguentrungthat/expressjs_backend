function users(){
    return 'SELECT * FROM GV_USERS';      
}

function user_id(id){
    return `SELECT * FROM GV_USERS WHERE ID = ${id}`
}

module.exports = {users, user_id };
