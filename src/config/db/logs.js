const db = require('./index');
const query = require('../../app/lib/LogsQuery');

//GET logs
async function GET(id)  {
    try {
      if(id){
        const connection = await db.connect();
        const str = query.logs(id);
        const result = await connection.execute(str);
        const data = result.rows;
        return data;
      }
      const connection = await db.connect();
      const str = query.logs();
      const result = await connection.execute(str);
      const data = result.rows;
      return data;
    } catch (err) {
      console.log('Error get logs: ', err)
    }
}

//POST create log
async function CREATE_LOG(body)  {
  try {
      const connection = await db.connect();
      const str = query.create_log(body);
      console.log(' ');
      console.log(str);
      const result = await connection.execute(str,{},{   
        autoCommit: true
      });
      const data = result.rows;
      return data;
  } catch (err) {
    console.log('Error create log: ', err)
  }
}

//POST update log
async function UPDATE_LOG(body)  {
  try {
      const connection = await db.connect();
      const str = query.update_log(body);
      const result = await connection.execute(str,{},{   
        autoCommit: true
      });
      const data = result.rows;
      return data;
  } catch (err) {
    console.log('Error update log: ', err)
  }
}

async function GET_TIME(id){
  try {
    const connection = await db.connect();
    const str = query.get_time(id);
    const result = await connection.execute(str);
    const data = result.rows[0];
    return data;
  } catch (err) {
    console.log('Error get time: ', err)
  }
}

async function UPDATE_TIME(body){
  try {
    const connection = await db.connect();
    const str = query.update_time(body);
    const result = await connection.execute(str,{},{   
      autoCommit: true
    });
    const data = result.rows;
    return data;
  } catch (err) {
    console.log('Error update time: ', err)
  }
}

async function RECEIVERS_BY_USERID(body){
  try {
    const connection = await db.connect();
    const str = query.receive_by_userID(body);
    const result = await connection.execute(str);
    const data = result.rows;
    return data;
  } catch (err) {
    console.log('Error receivers by user_id: ', err)
  }
}

async function LOGS_BY_RECEIVEID(body){
  try {
    const connection = await db.connect();
    const str = query.logs_by_receiveID(body);
    const result = await connection.execute(str);
    const data = result.rows;
    return data;
  } catch (err) {
    console.log('Error receivers by receive_id: ', err)
  }
}

async function LOGS_BY_USERID(body){
  try {
    const connection = await db.connect();
    const str = query.logs_by_userID(body);
    const result = await connection.execute(str);
    const data = result.rows;
    return data;
  } catch (err) {
    console.log('Error receivers by user_id: ', err)
  }
}


module.exports = {GET, CREATE_LOG, UPDATE_LOG, GET_TIME, UPDATE_TIME, RECEIVERS_BY_USERID, LOGS_BY_RECEIVEID, LOGS_BY_USERID }
