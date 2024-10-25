const {sumar, restar, multiplicar, dividir, residuo} = require('../operaciones.js');

// const sumar = require('../operaciones.js').sumar;
// const restar = require('../operaciones.js').restar;
// const multiplicar = require('../operaciones.js').multiplicar; 
// const dividir = require('../operaciones.js').dividir;

describe("Probando la funcion suma ", () => {
    
test('Prueba de la suma 0+0 = 0', () => {
    expect(sumar(0,0)).toBe(0);
})
test('Prueba de la suma 3 + 2 = 5', () => {
    expect(sumar(3,2)).toBe(5);
})

})

describe("Probando la funcion suma ", () => {
    
test('Prueba de la resta', () => {
    expect(restar(4,0)).toBe(4);
    expect(restar(6,1)).toBe(5);
    expect(restar(0,1)).toBe(-1);
    expect(restar(1,1)).toBe(0);
})
})

describe("Probando la funcion suma ", () => {
    
test('Prueba de la multiplicacion', () => {
    expect(multiplicar(8,0)).toBe(0);
    expect(multiplicar(10,1)).toBe(10);
    expect(multiplicar(0,1)).toBe(0);
    expect(multiplicar(-1,1)).toBe(-1);
})
})

describe("Probando la funcion suma ", () => {

test('Prueba de la division', () => {
    expect(dividir(12,2)).toBe(6);
    expect(dividir(14,1)).toBe(14);
    expect(dividir(0,1)).toBe(0);
    expect(dividir(1,1)).toBe(1);
})
})

describe("Probando funcion de residuo",() => {

    test('Probando que un numero par % 2 sea == 0', () => {
        expect(residuo(4,2)).toBe(0);
})
    test('Probando que un numero impar % 2 sea == 1', () => {
        expect(residuo(17,2)).toBeGreaterThan(0);
})  
    test('Probando un string enviado a la funcion', () => {
        expect(residuo('hola',2)).toBeNaN();
})

})