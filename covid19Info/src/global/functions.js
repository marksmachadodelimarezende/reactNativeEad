import moment from "moment";
import { getStringDateFormat, getStringMes } from './UtilString'

let arrayAnoMesRef; //Variavel ficou global neste scope

const getJsonDataSource = () => require('./data.json');

getMaiorDataDados = () => getJsonDataSource().map(item => item.data).reduce((a, b) => (a > b) ? a : b);

getStringMesAno = (arrayMesAno) => {
  return getStringMes(parseInt(arrayMesAno[0])).toString().substr(0, 3) +
    '/' + arrayMesAno[1].toString().substr(2, 2);
}

const getDataAtualizacao = () => moment(getMaiorDataDados());

const getTotalCasosAtivos = (props) => props.reduce((sum, item) => sum + item.casosNovos, 0);

const getTotalObitos = (props) => props.reduce((sum, item) => sum + item.obitosNovos, 0);

const getResumoCasosUltimosSeisMeses = () => {
  let arrayLabelsMes = ['', '', '', '', '', ''];
  let arrayDataSet = [0, 0, 0, 0, 0, 0];
  arrayAnoMesRef = null;

  //Laco para pegar ultimos seis meses de dados para um novo arrayList
  for (let i = 5; i >= 0; i--) {
      arrayAnoMesRef = arrayAnoMesRef != null
          ? getMesAnoAnterior(arrayAnoMesRef)
          : getStringDateFormat(getMaiorDataDados(), 'M[/]YYYY').split('/');
      arrayDataSet[i] = getTotalCasosPorAnoMes();
      arrayLabelsMes[i] = getStringMesAno(arrayAnoMesRef);
  }

  return {
      labels: arrayLabelsMes,
      datasets: [{
          data: arrayDataSet,

      }]
  }
}

const getResumoObitosUltimosSeisMeses = () => {
  let arrayObitosLabelsMes = ['', '', '', '', '', ''];
  let arrayObitosDataSet = [0, 0, 0, 0, 0, 0];
  arrayAnoMesRef = null;

  //Laco para pegar ultimos seis meses de dados para um novo arrayList
  for (let i = 5; i >= 0; i--) {
      arrayAnoMesRef = arrayAnoMesRef != null
          ? getMesAnoAnterior(arrayAnoMesRef)
          : getStringDateFormat(getMaiorDataDados(), 'M[/]YYYY').split('/');
      arrayObitosDataSet[i] = getTotalObitosPorAnoMes();
      arrayObitosLabelsMes[i] = getStringMesAno(arrayAnoMesRef);
  }
  
  return {
      labels: arrayObitosLabelsMes,
      datasets: [{
          data: arrayObitosDataSet,

      }]
  }
}

getTotalCasosPorAnoMes = () => {
  return getJsonDataSource().filter((item) => {
      const arrayAnoMesItem = getStringDateFormat(item.data, 'M[/]YYYY').split('/');
      return parseInt(arrayAnoMesRef[0]) === parseInt(arrayAnoMesItem[0]) &&
          parseInt(arrayAnoMesRef[1]) === parseInt(arrayAnoMesItem[1]);
  })
      .map(item => item.casosNovos)
      .reduce((sum, item) => sum + item, 0);
}

getTotalObitosPorAnoMes = () => {
  return getJsonDataSource().filter((item) => {
      const arrayAnoMesItem = getStringDateFormat(item.data, 'M[/]YYYY').split('/');
      return parseInt(arrayAnoMesRef[0]) === parseInt(arrayAnoMesItem[0]) &&
          parseInt(arrayAnoMesRef[1]) === parseInt(arrayAnoMesItem[1]);
  })
      .map(item => item.obitosNovos)
      .reduce((sum, item) => sum + item, 0);
}

getMesAnoAnterior = (arrayMesAno) => {
  let newArrayTemp = arrayMesAno;
  newArrayTemp[0] = newArrayTemp[0] - 1;
  if (newArrayTemp[0] === 0) {
      newArrayTemp[0] = 12;
      newArrayTemp[1] = newArrayTemp[1] - 1;
  }
  return newArrayTemp;
}

export default {
  getTotalCasosAtivos,
  getTotalObitos,
  getJsonDataSource,
  getDataAtualizacao,
  getResumoCasosUltimosSeisMeses,
  getResumoObitosUltimosSeisMeses,
}; 