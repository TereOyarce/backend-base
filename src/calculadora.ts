function operar(operacion: string, a: number, b: number) {

    switch (operacion) {
        case 'suma':
            return suma(a, b);
        case 'resta':
            return restar(a, b);
        case 'multiplicar':
            return multiplicar(a, b);
        case 'dividir':
            return dividir(a, b);
        case 'potencia':
            return potencia(a, b);
        case 'factorial':
            return factorial(a, b);

    }
}

function suma(a: number, b: number) {

    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede sumar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a + b;
}

function restar(a: number, b: number) {
    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede restar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a - b;
}

function multiplicar(a: number, b: number) {
    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede multiplicar indefinidos");
    }

    if (isNaN(a) || isNaN(b)) {
        return NaN;
    }

    return a * b;
}

function dividir(a: number, b: number) {
    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede dividir indefinidos");
    }

    if (isNaN(a) || isNaN(b)) {
        return NaN;
    }

    return a / b;
}
function potencia(a: number, b: number) {
    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede sacar potencia de un indefinido");
    }

    if (isNaN(a) || isNaN(b)) {
        return NaN
    }
    return Math.pow(a, b)
}

function factorial(a: number, b: number) {
    if (typeof a !== 'number' || a < 0 || !Number.isInteger(a)) {
        return 'El parámetro debe ser un número entero no negativo.';
    }
    if (a === 0) {
        return 1;
    }
    let resultado = 1;
    for (let i = 1; i <= a; i++) {
        resultado *= i;
    }

    return resultado;
}

export { suma, operar, restar, multiplicar, dividir, potencia, factorial };