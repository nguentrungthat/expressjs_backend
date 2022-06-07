function get_workModel(obj){
    let works =[];
    obj.forEach(element => {
        let work = {
            ID: element.ID,
            TEN_CV: element.TEN_CV,
            TEN_NGUOI_TAO: element.TEN_NGUOI_TAO,
            LOAI_CV: element.LOAI_CV,
            TG_TAO: element.TG_TAO,
            TG_HET_HAN: element.TG_HET_HAN,
            IS_SEEN: element.IS_SEEN,
            TEN_NGUOI_NHAN: ' ',
            TOTAL_TIME: 0
        }
        works.push(work);
    });
    return works;
}

function work_receivesModel(obj){
    let work_receives =[];
    obj.forEach(element => {
        let work_receive = {
            TEN_NGUOI_NHAN: element.TEN_NGUOI_NHAN,
            TOTAL_TIME: element.TOTAL_TIME,
        }
        work_receives.push(work_receive);
    });
    return work_receives;
}

module.exports =  {get_workModel };