function formatDate(date){
    let date1 = date.slice(0,16);
    let date2 = date.slice(16,24);
    date = date1 + date2;
    return date;      
}

function check(data){
    return data ? data : null;
}

module.exports = {formatDate, check };
