import moment from 'moment';
import 'moment/locale/pt-br';

function getDataSemHoras(data) {
    if(!!data){
        const arrayDate = moment(data).locale('pt-br').format('DD[/]MM[/]YYYY').split('/');
        return new Date(arrayDate[0], arrayDate[1], arrayDate[2]);
    } else {
        return null;
    }
}

function isDataMenorQueHoje(dataCheck) {
    return getDataSemHoras(dataCheck) < getDataSemHoras(new Date());
}

function isDataMaiorQueHoje(dataCheck) {
    return getDataSemHoras(dataCheck) > getDataSemHoras(new Date());
}

function isDataIgualHoje(dataCheck) {
    return getDataSemHoras(dataCheck) === getDataSemHoras(new Date());
}

function isDataPreenchida(dataCheck) { 
    return getDataSemHoras(dataCheck) !== null;
}

function isDataNula(dataCheck) { 
    return !isDataPreenchida(dataCheck);
}

export {
    getDataSemHoras,
    isDataMenorQueHoje,
    isDataMaiorQueHoje,
    isDataIgualHoje,
    isDataPreenchida,
    isDataNula,
}