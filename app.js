import modificador from "./modificador.js"

console.log(modificador)

var ingredientes = ["salada", "batata", "tomate", "agriao"];
var resultadoCaptalizado = modificador.captalizar(ingredientes)
var resultadoOrdenado = modificador.ordenar(resultadoCaptalizado)

console.log(resultadoCaptalizado);
console.log(resultadoOrdenado);
