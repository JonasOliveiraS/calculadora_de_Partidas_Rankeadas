
var saldoVitorias;
    nivelVitorias = calculadorNivel(saldoVitorias)

function calculadorVitorioas(vitorias, derrotas) {
    return vitorias - derrotas;
}

function calculadorNivel() {
    if (saldoVitorias < 10) {
        return "Ferro"
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        return "Bronze"
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50){
        return 'Prata'
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80){
        return 'Ouro'
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90){
        return 'Diamate'
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100){
        return 'Lendário'
    } else {
        return 'Imortal'
    }
}

calculadorVitorioas(200, 0);

console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivelVitorias}`)
