const db = require('./index');
const query = require('../../app/lib/WorksQuery');


//GET
async function GET ()  {
    try {
        const connection = await db.connect();
        console.log("Connected!");
        const str = query.works();
        const result = await connection.execute(str);
        const data = result.rows;
        return data;
    } catch (err) {
      console.log('Error: ', err)
    }
}

//GET by work_id
async function GET_ID (id)  {
    try {
        const connection = await db.connect();
        console.log("Connected!");
        const str = query.work_id(id);
        const result = await connection.execute(str);
        const data = result.rows[0];
        return data;
    } catch (err) {
      console.log('Error: ', err)
    }
  }

module.exports = {GET, GET_ID };