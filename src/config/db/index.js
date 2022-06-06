const oracledb = require('oracledb');
const config = {
  user: 'thuctap',
  password: 'thuctap123',
  connectString: '10.102.13.14:1521/JOB'
}
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.initOracleClient({libDir: 'C:\\oracle\\instantclient_21_3'});

//Connect database
async function connect ()  {
    try {
        return await oracledb.getConnection(config);
    } catch (err) {
      console.log('Error: ', err)
    }
}

module.exports = {connect };
