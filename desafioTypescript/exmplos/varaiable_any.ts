let valorAny: any;

valorAny = 3
valorAny = 'algo'
valorAny = true

let valorString: string = 'teste'
valorString = valorAny
let valorString2: string = 'testao'
valorString2 = valorAny

function somarStrings(string1: string, string2: string) {
    console.log(string1 + string2)
}

somarStrings('olá', ', como vai?')