import moment from 'moment';
import 'moment/locale/pt-br';

function getStringDateFormat(dataInformada, format){
    const data = !!dataInformada ? dataInformada : new Date();
    const formatData = !!format ? format : 'D [de] MMMM [de] YYYY, H:mm';
    return moment(data).locale('pt-br').format(formatData)
}

const getStringMes = (props) => {
    let dsMes;
    if (props === 1) {
      dsMes = 'Janeiro';
    } else if (props === 2) {
      dsMes = 'Fevereiro';
    } else if (props === 3) {
      dsMes = 'Março';
    } else if (props === 4) {
      dsMes = 'Abril';
    } else if (props === 5) {
      dsMes = 'Maio';
    } else if (props === 6) {
      dsMes = 'Junho';
    } else if (props === 7) {
      dsMes = 'Julho';
    } else if (props === 8) {
      dsMes = 'Agosto';
    } else if (props === 9) {
      dsMes = 'Setembro';
    } else if (props === 10) {
      dsMes = 'Outubro';
    } else if (props === 11) {
      dsMes = 'Novembro';
    } else if (props === 12) {
      dsMes = 'Dezembro';
    }
    return dsMes;
  }

export {getStringDateFormat, getStringMes}