import modificador from "./modificador.js"

var ingredientes = ["salada", "batata", "tomate", "agriao"];

var resultadoCaptalizado = modificador.captalizar(ingredientes)

console.log(resultadoCaptalizado);


var resultadoOrdenado = modificador.ordenar(resultadoCaptalizado)

console.log(resultadoOrdenado);
