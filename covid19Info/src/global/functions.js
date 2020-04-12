import moment from "moment";

getTotalCasosAtivos = (props) => {
    return props.reduce(function (sum, item) {
        return sum + item.casosNovos;
    }, 0);
}

getTotalObitos = (props) => {
    return props.reduce(function (sum, item) {
        return sum + item.obitosNovos;
    }, 0);
}

getDataAtualizacao = () => moment('2020-04-11 18:00');
getJsonDataSource = () => {
    return [
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "17/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "18/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "19/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "20/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "21/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "22/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "23/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "24/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "25/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 5,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "26/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 5,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "27/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "28/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "29/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "30/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "31/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 8,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "01/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 9,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "02/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 10,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "03/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 10,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "04/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 11,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "05/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 12,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "06/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 14,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "07/04/2020",
          "casosNovos": 4,
          "casosAcumulados": 18,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "08/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 18,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "09/04/2020",
          "casosNovos": 10,
          "casosAcumulados": 28,
          "obitosNovos": 1,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "10/04/2020",
          "casosNovos": 4,
          "casosAcumulados": 32,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Norte",
          "estado": "RO",
          "data": "11/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 33,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "17/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "18/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "19/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "20/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 7,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "21/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 9,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "22/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 11,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "23/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 11,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "24/03/2020",
          "casosNovos": 6,
          "casosAcumulados": 17,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "25/03/2020",
          "casosNovos": 6,
          "casosAcumulados": 23,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "26/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 24,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "27/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 25,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "28/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 25,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "29/03/2020",
          "casosNovos": 9,
          "casosAcumulados": 34,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "30/03/2020",
          "casosNovos": 8,
          "casosAcumulados": 42,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "31/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 42,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "01/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 43,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "02/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 43,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "03/04/2020",
          "casosNovos": 3,
          "casosAcumulados": 46,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "04/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 46,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "05/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 48,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "06/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 50,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "07/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 50,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "08/04/2020",
          "casosNovos": 4,
          "casosAcumulados": 54,
          "obitosNovos": 1,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "09/04/2020",
          "casosNovos": 8,
          "casosAcumulados": 62,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "10/04/2020",
          "casosNovos": 8,
          "casosAcumulados": 70,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Norte",
          "estado": "AC",
          "data": "11/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 72,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "15/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "17/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "18/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "19/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "20/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "21/03/2020",
          "casosNovos": 8,
          "casosAcumulados": 11,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "22/03/2020",
          "casosNovos": 15,
          "casosAcumulados": 26,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "23/03/2020",
          "casosNovos": 6,
          "casosAcumulados": 32,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "24/03/2020",
          "casosNovos": 15,
          "casosAcumulados": 47,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "25/03/2020",
          "casosNovos": 7,
          "casosAcumulados": 54,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "26/03/2020",
          "casosNovos": 13,
          "casosAcumulados": 67,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "27/03/2020",
          "casosNovos": 14,
          "casosAcumulados": 81,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "28/03/2020",
          "casosNovos": 30,
          "casosAcumulados": 111,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "29/03/2020",
          "casosNovos": 29,
          "casosAcumulados": 140,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "30/03/2020",
          "casosNovos": 11,
          "casosAcumulados": 151,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "31/03/2020",
          "casosNovos": 24,
          "casosAcumulados": 175,
          "obitosNovos": 2,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "01/04/2020",
          "casosNovos": 25,
          "casosAcumulados": 200,
          "obitosNovos": 0,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "02/04/2020",
          "casosNovos": 29,
          "casosAcumulados": 229,
          "obitosNovos": 0,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "03/04/2020",
          "casosNovos": 31,
          "casosAcumulados": 260,
          "obitosNovos": 4,
          "obitosAcumulados": 7
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "04/04/2020",
          "casosNovos": 51,
          "casosAcumulados": 311,
          "obitosNovos": 5,
          "obitosAcumulados": 12
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "05/04/2020",
          "casosNovos": 106,
          "casosAcumulados": 417,
          "obitosNovos": 2,
          "obitosAcumulados": 14
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "06/04/2020",
          "casosNovos": 115,
          "casosAcumulados": 532,
          "obitosNovos": 5,
          "obitosAcumulados": 19
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "07/04/2020",
          "casosNovos": 104,
          "casosAcumulados": 636,
          "obitosNovos": 4,
          "obitosAcumulados": 23
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "08/04/2020",
          "casosNovos": 168,
          "casosAcumulados": 804,
          "obitosNovos": 7,
          "obitosAcumulados": 30
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "09/04/2020",
          "casosNovos": 95,
          "casosAcumulados": 899,
          "obitosNovos": 10,
          "obitosAcumulados": 40
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "10/04/2020",
          "casosNovos": 82,
          "casosAcumulados": 981,
          "obitosNovos": 10,
          "obitosAcumulados": 50
        },
        {
          "regiao": "Norte",
          "estado": "AM",
          "data": "11/04/2020",
          "casosNovos": 69,
          "casosAcumulados": 1050,
          "obitosNovos": 3,
          "obitosAcumulados": 53
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "17/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "18/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "19/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "20/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "21/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "22/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "23/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "24/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "25/03/2020",
          "casosNovos": 6,
          "casosAcumulados": 8,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "26/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 8,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "27/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 10,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "28/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 12,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "29/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "30/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "31/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "01/04/2020",
          "casosNovos": 6,
          "casosAcumulados": 22,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "02/04/2020",
          "casosNovos": 4,
          "casosAcumulados": 26,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "03/04/2020",
          "casosNovos": 4,
          "casosAcumulados": 30,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "04/04/2020",
          "casosNovos": 7,
          "casosAcumulados": 37,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "05/04/2020",
          "casosNovos": 5,
          "casosAcumulados": 42,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "06/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 42,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "07/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 42,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "08/04/2020",
          "casosNovos": 7,
          "casosAcumulados": 49,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "09/04/2020",
          "casosNovos": 3,
          "casosAcumulados": 52,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "10/04/2020",
          "casosNovos": 11,
          "casosAcumulados": 63,
          "obitosNovos": 2,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Norte",
          "estado": "RR",
          "data": "11/04/2020",
          "casosNovos": 12,
          "casosAcumulados": 75,
          "obitosNovos": 0,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "17/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "18/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "19/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "20/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "21/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "22/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 4,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "23/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 5,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "24/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 5,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "25/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 7,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "26/03/2020",
          "casosNovos": 6,
          "casosAcumulados": 13,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "27/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 13,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "28/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 17,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "29/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 18,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "30/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 21,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "31/03/2020",
          "casosNovos": 11,
          "casosAcumulados": 32,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "01/04/2020",
          "casosNovos": 8,
          "casosAcumulados": 40,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "02/04/2020",
          "casosNovos": 6,
          "casosAcumulados": 46,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "03/04/2020",
          "casosNovos": 4,
          "casosAcumulados": 50,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "04/04/2020",
          "casosNovos": 30,
          "casosAcumulados": 80,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "05/04/2020",
          "casosNovos": 6,
          "casosAcumulados": 86,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "06/04/2020",
          "casosNovos": 16,
          "casosAcumulados": 102,
          "obitosNovos": 2,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "07/04/2020",
          "casosNovos": 36,
          "casosAcumulados": 138,
          "obitosNovos": 2,
          "obitosAcumulados": 5
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "08/04/2020",
          "casosNovos": 29,
          "casosAcumulados": 167,
          "obitosNovos": 1,
          "obitosAcumulados": 6
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "09/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 168,
          "obitosNovos": 1,
          "obitosAcumulados": 7
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "10/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 170,
          "obitosNovos": 2,
          "obitosAcumulados": 9
        },
        {
          "regiao": "Norte",
          "estado": "PA",
          "data": "11/04/2020",
          "casosNovos": 47,
          "casosAcumulados": 217,
          "obitosNovos": 1,
          "obitosAcumulados": 10
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "17/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "18/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "19/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "20/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "21/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "22/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "23/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "24/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "25/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "26/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "27/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "28/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 4,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "29/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 4,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "30/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 8,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "31/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 10,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "01/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 11,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "02/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 11,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "03/04/2020",
          "casosNovos": 8,
          "casosAcumulados": 19,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "04/04/2020",
          "casosNovos": 9,
          "casosAcumulados": 28,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "05/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 29,
          "obitosNovos": 1,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "06/04/2020",
          "casosNovos": 5,
          "casosAcumulados": 34,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "07/04/2020",
          "casosNovos": 14,
          "casosAcumulados": 48,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "08/04/2020",
          "casosNovos": 59,
          "casosAcumulados": 107,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "09/04/2020",
          "casosNovos": 21,
          "casosAcumulados": 128,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "10/04/2020",
          "casosNovos": 38,
          "casosAcumulados": 166,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Norte",
          "estado": "AP",
          "data": "11/04/2020",
          "casosNovos": 27,
          "casosAcumulados": 193,
          "obitosNovos": 1,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "17/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "18/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "19/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "20/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "21/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "22/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "23/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 5,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "24/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 7,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "25/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 7,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "26/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 7,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "27/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 8,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "28/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 9,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "29/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 9,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "30/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 10,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "31/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 11,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "01/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 12,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "02/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 12,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "03/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 12,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "04/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 14,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "05/04/2020",
          "casosNovos": 3,
          "casosAcumulados": 17,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "06/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 17,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "07/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 19,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "08/04/2020",
          "casosNovos": 4,
          "casosAcumulados": 23,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "09/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 23,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "10/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 23,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Norte",
          "estado": "TO",
          "data": "11/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 23,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "17/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "18/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "19/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "20/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "21/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "22/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "23/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "24/03/2020",
          "casosNovos": 6,
          "casosAcumulados": 8,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "25/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 8,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "26/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 10,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "27/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 13,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "28/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 14,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "29/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "30/03/2020",
          "casosNovos": 7,
          "casosAcumulados": 23,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "31/03/2020",
          "casosNovos": 8,
          "casosAcumulados": 31,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "01/04/2020",
          "casosNovos": 21,
          "casosAcumulados": 52,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "02/04/2020",
          "casosNovos": 19,
          "casosAcumulados": 71,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "03/04/2020",
          "casosNovos": 10,
          "casosAcumulados": 81,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "04/04/2020",
          "casosNovos": 7,
          "casosAcumulados": 88,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "05/04/2020",
          "casosNovos": 8,
          "casosAcumulados": 96,
          "obitosNovos": 1,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "06/04/2020",
          "casosNovos": 37,
          "casosAcumulados": 133,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "07/04/2020",
          "casosNovos": 39,
          "casosAcumulados": 172,
          "obitosNovos": 2,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "08/04/2020",
          "casosNovos": 58,
          "casosAcumulados": 230,
          "obitosNovos": 7,
          "obitosAcumulados": 11
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "09/04/2020",
          "casosNovos": 43,
          "casosAcumulados": 273,
          "obitosNovos": 1,
          "obitosAcumulados": 12
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "10/04/2020",
          "casosNovos": 20,
          "casosAcumulados": 293,
          "obitosNovos": 4,
          "obitosAcumulados": 16
        },
        {
          "regiao": "Nordeste",
          "estado": "MA",
          "data": "11/04/2020",
          "casosNovos": 51,
          "casosAcumulados": 344,
          "obitosNovos": 5,
          "obitosAcumulados": 21
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "17/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "18/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "19/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "20/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "21/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 4,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "22/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 4,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "23/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "24/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "25/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 8,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "26/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 9,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "27/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 9,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "28/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 11,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "29/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 14,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "30/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 16,
          "obitosNovos": 2,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "31/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 18,
          "obitosNovos": 1,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "01/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 18,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "02/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 19,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "03/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 21,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "04/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 22,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "05/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 23,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "06/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 23,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "07/04/2020",
          "casosNovos": 5,
          "casosAcumulados": 28,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "08/04/2020",
          "casosNovos": 3,
          "casosAcumulados": 31,
          "obitosNovos": 1,
          "obitosAcumulados": 5
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "09/04/2020",
          "casosNovos": 7,
          "casosAcumulados": 38,
          "obitosNovos": 1,
          "obitosAcumulados": 6
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "10/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 40,
          "obitosNovos": 1,
          "obitosAcumulados": 7
        },
        {
          "regiao": "Nordeste",
          "estado": "PI",
          "data": "11/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 41,
          "obitosNovos": 0,
          "obitosAcumulados": 7
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "17/03/2020",
          "casosNovos": 5,
          "casosAcumulados": 5,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "18/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 9,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "19/03/2020",
          "casosNovos": 11,
          "casosAcumulados": 20,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "20/03/2020",
          "casosNovos": 35,
          "casosAcumulados": 55,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "21/03/2020",
          "casosNovos": 13,
          "casosAcumulados": 68,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "22/03/2020",
          "casosNovos": 44,
          "casosAcumulados": 112,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "23/03/2020",
          "casosNovos": 51,
          "casosAcumulados": 163,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "24/03/2020",
          "casosNovos": 19,
          "casosAcumulados": 182,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "25/03/2020",
          "casosNovos": 18,
          "casosAcumulados": 200,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "26/03/2020",
          "casosNovos": 35,
          "casosAcumulados": 235,
          "obitosNovos": 3,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "27/03/2020",
          "casosNovos": 47,
          "casosAcumulados": 282,
          "obitosNovos": 0,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "28/03/2020",
          "casosNovos": 32,
          "casosAcumulados": 314,
          "obitosNovos": 1,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "29/03/2020",
          "casosNovos": 34,
          "casosAcumulados": 348,
          "obitosNovos": 1,
          "obitosAcumulados": 5
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "30/03/2020",
          "casosNovos": 24,
          "casosAcumulados": 372,
          "obitosNovos": 0,
          "obitosAcumulados": 5
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "31/03/2020",
          "casosNovos": 18,
          "casosAcumulados": 390,
          "obitosNovos": 2,
          "obitosAcumulados": 7
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "01/04/2020",
          "casosNovos": 54,
          "casosAcumulados": 444,
          "obitosNovos": 1,
          "obitosAcumulados": 8
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "02/04/2020",
          "casosNovos": 106,
          "casosAcumulados": 550,
          "obitosNovos": 12,
          "obitosAcumulados": 20
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "03/04/2020",
          "casosNovos": 77,
          "casosAcumulados": 627,
          "obitosNovos": 2,
          "obitosAcumulados": 22
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "04/04/2020",
          "casosNovos": 103,
          "casosAcumulados": 730,
          "obitosNovos": 0,
          "obitosAcumulados": 22
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "05/04/2020",
          "casosNovos": 93,
          "casosAcumulados": 823,
          "obitosNovos": 4,
          "obitosAcumulados": 26
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "06/04/2020",
          "casosNovos": 190,
          "casosAcumulados": 1013,
          "obitosNovos": 3,
          "obitosAcumulados": 29
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "07/04/2020",
          "casosNovos": 38,
          "casosAcumulados": 1051,
          "obitosNovos": 2,
          "obitosAcumulados": 31
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "08/04/2020",
          "casosNovos": 240,
          "casosAcumulados": 1291,
          "obitosNovos": 12,
          "obitosAcumulados": 43
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "09/04/2020",
          "casosNovos": 134,
          "casosAcumulados": 1425,
          "obitosNovos": 12,
          "obitosAcumulados": 55
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "10/04/2020",
          "casosNovos": 53,
          "casosAcumulados": 1478,
          "obitosNovos": 3,
          "obitosAcumulados": 58
        },
        {
          "regiao": "Nordeste",
          "estado": "CE",
          "data": "11/04/2020",
          "casosNovos": 104,
          "casosAcumulados": 1582,
          "obitosNovos": 9,
          "obitosAcumulados": 67
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "13/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "17/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "18/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "19/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "20/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "21/03/2020",
          "casosNovos": 5,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "22/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 9,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "23/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 13,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "24/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 13,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "25/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 14,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "26/03/2020",
          "casosNovos": 5,
          "casosAcumulados": 19,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "27/03/2020",
          "casosNovos": 9,
          "casosAcumulados": 28,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "28/03/2020",
          "casosNovos": 17,
          "casosAcumulados": 45,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "29/03/2020",
          "casosNovos": 23,
          "casosAcumulados": 68,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "30/03/2020",
          "casosNovos": 9,
          "casosAcumulados": 77,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "31/03/2020",
          "casosNovos": 5,
          "casosAcumulados": 82,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "01/04/2020",
          "casosNovos": 10,
          "casosAcumulados": 92,
          "obitosNovos": 1,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "02/04/2020",
          "casosNovos": 13,
          "casosAcumulados": 105,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "03/04/2020",
          "casosNovos": 71,
          "casosAcumulados": 176,
          "obitosNovos": 2,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "04/04/2020",
          "casosNovos": 36,
          "casosAcumulados": 212,
          "obitosNovos": 1,
          "obitosAcumulados": 5
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "05/04/2020",
          "casosNovos": 30,
          "casosAcumulados": 242,
          "obitosNovos": 2,
          "obitosAcumulados": 7
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "06/04/2020",
          "casosNovos": 4,
          "casosAcumulados": 246,
          "obitosNovos": 0,
          "obitosAcumulados": 7
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "07/04/2020",
          "casosNovos": 8,
          "casosAcumulados": 254,
          "obitosNovos": 1,
          "obitosAcumulados": 8
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "08/04/2020",
          "casosNovos": 7,
          "casosAcumulados": 261,
          "obitosNovos": 3,
          "obitosAcumulados": 11
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "09/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 261,
          "obitosNovos": 0,
          "obitosAcumulados": 11
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "10/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 263,
          "obitosNovos": 0,
          "obitosAcumulados": 11
        },
        {
          "regiao": "Nordeste",
          "estado": "RN",
          "data": "11/04/2020",
          "casosNovos": 26,
          "casosAcumulados": 289,
          "obitosNovos": 2,
          "obitosAcumulados": 13
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "17/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "18/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "19/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "20/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "21/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "22/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "23/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "24/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "25/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "26/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 5,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "27/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 9,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "28/03/2020",
          "casosNovos": 5,
          "casosAcumulados": 14,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "29/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 14,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "30/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 15,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "31/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 17,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "01/04/2020",
          "casosNovos": 3,
          "casosAcumulados": 20,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "02/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 21,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "03/04/2020",
          "casosNovos": 8,
          "casosAcumulados": 29,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "04/04/2020",
          "casosNovos": 3,
          "casosAcumulados": 32,
          "obitosNovos": 1,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "05/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 34,
          "obitosNovos": 2,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "06/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 35,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "07/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 36,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "08/04/2020",
          "casosNovos": 5,
          "casosAcumulados": 41,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "09/04/2020",
          "casosNovos": 14,
          "casosAcumulados": 55,
          "obitosNovos": 3,
          "obitosAcumulados": 7
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "10/04/2020",
          "casosNovos": 24,
          "casosAcumulados": 79,
          "obitosNovos": 4,
          "obitosAcumulados": 11
        },
        {
          "regiao": "Nordeste",
          "estado": "PB",
          "data": "11/04/2020",
          "casosNovos": 6,
          "casosAcumulados": 85,
          "obitosNovos": 0,
          "obitosAcumulados": 11
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "12/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "17/03/2020",
          "casosNovos": 14,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "18/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "19/03/2020",
          "casosNovos": 12,
          "casosAcumulados": 28,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "20/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 30,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "21/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 30,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "22/03/2020",
          "casosNovos": 7,
          "casosAcumulados": 37,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "23/03/2020",
          "casosNovos": 5,
          "casosAcumulados": 42,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "24/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 42,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "25/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 46,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "26/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 48,
          "obitosNovos": 2,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "27/03/2020",
          "casosNovos": 8,
          "casosAcumulados": 56,
          "obitosNovos": 1,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "28/03/2020",
          "casosNovos": 12,
          "casosAcumulados": 68,
          "obitosNovos": 1,
          "obitosAcumulados": 5
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "29/03/2020",
          "casosNovos": 5,
          "casosAcumulados": 73,
          "obitosNovos": 0,
          "obitosAcumulados": 5
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "30/03/2020",
          "casosNovos": 5,
          "casosAcumulados": 78,
          "obitosNovos": 1,
          "obitosAcumulados": 6
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "31/03/2020",
          "casosNovos": 9,
          "casosAcumulados": 87,
          "obitosNovos": 0,
          "obitosAcumulados": 6
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "01/04/2020",
          "casosNovos": 8,
          "casosAcumulados": 95,
          "obitosNovos": 2,
          "obitosAcumulados": 8
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "02/04/2020",
          "casosNovos": 11,
          "casosAcumulados": 106,
          "obitosNovos": 1,
          "obitosAcumulados": 9
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "03/04/2020",
          "casosNovos": 30,
          "casosAcumulados": 136,
          "obitosNovos": 1,
          "obitosAcumulados": 10
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "04/04/2020",
          "casosNovos": 40,
          "casosAcumulados": 176,
          "obitosNovos": 4,
          "obitosAcumulados": 14
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "05/04/2020",
          "casosNovos": 25,
          "casosAcumulados": 201,
          "obitosNovos": 7,
          "obitosAcumulados": 21
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "06/04/2020",
          "casosNovos": 22,
          "casosAcumulados": 223,
          "obitosNovos": 9,
          "obitosAcumulados": 30
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "07/04/2020",
          "casosNovos": 129,
          "casosAcumulados": 352,
          "obitosNovos": 4,
          "obitosAcumulados": 34
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "08/04/2020",
          "casosNovos": 49,
          "casosAcumulados": 401,
          "obitosNovos": 12,
          "obitosAcumulados": 46
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "09/04/2020",
          "casosNovos": 154,
          "casosAcumulados": 555,
          "obitosNovos": 10,
          "obitosAcumulados": 56
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "10/04/2020",
          "casosNovos": 129,
          "casosAcumulados": 684,
          "obitosNovos": 9,
          "obitosAcumulados": 65
        },
        {
          "regiao": "Nordeste",
          "estado": "PE",
          "data": "11/04/2020",
          "casosNovos": 132,
          "casosAcumulados": 816,
          "obitosNovos": 7,
          "obitosAcumulados": 72
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "08/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "17/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "18/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "19/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 4,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "20/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 5,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "21/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 7,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "22/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 7,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "23/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 7,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "24/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 9,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "25/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 11,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "26/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 11,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "27/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 11,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "28/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 14,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "29/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 17,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "30/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 17,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "31/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 18,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "01/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 18,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "02/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 18,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "03/04/2020",
          "casosNovos": 4,
          "casosAcumulados": 22,
          "obitosNovos": 1,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "04/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 23,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "05/04/2020",
          "casosNovos": 5,
          "casosAcumulados": 28,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "06/04/2020",
          "casosNovos": 3,
          "casosAcumulados": 31,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "07/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 32,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "08/04/2020",
          "casosNovos": 5,
          "casosAcumulados": 37,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "09/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 37,
          "obitosNovos": 1,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "10/04/2020",
          "casosNovos": 8,
          "casosAcumulados": 45,
          "obitosNovos": 0,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Nordeste",
          "estado": "AL",
          "data": "11/04/2020",
          "casosNovos": 3,
          "casosAcumulados": 48,
          "obitosNovos": 0,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "15/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "17/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 4,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "18/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 5,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "19/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "20/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "21/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 10,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "22/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 10,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "23/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 10,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "24/03/2020",
          "casosNovos": 5,
          "casosAcumulados": 15,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "25/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "26/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "27/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "28/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "29/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "30/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "31/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 19,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "01/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 20,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "02/04/2020",
          "casosNovos": 3,
          "casosAcumulados": 23,
          "obitosNovos": 2,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "03/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 25,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "04/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 27,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "05/04/2020",
          "casosNovos": 5,
          "casosAcumulados": 32,
          "obitosNovos": 1,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "06/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 32,
          "obitosNovos": 1,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "07/04/2020",
          "casosNovos": 4,
          "casosAcumulados": 36,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "08/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 36,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "09/04/2020",
          "casosNovos": 3,
          "casosAcumulados": 39,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "10/04/2020",
          "casosNovos": 3,
          "casosAcumulados": 42,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "SE",
          "data": "11/04/2020",
          "casosNovos": 0,
          "casosAcumulados": 42,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "06/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "07/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "17/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "18/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "19/03/2020",
          "casosNovos": 27,
          "casosAcumulados": 30,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "20/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 33,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "21/03/2020",
          "casosNovos": 8,
          "casosAcumulados": 41,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "22/03/2020",
          "casosNovos": 8,
          "casosAcumulados": 49,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "23/03/2020",
          "casosNovos": 14,
          "casosAcumulados": 63,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "24/03/2020",
          "casosNovos": 13,
          "casosAcumulados": 76,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "25/03/2020",
          "casosNovos": 8,
          "casosAcumulados": 84,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "26/03/2020",
          "casosNovos": 20,
          "casosAcumulados": 104,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "27/03/2020",
          "casosNovos": 11,
          "casosAcumulados": 115,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "28/03/2020",
          "casosNovos": 12,
          "casosAcumulados": 127,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "29/03/2020",
          "casosNovos": 27,
          "casosAcumulados": 154,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "30/03/2020",
          "casosNovos": 22,
          "casosAcumulados": 176,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "31/03/2020",
          "casosNovos": 37,
          "casosAcumulados": 213,
          "obitosNovos": 1,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "01/04/2020",
          "casosNovos": 33,
          "casosAcumulados": 246,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "02/04/2020",
          "casosNovos": 21,
          "casosAcumulados": 267,
          "obitosNovos": 1,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "03/04/2020",
          "casosNovos": 15,
          "casosAcumulados": 282,
          "obitosNovos": 2,
          "obitosAcumulados": 5
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "04/04/2020",
          "casosNovos": 50,
          "casosAcumulados": 332,
          "obitosNovos": 2,
          "obitosAcumulados": 7
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "05/04/2020",
          "casosNovos": 69,
          "casosAcumulados": 401,
          "obitosNovos": 2,
          "obitosAcumulados": 9
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "06/04/2020",
          "casosNovos": 30,
          "casosAcumulados": 431,
          "obitosNovos": 1,
          "obitosAcumulados": 10
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "07/04/2020",
          "casosNovos": 25,
          "casosAcumulados": 456,
          "obitosNovos": 2,
          "obitosAcumulados": 12
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "08/04/2020",
          "casosNovos": 41,
          "casosAcumulados": 497,
          "obitosNovos": 3,
          "obitosAcumulados": 15
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "09/04/2020",
          "casosNovos": 62,
          "casosAcumulados": 559,
          "obitosNovos": 4,
          "obitosAcumulados": 19
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "10/04/2020",
          "casosNovos": 45,
          "casosAcumulados": 604,
          "obitosNovos": 0,
          "obitosAcumulados": 19
        },
        {
          "regiao": "Nordeste",
          "estado": "BA",
          "data": "11/04/2020",
          "casosNovos": 31,
          "casosAcumulados": 635,
          "obitosNovos": 2,
          "obitosAcumulados": 21
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "08/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "13/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "16/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 5,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "17/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 7,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "18/03/2020",
          "casosNovos": 8,
          "casosAcumulados": 15,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "19/03/2020",
          "casosNovos": 14,
          "casosAcumulados": 29,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "20/03/2020",
          "casosNovos": 6,
          "casosAcumulados": 35,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "21/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 38,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "22/03/2020",
          "casosNovos": 45,
          "casosAcumulados": 83,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "23/03/2020",
          "casosNovos": 45,
          "casosAcumulados": 128,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "24/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 130,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "25/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 133,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "26/03/2020",
          "casosNovos": 20,
          "casosAcumulados": 153,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "27/03/2020",
          "casosNovos": 36,
          "casosAcumulados": 189,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "28/03/2020",
          "casosNovos": 16,
          "casosAcumulados": 205,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "29/03/2020",
          "casosNovos": 26,
          "casosAcumulados": 231,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "30/03/2020",
          "casosNovos": 30,
          "casosAcumulados": 261,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "31/03/2020",
          "casosNovos": 14,
          "casosAcumulados": 275,
          "obitosNovos": 1,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "01/04/2020",
          "casosNovos": 39,
          "casosAcumulados": 314,
          "obitosNovos": 1,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "02/04/2020",
          "casosNovos": 56,
          "casosAcumulados": 370,
          "obitosNovos": 1,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "03/04/2020",
          "casosNovos": 27,
          "casosAcumulados": 397,
          "obitosNovos": 2,
          "obitosAcumulados": 6
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "04/04/2020",
          "casosNovos": 33,
          "casosAcumulados": 430,
          "obitosNovos": 0,
          "obitosAcumulados": 6
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "05/04/2020",
          "casosNovos": 68,
          "casosAcumulados": 498,
          "obitosNovos": 0,
          "obitosAcumulados": 6
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "06/04/2020",
          "casosNovos": 27,
          "casosAcumulados": 525,
          "obitosNovos": 3,
          "obitosAcumulados": 9
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "07/04/2020",
          "casosNovos": 34,
          "casosAcumulados": 559,
          "obitosNovos": 2,
          "obitosAcumulados": 11
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "08/04/2020",
          "casosNovos": 55,
          "casosAcumulados": 614,
          "obitosNovos": 3,
          "obitosAcumulados": 14
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "09/04/2020",
          "casosNovos": 41,
          "casosAcumulados": 655,
          "obitosNovos": 1,
          "obitosAcumulados": 15
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "10/04/2020",
          "casosNovos": 43,
          "casosAcumulados": 698,
          "obitosNovos": 2,
          "obitosAcumulados": 17
        },
        {
          "regiao": "Sudeste",
          "estado": "MG",
          "data": "11/04/2020",
          "casosNovos": 52,
          "casosAcumulados": 750,
          "obitosNovos": 0,
          "obitosAcumulados": 17
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "06/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "17/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "18/03/2020",
          "casosNovos": 8,
          "casosAcumulados": 9,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "19/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 11,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "20/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 13,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "21/03/2020",
          "casosNovos": 13,
          "casosAcumulados": 26,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "22/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 26,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "23/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 29,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "24/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 33,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "25/03/2020",
          "casosNovos": 6,
          "casosAcumulados": 39,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "26/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 39,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "27/03/2020",
          "casosNovos": 8,
          "casosAcumulados": 47,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "28/03/2020",
          "casosNovos": 6,
          "casosAcumulados": 53,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "29/03/2020",
          "casosNovos": 7,
          "casosAcumulados": 60,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "30/03/2020",
          "casosNovos": 12,
          "casosAcumulados": 72,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "31/03/2020",
          "casosNovos": 12,
          "casosAcumulados": 84,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "01/04/2020",
          "casosNovos": 12,
          "casosAcumulados": 96,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "02/04/2020",
          "casosNovos": 24,
          "casosAcumulados": 120,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "03/04/2020",
          "casosNovos": 19,
          "casosAcumulados": 139,
          "obitosNovos": 3,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "04/04/2020",
          "casosNovos": 14,
          "casosAcumulados": 153,
          "obitosNovos": 1,
          "obitosAcumulados": 5
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "05/04/2020",
          "casosNovos": 13,
          "casosAcumulados": 166,
          "obitosNovos": 1,
          "obitosAcumulados": 6
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "06/04/2020",
          "casosNovos": 28,
          "casosAcumulados": 194,
          "obitosNovos": 0,
          "obitosAcumulados": 6
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "07/04/2020",
          "casosNovos": 15,
          "casosAcumulados": 209,
          "obitosNovos": 0,
          "obitosAcumulados": 6
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "08/04/2020",
          "casosNovos": 18,
          "casosAcumulados": 227,
          "obitosNovos": 0,
          "obitosAcumulados": 6
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "09/04/2020",
          "casosNovos": 46,
          "casosAcumulados": 273,
          "obitosNovos": 0,
          "obitosAcumulados": 6
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "10/04/2020",
          "casosNovos": 27,
          "casosAcumulados": 300,
          "obitosNovos": 1,
          "obitosAcumulados": 7
        },
        {
          "regiao": "Sudeste",
          "estado": "ES",
          "data": "11/04/2020",
          "casosNovos": 49,
          "casosAcumulados": 349,
          "obitosNovos": 2,
          "obitosAcumulados": 9
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "05/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "07/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "08/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "10/03/2020",
          "casosNovos": 5,
          "casosAcumulados": 8,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "11/03/2020",
          "casosNovos": 5,
          "casosAcumulados": 13,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "12/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "14/03/2020",
          "casosNovos": 6,
          "casosAcumulados": 22,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "15/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 24,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "16/03/2020",
          "casosNovos": 7,
          "casosAcumulados": 31,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "17/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 33,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "18/03/2020",
          "casosNovos": 12,
          "casosAcumulados": 45,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "19/03/2020",
          "casosNovos": 20,
          "casosAcumulados": 65,
          "obitosNovos": 2,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "20/03/2020",
          "casosNovos": 44,
          "casosAcumulados": 109,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "21/03/2020",
          "casosNovos": 10,
          "casosAcumulados": 119,
          "obitosNovos": 1,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "22/03/2020",
          "casosNovos": 67,
          "casosAcumulados": 186,
          "obitosNovos": 0,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "23/03/2020",
          "casosNovos": 47,
          "casosAcumulados": 233,
          "obitosNovos": 1,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "24/03/2020",
          "casosNovos": 72,
          "casosAcumulados": 305,
          "obitosNovos": 2,
          "obitosAcumulados": 6
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "25/03/2020",
          "casosNovos": 65,
          "casosAcumulados": 370,
          "obitosNovos": 0,
          "obitosAcumulados": 6
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "26/03/2020",
          "casosNovos": 51,
          "casosAcumulados": 421,
          "obitosNovos": 3,
          "obitosAcumulados": 9
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "27/03/2020",
          "casosNovos": 72,
          "casosAcumulados": 493,
          "obitosNovos": 1,
          "obitosAcumulados": 10
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "28/03/2020",
          "casosNovos": 65,
          "casosAcumulados": 558,
          "obitosNovos": 3,
          "obitosAcumulados": 13
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "29/03/2020",
          "casosNovos": 42,
          "casosAcumulados": 600,
          "obitosNovos": 4,
          "obitosAcumulados": 17
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "30/03/2020",
          "casosNovos": 57,
          "casosAcumulados": 657,
          "obitosNovos": 1,
          "obitosAcumulados": 18
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "31/03/2020",
          "casosNovos": 51,
          "casosAcumulados": 708,
          "obitosNovos": 5,
          "obitosAcumulados": 23
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "01/04/2020",
          "casosNovos": 124,
          "casosAcumulados": 832,
          "obitosNovos": 5,
          "obitosAcumulados": 28
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "02/04/2020",
          "casosNovos": 160,
          "casosAcumulados": 992,
          "obitosNovos": 13,
          "obitosAcumulados": 41
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "03/04/2020",
          "casosNovos": 82,
          "casosAcumulados": 1074,
          "obitosNovos": 6,
          "obitosAcumulados": 47
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "04/04/2020",
          "casosNovos": 172,
          "casosAcumulados": 1246,
          "obitosNovos": 11,
          "obitosAcumulados": 58
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "05/04/2020",
          "casosNovos": 148,
          "casosAcumulados": 1394,
          "obitosNovos": 6,
          "obitosAcumulados": 64
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "06/04/2020",
          "casosNovos": 67,
          "casosAcumulados": 1461,
          "obitosNovos": 7,
          "obitosAcumulados": 71
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "07/04/2020",
          "casosNovos": 227,
          "casosAcumulados": 1688,
          "obitosNovos": 18,
          "obitosAcumulados": 89
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "08/04/2020",
          "casosNovos": 250,
          "casosAcumulados": 1938,
          "obitosNovos": 17,
          "obitosAcumulados": 106
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "09/04/2020",
          "casosNovos": 278,
          "casosAcumulados": 2216,
          "obitosNovos": 16,
          "obitosAcumulados": 122
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "10/04/2020",
          "casosNovos": 248,
          "casosAcumulados": 2464,
          "obitosNovos": 25,
          "obitosAcumulados": 147
        },
        {
          "regiao": "Sudeste",
          "estado": "RJ",
          "data": "11/04/2020",
          "casosNovos": 143,
          "casosAcumulados": 2607,
          "obitosNovos": 8,
          "obitosAcumulados": 155
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "26/02/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "29/02/2020",
          "casosNovos": 1,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "04/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "05/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "06/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 10,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "07/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 13,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "08/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "10/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 19,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "11/03/2020",
          "casosNovos": 11,
          "casosAcumulados": 30,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "12/03/2020",
          "casosNovos": 12,
          "casosAcumulados": 42,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "13/03/2020",
          "casosNovos": 14,
          "casosAcumulados": 56,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "14/03/2020",
          "casosNovos": 9,
          "casosAcumulados": 65,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "15/03/2020",
          "casosNovos": 71,
          "casosAcumulados": 136,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "16/03/2020",
          "casosNovos": 16,
          "casosAcumulados": 152,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "17/03/2020",
          "casosNovos": 12,
          "casosAcumulados": 164,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "18/03/2020",
          "casosNovos": 76,
          "casosAcumulados": 240,
          "obitosNovos": 3,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "19/03/2020",
          "casosNovos": 46,
          "casosAcumulados": 286,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "20/03/2020",
          "casosNovos": 110,
          "casosAcumulados": 396,
          "obitosNovos": 5,
          "obitosAcumulados": 9
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "21/03/2020",
          "casosNovos": 63,
          "casosAcumulados": 459,
          "obitosNovos": 6,
          "obitosAcumulados": 15
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "22/03/2020",
          "casosNovos": 172,
          "casosAcumulados": 631,
          "obitosNovos": 7,
          "obitosAcumulados": 22
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "23/03/2020",
          "casosNovos": 114,
          "casosAcumulados": 745,
          "obitosNovos": 8,
          "obitosAcumulados": 30
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "24/03/2020",
          "casosNovos": 65,
          "casosAcumulados": 810,
          "obitosNovos": 10,
          "obitosAcumulados": 40
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "25/03/2020",
          "casosNovos": 52,
          "casosAcumulados": 862,
          "obitosNovos": 8,
          "obitosAcumulados": 48
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "26/03/2020",
          "casosNovos": 190,
          "casosAcumulados": 1052,
          "obitosNovos": 10,
          "obitosAcumulados": 58
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "27/03/2020",
          "casosNovos": 171,
          "casosAcumulados": 1223,
          "obitosNovos": 10,
          "obitosAcumulados": 68
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "28/03/2020",
          "casosNovos": 183,
          "casosAcumulados": 1406,
          "obitosNovos": 16,
          "obitosAcumulados": 84
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "29/03/2020",
          "casosNovos": 45,
          "casosAcumulados": 1451,
          "obitosNovos": 14,
          "obitosAcumulados": 98
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "30/03/2020",
          "casosNovos": 66,
          "casosAcumulados": 1517,
          "obitosNovos": 15,
          "obitosAcumulados": 113
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "31/03/2020",
          "casosNovos": 822,
          "casosAcumulados": 2339,
          "obitosNovos": 23,
          "obitosAcumulados": 136
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "01/04/2020",
          "casosNovos": 642,
          "casosAcumulados": 2981,
          "obitosNovos": 28,
          "obitosAcumulados": 164
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "02/04/2020",
          "casosNovos": 525,
          "casosAcumulados": 3506,
          "obitosNovos": 24,
          "obitosAcumulados": 188
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "03/04/2020",
          "casosNovos": 542,
          "casosAcumulados": 4048,
          "obitosNovos": 31,
          "obitosAcumulados": 219
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "04/04/2020",
          "casosNovos": 418,
          "casosAcumulados": 4466,
          "obitosNovos": 41,
          "obitosAcumulados": 260
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "05/04/2020",
          "casosNovos": 154,
          "casosAcumulados": 4620,
          "obitosNovos": 15,
          "obitosAcumulados": 275
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "06/04/2020",
          "casosNovos": 246,
          "casosAcumulados": 4866,
          "obitosNovos": 29,
          "obitosAcumulados": 304
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "07/04/2020",
          "casosNovos": 816,
          "casosAcumulados": 5682,
          "obitosNovos": 67,
          "obitosAcumulados": 371
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "08/04/2020",
          "casosNovos": 1026,
          "casosAcumulados": 6708,
          "obitosNovos": 57,
          "obitosAcumulados": 428
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "09/04/2020",
          "casosNovos": 772,
          "casosAcumulados": 7480,
          "obitosNovos": 68,
          "obitosAcumulados": 496
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "10/04/2020",
          "casosNovos": 736,
          "casosAcumulados": 8216,
          "obitosNovos": 44,
          "obitosAcumulados": 540
        },
        {
          "regiao": "Sudeste",
          "estado": "SP",
          "data": "11/04/2020",
          "casosNovos": 203,
          "casosAcumulados": 8419,
          "obitosNovos": 20,
          "obitosAcumulados": 560
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "12/03/2020",
          "casosNovos": 6,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "17/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "18/03/2020",
          "casosNovos": 7,
          "casosAcumulados": 13,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "19/03/2020",
          "casosNovos": 10,
          "casosAcumulados": 23,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "20/03/2020",
          "casosNovos": 9,
          "casosAcumulados": 32,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "21/03/2020",
          "casosNovos": 11,
          "casosAcumulados": 43,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "22/03/2020",
          "casosNovos": 7,
          "casosAcumulados": 50,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "23/03/2020",
          "casosNovos": 6,
          "casosAcumulados": 56,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "24/03/2020",
          "casosNovos": 9,
          "casosAcumulados": 65,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "25/03/2020",
          "casosNovos": 16,
          "casosAcumulados": 81,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "26/03/2020",
          "casosNovos": 21,
          "casosAcumulados": 102,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "27/03/2020",
          "casosNovos": 17,
          "casosAcumulados": 119,
          "obitosNovos": 2,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "28/03/2020",
          "casosNovos": 14,
          "casosAcumulados": 133,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "29/03/2020",
          "casosNovos": 15,
          "casosAcumulados": 148,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "30/03/2020",
          "casosNovos": 7,
          "casosAcumulados": 155,
          "obitosNovos": 1,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "31/03/2020",
          "casosNovos": 24,
          "casosAcumulados": 179,
          "obitosNovos": 0,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "01/04/2020",
          "casosNovos": 45,
          "casosAcumulados": 224,
          "obitosNovos": 0,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "02/04/2020",
          "casosNovos": 28,
          "casosAcumulados": 252,
          "obitosNovos": 1,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "03/04/2020",
          "casosNovos": 49,
          "casosAcumulados": 301,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "04/04/2020",
          "casosNovos": 94,
          "casosAcumulados": 395,
          "obitosNovos": 2,
          "obitosAcumulados": 6
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "05/04/2020",
          "casosNovos": 43,
          "casosAcumulados": 438,
          "obitosNovos": 3,
          "obitosAcumulados": 9
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "06/04/2020",
          "casosNovos": 20,
          "casosAcumulados": 458,
          "obitosNovos": 2,
          "obitosAcumulados": 11
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "07/04/2020",
          "casosNovos": 45,
          "casosAcumulados": 503,
          "obitosNovos": 4,
          "obitosAcumulados": 15
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "08/04/2020",
          "casosNovos": 36,
          "casosAcumulados": 539,
          "obitosNovos": 2,
          "obitosAcumulados": 17
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "09/04/2020",
          "casosNovos": 70,
          "casosAcumulados": 609,
          "obitosNovos": 5,
          "obitosAcumulados": 22
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "10/04/2020",
          "casosNovos": 34,
          "casosAcumulados": 643,
          "obitosNovos": 3,
          "obitosAcumulados": 25
        },
        {
          "regiao": "Sul",
          "estado": "PR",
          "data": "11/04/2020",
          "casosNovos": 33,
          "casosAcumulados": 676,
          "obitosNovos": 1,
          "obitosAcumulados": 26
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "13/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "14/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 4,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "15/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "16/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 7,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "17/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 7,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "18/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 10,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "19/03/2020",
          "casosNovos": 10,
          "casosAcumulados": 20,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "20/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 21,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "21/03/2020",
          "casosNovos": 30,
          "casosAcumulados": 51,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "22/03/2020",
          "casosNovos": 6,
          "casosAcumulados": 57,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "23/03/2020",
          "casosNovos": 11,
          "casosAcumulados": 68,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "24/03/2020",
          "casosNovos": 39,
          "casosAcumulados": 107,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "25/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 109,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "26/03/2020",
          "casosNovos": 13,
          "casosAcumulados": 122,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "27/03/2020",
          "casosNovos": 27,
          "casosAcumulados": 149,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "28/03/2020",
          "casosNovos": 35,
          "casosAcumulados": 184,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "29/03/2020",
          "casosNovos": 10,
          "casosAcumulados": 194,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "30/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 197,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "31/03/2020",
          "casosNovos": 22,
          "casosAcumulados": 219,
          "obitosNovos": 1,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "01/04/2020",
          "casosNovos": 16,
          "casosAcumulados": 235,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "02/04/2020",
          "casosNovos": 12,
          "casosAcumulados": 247,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "03/04/2020",
          "casosNovos": 34,
          "casosAcumulados": 281,
          "obitosNovos": 3,
          "obitosAcumulados": 5
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "04/04/2020",
          "casosNovos": 53,
          "casosAcumulados": 334,
          "obitosNovos": 0,
          "obitosAcumulados": 5
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "05/04/2020",
          "casosNovos": 23,
          "casosAcumulados": 357,
          "obitosNovos": 5,
          "obitosAcumulados": 10
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "06/04/2020",
          "casosNovos": 22,
          "casosAcumulados": 379,
          "obitosNovos": 0,
          "obitosAcumulados": 10
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "07/04/2020",
          "casosNovos": 38,
          "casosAcumulados": 417,
          "obitosNovos": 1,
          "obitosAcumulados": 11
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "08/04/2020",
          "casosNovos": 40,
          "casosAcumulados": 457,
          "obitosNovos": 4,
          "obitosAcumulados": 15
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "09/04/2020",
          "casosNovos": 44,
          "casosAcumulados": 501,
          "obitosNovos": 2,
          "obitosAcumulados": 17
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "10/04/2020",
          "casosNovos": 192,
          "casosAcumulados": 693,
          "obitosNovos": 1,
          "obitosAcumulados": 18
        },
        {
          "regiao": "Sul",
          "estado": "SC",
          "data": "11/04/2020",
          "casosNovos": 39,
          "casosAcumulados": 732,
          "obitosNovos": 3,
          "obitosAcumulados": 21
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "10/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "11/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "12/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 4,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 4,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "14/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "17/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 10,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "18/03/2020",
          "casosNovos": 9,
          "casosAcumulados": 19,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "19/03/2020",
          "casosNovos": 9,
          "casosAcumulados": 28,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "20/03/2020",
          "casosNovos": 9,
          "casosAcumulados": 37,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "21/03/2020",
          "casosNovos": 23,
          "casosAcumulados": 60,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "22/03/2020",
          "casosNovos": 12,
          "casosAcumulados": 72,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "23/03/2020",
          "casosNovos": 14,
          "casosAcumulados": 86,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "24/03/2020",
          "casosNovos": 12,
          "casosAcumulados": 98,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "25/03/2020",
          "casosNovos": 25,
          "casosAcumulados": 123,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "26/03/2020",
          "casosNovos": 45,
          "casosAcumulados": 168,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "27/03/2020",
          "casosNovos": 27,
          "casosAcumulados": 195,
          "obitosNovos": 1,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "28/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 197,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "29/03/2020",
          "casosNovos": 29,
          "casosAcumulados": 226,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "30/03/2020",
          "casosNovos": 15,
          "casosAcumulados": 241,
          "obitosNovos": 1,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "31/03/2020",
          "casosNovos": 33,
          "casosAcumulados": 274,
          "obitosNovos": 1,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "01/04/2020",
          "casosNovos": 32,
          "casosAcumulados": 306,
          "obitosNovos": 0,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "02/04/2020",
          "casosNovos": 28,
          "casosAcumulados": 334,
          "obitosNovos": 1,
          "obitosAcumulados": 5
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "03/04/2020",
          "casosNovos": 62,
          "casosAcumulados": 396,
          "obitosNovos": 0,
          "obitosAcumulados": 5
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "04/04/2020",
          "casosNovos": 14,
          "casosAcumulados": 410,
          "obitosNovos": 1,
          "obitosAcumulados": 6
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "05/04/2020",
          "casosNovos": 8,
          "casosAcumulados": 418,
          "obitosNovos": 1,
          "obitosAcumulados": 7
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "06/04/2020",
          "casosNovos": 63,
          "casosAcumulados": 481,
          "obitosNovos": 0,
          "obitosAcumulados": 7
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "07/04/2020",
          "casosNovos": 27,
          "casosAcumulados": 508,
          "obitosNovos": 1,
          "obitosAcumulados": 8
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "08/04/2020",
          "casosNovos": 47,
          "casosAcumulados": 555,
          "obitosNovos": 1,
          "obitosAcumulados": 9
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "09/04/2020",
          "casosNovos": 63,
          "casosAcumulados": 618,
          "obitosNovos": 3,
          "obitosAcumulados": 12
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "10/04/2020",
          "casosNovos": 18,
          "casosAcumulados": 636,
          "obitosNovos": 2,
          "obitosAcumulados": 14
        },
        {
          "regiao": "Sul",
          "estado": "RS",
          "data": "11/04/2020",
          "casosNovos": 4,
          "casosAcumulados": 640,
          "obitosNovos": 1,
          "obitosAcumulados": 15
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "16/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "17/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 4,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "18/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 7,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "19/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 7,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "20/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 9,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "21/03/2020",
          "casosNovos": 7,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "22/03/2020",
          "casosNovos": 5,
          "casosAcumulados": 21,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "23/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 21,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "24/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 23,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "25/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 24,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "26/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 25,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "27/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 28,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "28/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 31,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "29/03/2020",
          "casosNovos": 5,
          "casosAcumulados": 36,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "30/03/2020",
          "casosNovos": 8,
          "casosAcumulados": 44,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "31/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 48,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "01/04/2020",
          "casosNovos": 3,
          "casosAcumulados": 51,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "02/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 53,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "03/04/2020",
          "casosNovos": 7,
          "casosAcumulados": 60,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "04/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 62,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "05/04/2020",
          "casosNovos": 3,
          "casosAcumulados": 65,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "06/04/2020",
          "casosNovos": 1,
          "casosAcumulados": 66,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "07/04/2020",
          "casosNovos": 14,
          "casosAcumulados": 80,
          "obitosNovos": 1,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "08/04/2020",
          "casosNovos": 5,
          "casosAcumulados": 85,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "09/04/2020",
          "casosNovos": 4,
          "casosAcumulados": 89,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "10/04/2020",
          "casosNovos": 8,
          "casosAcumulados": 97,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MS",
          "data": "11/04/2020",
          "casosNovos": 3,
          "casosAcumulados": 100,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "17/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "18/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "19/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "20/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "21/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "22/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "23/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "24/03/2020",
          "casosNovos": 5,
          "casosAcumulados": 7,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "25/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 8,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "26/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 11,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "27/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 11,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "28/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 13,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "29/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 16,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "30/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 18,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "31/03/2020",
          "casosNovos": 7,
          "casosAcumulados": 25,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "01/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 27,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "02/04/2020",
          "casosNovos": 9,
          "casosAcumulados": 36,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "03/04/2020",
          "casosNovos": 8,
          "casosAcumulados": 44,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "04/04/2020",
          "casosNovos": 12,
          "casosAcumulados": 56,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "05/04/2020",
          "casosNovos": 4,
          "casosAcumulados": 60,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "06/04/2020",
          "casosNovos": 16,
          "casosAcumulados": 76,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "07/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 78,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "08/04/2020",
          "casosNovos": 12,
          "casosAcumulados": 90,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "09/04/2020",
          "casosNovos": 18,
          "casosAcumulados": 108,
          "obitosNovos": 1,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "10/04/2020",
          "casosNovos": 4,
          "casosAcumulados": 112,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "MT",
          "data": "11/04/2020",
          "casosNovos": 9,
          "casosAcumulados": 121,
          "obitosNovos": 1,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "07/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "11/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "13/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "14/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "15/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "16/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 3,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "17/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "18/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 8,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "19/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 12,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "20/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 15,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "21/03/2020",
          "casosNovos": 5,
          "casosAcumulados": 20,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "22/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 21,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "23/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 23,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "24/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 27,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "25/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 29,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "26/03/2020",
          "casosNovos": 10,
          "casosAcumulados": 39,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "27/03/2020",
          "casosNovos": 10,
          "casosAcumulados": 49,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "28/03/2020",
          "casosNovos": 7,
          "casosAcumulados": 56,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "29/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 58,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "30/03/2020",
          "casosNovos": 3,
          "casosAcumulados": 61,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "31/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 65,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "01/04/2020",
          "casosNovos": 6,
          "casosAcumulados": 71,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "02/04/2020",
          "casosNovos": 2,
          "casosAcumulados": 73,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "03/04/2020",
          "casosNovos": 15,
          "casosAcumulados": 88,
          "obitosNovos": 1,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "04/04/2020",
          "casosNovos": 15,
          "casosAcumulados": 103,
          "obitosNovos": 0,
          "obitosAcumulados": 2
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "05/04/2020",
          "casosNovos": 12,
          "casosAcumulados": 115,
          "obitosNovos": 1,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "06/04/2020",
          "casosNovos": 4,
          "casosAcumulados": 119,
          "obitosNovos": 2,
          "obitosAcumulados": 5
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "07/04/2020",
          "casosNovos": 14,
          "casosAcumulados": 133,
          "obitosNovos": 0,
          "obitosAcumulados": 5
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "08/04/2020",
          "casosNovos": 25,
          "casosAcumulados": 158,
          "obitosNovos": 2,
          "obitosAcumulados": 7
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "09/04/2020",
          "casosNovos": 21,
          "casosAcumulados": 179,
          "obitosNovos": 0,
          "obitosAcumulados": 7
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "10/04/2020",
          "casosNovos": 12,
          "casosAcumulados": 191,
          "obitosNovos": 1,
          "obitosAcumulados": 8
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "GO",
          "data": "11/04/2020",
          "casosNovos": 18,
          "casosAcumulados": 209,
          "obitosNovos": 2,
          "obitosAcumulados": 10
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "30/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "31/01/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "01/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "02/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "03/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "04/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "05/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "06/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "07/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "08/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "09/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "10/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "11/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "12/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "13/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "14/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "15/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "16/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "17/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "18/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "19/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "20/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "21/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "22/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "23/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "24/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "25/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "26/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "27/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "28/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "29/02/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "01/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "02/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "03/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "04/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "05/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "06/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 0,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "07/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "08/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "09/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "10/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 1,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "11/03/2020",
          "casosNovos": 1,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "12/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "13/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 2,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "14/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 6,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "15/03/2020",
          "casosNovos": 2,
          "casosAcumulados": 8,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "16/03/2020",
          "casosNovos": 5,
          "casosAcumulados": 13,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "17/03/2020",
          "casosNovos": 9,
          "casosAcumulados": 22,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "18/03/2020",
          "casosNovos": 4,
          "casosAcumulados": 26,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "19/03/2020",
          "casosNovos": 16,
          "casosAcumulados": 42,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "20/03/2020",
          "casosNovos": 45,
          "casosAcumulados": 87,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "21/03/2020",
          "casosNovos": 13,
          "casosAcumulados": 100,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "22/03/2020",
          "casosNovos": 17,
          "casosAcumulados": 117,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "23/03/2020",
          "casosNovos": 16,
          "casosAcumulados": 133,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "24/03/2020",
          "casosNovos": 27,
          "casosAcumulados": 160,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "25/03/2020",
          "casosNovos": 0,
          "casosAcumulados": 160,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "26/03/2020",
          "casosNovos": 40,
          "casosAcumulados": 200,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "27/03/2020",
          "casosNovos": 30,
          "casosAcumulados": 230,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "28/03/2020",
          "casosNovos": 30,
          "casosAcumulados": 260,
          "obitosNovos": 0,
          "obitosAcumulados": 0
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "29/03/2020",
          "casosNovos": 29,
          "casosAcumulados": 289,
          "obitosNovos": 1,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "30/03/2020",
          "casosNovos": 23,
          "casosAcumulados": 312,
          "obitosNovos": 0,
          "obitosAcumulados": 1
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "31/03/2020",
          "casosNovos": 20,
          "casosAcumulados": 332,
          "obitosNovos": 2,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "01/04/2020",
          "casosNovos": 23,
          "casosAcumulados": 355,
          "obitosNovos": 0,
          "obitosAcumulados": 3
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "02/04/2020",
          "casosNovos": 15,
          "casosAcumulados": 370,
          "obitosNovos": 1,
          "obitosAcumulados": 4
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "03/04/2020",
          "casosNovos": 32,
          "casosAcumulados": 402,
          "obitosNovos": 1,
          "obitosAcumulados": 5
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "04/04/2020",
          "casosNovos": 52,
          "casosAcumulados": 454,
          "obitosNovos": 2,
          "obitosAcumulados": 7
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "05/04/2020",
          "casosNovos": 14,
          "casosAcumulados": 468,
          "obitosNovos": 0,
          "obitosAcumulados": 7
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "06/04/2020",
          "casosNovos": 5,
          "casosAcumulados": 473,
          "obitosNovos": 3,
          "obitosAcumulados": 10
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "07/04/2020",
          "casosNovos": 19,
          "casosAcumulados": 492,
          "obitosNovos": 2,
          "obitosAcumulados": 12
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "08/04/2020",
          "casosNovos": 17,
          "casosAcumulados": 509,
          "obitosNovos": 0,
          "obitosAcumulados": 12
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "09/04/2020",
          "casosNovos": 18,
          "casosAcumulados": 527,
          "obitosNovos": 1,
          "obitosAcumulados": 13
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "10/04/2020",
          "casosNovos": 28,
          "casosAcumulados": 555,
          "obitosNovos": 1,
          "obitosAcumulados": 14
        },
        {
          "regiao": "Centro-Oeste",
          "estado": "DF",
          "data": "11/04/2020",
          "casosNovos": 24,
          "casosAcumulados": 579,
          "obitosNovos": 0,
          "obitosAcumulados": 14
        }
    ]
};

export default {getTotalCasosAtivos, getTotalObitos, getJsonDataSource, getDataAtualizacao}; 