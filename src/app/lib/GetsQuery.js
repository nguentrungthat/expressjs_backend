function GetLevels(){
    return 'select * from vwGetLevels';
}

function GetEvalutes(){
    return 'select * from vwGetEvalutes';
}

function GetTypes(){
    return 'select * from vwGetTypes';
}

module.exports = {GetLevels, GetEvalutes, GetTypes }
