const db = require('./index');
const query = require('../../app/lib/WorksQuery');


//GET
async function GET ()  {
    try {
        const connection = await db.connect();
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

module.exports = {GET, GET_ID, CREATE_WORK };