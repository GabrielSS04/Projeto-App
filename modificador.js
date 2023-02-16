/*function fnCaptalizar(ingredientes){
    var modificado = [];

    for(var i=0; i < ingredientes.length; i++){
        var letraInicial = ingredientes[i].charAt(0).toUpperCase();
        var restoTexto = ingredientes[i].slice(1);
        var result = letraInicial + restoTexto;
        modificado[i] = result
    }
    
    return modificado;
}*/

function fnOrdenar(vetor){
    return vetor.sort(function(a,b){
        return a.localeCompare(b);
    });
}

export default {
    ordenar: fnOrdenar
}