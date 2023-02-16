function fnCaptalizar(ingredientes){
    var modificado = [];

    for(var i=0; i < ingredientes.length; i++){
        var primeiraLetra = ingredientes[i].charAt(0).toUpperCase();
        var restoPalavra = ingredientes[i].slice(1);
        var captalização = primeiraLetra + restoPalavra;
        modificado[i] = captalização;
    }
    
    return modificado;
}

function fnOrdenar(vetor){
    return vetor.sort(function(a,b){
        return a.localeCompare(b);
    });
}

function fnCaixaAlta(vetor){
    var modificado = [];

    for(let i = 0; i < vetor.lenght; i++){
        modificado[i] = vetor[i].toUpperCase();
    }

    return modificado;
}

export default {
    captalizar: fnCaptalizar,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
}