const rolesRoute = require('./roles');
const usersRoute = require('./users');
const loginRoute = require('./login');
const worksRoute = require('./works');
const logsRoute = require('./logs');
const getRoute = require('./gets');



function route(app){

    app.get('/', function (req, res) {
        res.render('home');
    })

    //app.use('/roles', rolesRoute);

    app.use('/users', usersRoute);

    app.use('/login', loginRoute);

    app.use('/works', worksRoute);

    app.use('/logs', logsRoute);

    app.use('/get', getRoute);



}

module.exports = route;