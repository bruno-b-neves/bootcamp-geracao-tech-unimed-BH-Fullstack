function printValoresNumericos(a:number, b:number): void {
    console.log(a + b)
}

function somarValoresNumericosTratar(a: number, b: number, callback: (numero: number) => number): number {
    let resultado = a + b
    return callback(resultado);
}

function aoQuadrado (numero: number): number {
    return numero * numero
}

function dividirPorEleMesmo(numero: number) : number {
    return numero / numero
}

console.log(somarValoresNumericosTratar(1, 3, aoQuadrado))
console.log(somarValoresNumericosTratar(1, 3, dividirPorEleMesmo))
