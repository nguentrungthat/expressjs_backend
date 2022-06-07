function GetLevels(){
    return 'select ID, NAME_WORK_LEVELS from gv_work_levels';
}

function GetEvalutes(){
    return 'select ID, NAME_WORK_EVALUTES from gv_work_evalutes';
}

function GetTypes(){
    return 'select ID, NAME_WORK_TYPES from gv_work_types';
}

module.exports = {GetLevels, GetEvalutes, GetTypes }
