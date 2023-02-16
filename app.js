import modificador from "./modificador.js"
import ingredientes from "./ingredientes.js"

var ingredientesOrd = modificador.ordenar(ingredientes);
var ingredientesCap = modificador.captalizar(ingredientesOrd);

console.log(ingredientesOrd)