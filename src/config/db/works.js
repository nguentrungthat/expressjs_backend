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
      console.log('Error work_id: ', err)
    }
  }

  //GET by id work_receive
async function GET_WORK_RECEIVE_ID (id)  {
  try {
      const connection = await db.connect();
      const str = query.work_receive_id(id);
      const result = await connection.execute(str);
      const data = result.rows;
      return data;
  } catch (err) {
    console.log('Error work_receive_id: ', err)
  }
}

//POST Create work
  async function CREATE_WORK (body)  {
    try {
        const connection = await db.connect();
        const str = query.add_work(body);
        
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
        console.log(str);
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
        const result = await connection.execute(str,{},{   
          autoCommit: true
        });
        const data = result.rows;
        return data;
    } catch (err) {
      console.log('Error update work: ', err)
    }
  }

//POST Filter WORK_CREATER()
async function FILTER_WORK_CREATER (body)  {
  try {
      const connection = await db.connect();
      const str = query.filter_work_creater(body);
      const result = await connection.execute(str);
      const data = result.rows;
      return data;
  } catch (err) {
    console.log('Error filter creater: ', err)
  }
}

//POST Filter WORK_RECEIVER()
async function FILTER_WORK_RECEIVER (body)  {
  try {
      const connection = await db.connect();
      const str = query.filter_work_receiver(body);
      const result = await connection.execute(str);
      const data = result.rows;
      return data;
  } catch (err) {
    console.log('Error filter receiver: ', err)
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

module.exports = {GET, GET_ID, CREATE_WORK, CREATE_WORK_RECEIVE, LAST_WORK, GET_WORK_RECEIVE_ID, UPDATE_WORK_RECEIVE, FILTER_WORK_CREATER, FILTER_WORK_RECEIVER, UPDATE_WORK_STATUS, UPDATE_WORK_RECEIVE_STATUS, CHECK_STATUS };