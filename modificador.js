function fnCaptalizar(ingredientes){
    var modificado = [];

    for(var i=0; i < ingredientes.length; i++){
        var letraInicial = ingredientes[i].charAt(0).toUpperCase();
        var restoTexto = ingredientes[i].slice(1);
        var result = letraInicial + restoTexto;
        modificado[i] = result
    }
    
    return modificado;
}

function fnOrdenar(ingredientes){
    return ingredientes.sort(function(a,b){
        var c = a.localeCompare(b)
    });
}

function fnCaixaAlta(ingredientes){
    var modificado = [];

    for(let i = 0; i < ingredientes.lenght; i++){
        modificado[i] = ingredientes[i].toUpperCase();
    }

    return modificado;
}

export default {
    captalizar: fnCaptalizar,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
}