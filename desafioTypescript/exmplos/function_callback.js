"use strict";
function printValoresNumericos(a, b) {
    console.log(a + b);
}
function somarValoresNumericosTratar(a, b, callback) {
    let resultado = a + b;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosTratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosTratar(1, 3, dividirPorEleMesmo));
