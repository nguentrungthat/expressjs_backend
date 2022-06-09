const db = require('./index');
const query = require('../../app/lib/WorksQuery');


//GET
async function GET (id)  {
    try {
      const connection = await db.connect();
      if(id){
        const str = query.works(id);
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
        const result = await connection.execute(str,{},{   
          autoCommit: true
        });
        const data = result.rows;
        return data;
    } catch (err) {
      console.log('Error create work: ', err)
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

module.exports = {GET, GET_ID, CREATE_WORK, CREATE_WORK_RECEIVE, LAST_WORK };