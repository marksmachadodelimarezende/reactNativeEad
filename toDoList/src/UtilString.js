import moment from 'moment';
import 'moment/locale/pt-br';

function getStringDeDataPtBrSemHoras(data) {
    return moment(data).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')
}

export {
    getStringDeDataPtBrSemHoras,
}