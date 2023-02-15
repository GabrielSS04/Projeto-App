var vetor = ["salada", "batata", "tomate", "agriao"];

function fnOrdenar(vetor){
    return vetor.sort(function(a,b){
        return a.localeCompare(b);
    });
}

function fnCaptalizar(colecao){

    var modificado = []

    for(let i = 0; i < vetor.lenght; i++){
        let primeiraLetra = colecao[i].charAt(0).toUpperCase()
        let restoPalavra = colecao[i].slice(0)
        let captalização = primeiraLetra + restoPalavra
        modificado[i] = captalização
    }

    return modificado
}

export default{
    captalizar: fnCaptalizar,
    ordenar: fnOrdenar
}