const db = require('./index');
const query = require('../../app/lib/GetsQuery');

//GET levels
async function GET_LEVELS()  {
    try {
        const connection = await db.connect();
        const str = query.GetLevels();
        const result = await connection.execute(str);
        const data = result.rows;
        return data;
    } catch (err) {
      console.log('Error: ', err)
    }
}

//GET levels
async function GET_EVALUTES()  {
    try {
        const connection = await db.connect();
        const str = query.GetEvalutes();
        const result = await connection.execute(str);
        const data = result.rows;
        return data;
    } catch (err) {
      console.log('Error: ', err)
    }
}

//GET levels
async function GET_TYPES()  {
    try {
        const connection = await db.connect();
        const str = query.GetTypes();
        const result = await connection.execute(str);
        const data = result.rows;
        return data;
    } catch (err) {
      console.log('Error: ', err)
    }
}

module.exports = {GET_LEVELS, GET_EVALUTES, GET_TYPES }
