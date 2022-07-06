const db = require('./index');
const query = require('../../app/lib/WorksQuery');


//GET
async function GET (field, id)  {
    try {
      const connection = await db.connect();
      if(id){
        const str = query.works(field, id);
        //console.log(str);
        const result = await connection.execute(str);
        const data = result.rows;
        return data;
      }
      const str = query.works();
      const result = await connection.execute(str);
      const data = result.rows;
      return data;
    } catch (err) {
      console.log('Error works: ', err)
    }
}

//GET by work_id
async function GET_ID (id)  {
    try {
        const connection = await db.connect();
        const str = query.work_receive(id);
        const result = await connection.execute(str);
        const data = result.rows;
        return data;
    } catch (err) {
      console.log('Error works GET_ID: ', err)
    }
  }

  //GET by id work_receive
async function GET_WORK_RECEIVE_ID (id)  {
  try {
      const connection = await db.connect();
      const str = query.work_receive_by_id(id);
      const result = await connection.execute(str);
      const data = result.rows;
      return data;
  } catch (err) {
    console.log('Error work_receive_by_id: ', err)
  }
}

//POST Create work
  async function CREATE_WORK (body)  {
    try {
        const connection = await db.connect();
        const str = query.add_work(body);
        console.log(str);
        const result = await connection.execute(str,{},{   
          autoCommit: true
        });
        const data = result.rows;
        return data;
    } catch (err) {
      console.log('Error create work: ', err)
    }
  }

  //POST Create work_receive
  async function CREATE_WORK_RECEIVE (body)  {
    try {
        const connection = await db.connect();
        const str = query.add_work_receive(body);
        //console.log(str);
        const result = await connection.execute(str,{},{   
          autoCommit: true
        });
        const data = result.rows;
        return data;
    } catch (err) {
      console.log('Error create work receive: ', err)
    }
  }

  //Last work
  async function LAST_WORK ()  {
    try {
        const connection = await db.connect();
        const str = query.last_work();
        const result = await connection.execute(str);
        const data = result.rows[0];
        return data;
    } catch (err) {
      console.log('Error create work: ', err)
    }
  }

  //POST UPDATE WORK_RECEIVE()
  async function UPDATE_WORK_RECEIVE (body)  {
    try {
        const connection = await db.connect();
        const str = query.update_work_receive(body);
        //console.log(str);
        const result = await connection.execute(str,{},{   
          autoCommit: true
        });
        const data = result.rows;
        return data;
    } catch (err) {
      console.log('Error update work receive: ', err)
    }
  }


//POST UPDATE WORK_STATUS()
async function UPDATE_WORK_STATUS (body)  {
  try {
      const connection = await db.connect();
      const str = query.work_status(body);
      const result = await connection.execute(str,{},{   
        autoCommit: true
      });
      const data = result.rows;
      return data;
  } catch (err) {
    console.log('Error update work status: ', err)
  }
}

//POST UPDATE WORK_RECEIVE_STATUS()
async function UPDATE_WORK_RECEIVE_STATUS (body)  {
  try {
      const connection = await db.connect();
      const str = query.work_receive_status(body);
      const result = await connection.execute(str,{},{   
        autoCommit: true
      });
      const data = result.rows;
      return data;
  } catch (err) {
    console.log('Error update work receive status: ', err)
  }
}

//POST UPDATE CHECK_STATUS()
async function CHECK_STATUS (body)  {
  try {
      const connection = await db.connect();
      const str = query.check_status(body);
      const result = await connection.execute(str);
      const data = result.rows;
      return data;
  } catch (err) {
    console.log('Error check status: ', err)
  }
}

//POST PROJECT_BY_USERID()
async function PROJECT_BY_USERID (body)  {
  try {
      const connection = await db.connect();
      const str = query.project_by_userID(body);
      const result = await connection.execute(str);
      const data = result.rows;
      return data;
  } catch (err) {
    console.log('Error project by userID: ', err)
  }
}

//POST WORK_BY_PROJECTID()
async function WORK_BY_PROJECTID (body)  {
  try {
      const connection = await db.connect();
      const str = query.work_by_projectID(body);
      const result = await connection.execute(str);
      const data = result.rows;
      return data;
  } catch (err) {
    console.log('Error work by projectID: ', err)
  }
}


//POST DELETE WORK
async function DELETE_WORK (body)  {
  try {
      const connection = await db.connect();
      const str = query.delete_work(body);
      const result = await connection.execute(str,{},{   
        autoCommit: true
      });
      const data = result.rows;
      return data;
  } catch (err) {
    console.log('Error delete work: ', err)
  }
}


//POST DELETE WORK RECEIVE
async function DELETE_WORK_RECEIVE (body)  {
  try {
      const connection = await db.connect();
      const str = query.delete_work_receive(body);
      const result = await connection.execute(str,{},{   
        autoCommit: true
      });
      const data = result.rows;
      return data;
  } catch (err) {
    console.log('Error delete work_receive: ', err)
  }
}

module.exports = {GET, GET_ID, CREATE_WORK, CREATE_WORK_RECEIVE, LAST_WORK, GET_WORK_RECEIVE_ID, UPDATE_WORK_RECEIVE, PROJECT_BY_USERID, WORK_BY_PROJECTID, UPDATE_WORK_STATUS, UPDATE_WORK_RECEIVE_STATUS, CHECK_STATUS, DELETE_WORK, DELETE_WORK_RECEIVE };