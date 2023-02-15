function fnOrdenar(vetor){
    return vetor.sort(function(a,b){
        return a.localeCompare(b);
    });
}

function fnCaptalizar(colecao){

    var modificado = []

    for(let i = 0; i < colecao.lenght; i++){
        var primeiraLetra = colecao[i].charAt(0).toUpperCase()
        var restoPalavra = colecao[i].slice(0)
        var captalização = primeiraLetra + restoPalavra
        modificado[i] = captalização
    }

    return modificado
}

export default{
    captalizar: fnCaptalizar,
    ordenar: fnOrdenar
}