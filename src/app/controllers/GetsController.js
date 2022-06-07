const GET = require('../../config/db/gets');

class GetsController{
    //[GET] /levels
    async levels(req, res){
        const data = await GET.GET_LEVELS(); 
        res.json(data);
    }

    //[GET] /evalutes
    async evalutes(req, res){
        const data = await GET.GET_EVALUTES();
        res.json(data);
    }

    //[GET] /types
    async types(req, res){
        const data = await GET.GET_TYPES();
        res.json(data);
    }

}

module.exports = new GetsController