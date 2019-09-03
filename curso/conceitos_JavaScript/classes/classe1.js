class Lancameno {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloCinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.Lancameno = []
    }

    addLancamento(...Lancameno){
        Lancameno.forEach(l => this.Lancameno.push(l))
    }

    sumario(){
        let valorConsolildado = 0
        this.Lancameno.forEach(l => {
            valorConsolildado += l.valor
        })
        return valorConsolildado
    }
}

const salario = new Lancameno('Salario', 5000)
const contaDeLuz = new Lancameno('Luz', -110)

const contas = new CicloCinanceiro(6, 2018)
contas.addLancamento(salario, contaDeLuz)
console.log(contas.sumario())