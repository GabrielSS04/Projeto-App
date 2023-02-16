import modificador from "./modificador.js"
import ingredientes from "./ingredientes.js"

console.log(modificador)

var ingredientes = ['mel', 'água', 'sal', 'mostarda'];
var ingredientesCap = modificador.captalizar(ingredientes)
var ingredientesOrd = modificador.ordenar(ingredientesCap)

console.log(ingredientesOrd)