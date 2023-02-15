function fnOrdenar(vetor){
    return vetor.sort(function(a,b){
        return a.localeCompare(b);
    });
}

function fnCaptalizar(colecao){
    for(let i = 0; i < vetor.lenght; i++){
        let primeiraLetra = colecao[i].charAt(0).toUpperCase()
        let restoPalavra = colecao[i].slice(0)
        let captalização = primeiraLetra + restoPalavra
        colecao[i] = captalização
    }

    return colecao
}

export default{
    captalizar: fnCaptalizar,
    ordenar: fnOrdenar
}