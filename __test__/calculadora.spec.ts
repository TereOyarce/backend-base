import { describe, test, expect } from "@jest/globals";
import { restar, suma, operar,dividir,multiplicar,potencia,factorial } from "../src/calculadora.js";
import app from "../src/server.js";
import request from "supertest";

describe("Calculadora", () => {

    test("sumar dos numeros", () => {

        let a: any = 100;
        let b: any = 200;
        expect(suma(a, b)).toBe(300);

        a = 10;
        b = "a";
        expect(suma(a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { suma(a, b) }).toThrow("No se puede sumar indefinidos");

    });

    test("operar dos numeros", () => {

        let a: any = 10;
        let b: any = 20;
        expect(operar("resta", b, a)).toBe(10);
        expect(operar("multiplicar",a,b)).toBe(200);
        expect(operar("dividir",a,b)).toBe(0.5);
       
        a=2;
        b=3;
        expect(operar("potencia",a,b)).toBe(8);

        a=5;
        b=1;
        expect(operar("factorial",a,b)).toBe(120);




        a = 10;
        b = "a";
        expect(operar("suma", a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { operar("suma", a, b) }).toThrow("No se puede sumar indefinidos");

    });

    test("restar dos numeros", () => {

        let a: any = 100;
        let b: any = 200;
        expect(restar(b, a)).toBe(100);

        a = 10;
        b = "a";
        expect(restar(a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { restar(a, b) }).toThrow("No se puede restar indefinidos");
    });
    test("dividir dos numeros",()=>{
        let a:any = 200;
        let b:any = 100;
        expect(dividir(a,b)).toBe(2);

        a= 10;
        b= NaN
        expect(dividir(a, b)).toBeNaN();

        a=undefined;
        b=5;
        expect(() =>  { dividir(a, b) }).toThrow('No se puede dividir indefinidos');

    })

    test("multiplicar dos numeros",()=>{
        let a :any = 5;
        let b : any= 10;
        expect(multiplicar(a,b)).toBe(50);

        a= 10;
        b= NaN;
        expect(multiplicar(a, b)).toBeNaN();
        

        a=undefined;
        b=5;
        expect(() => multiplicar(a, b)).toThrow('No se puede multiplicar indefinidos');
    });

    test("potencia de dos numeros",()=>{
        let a: any = 2;
        let b:any = 3;
        expect(potencia(a,b)).toBe(8);

        a = 2;
        b = NaN;
        expect((potencia(a,b))).toBeNaN();

        a = 2;
        b = undefined;
        expect(() => potencia(a, b)).toThrow('No se puede sacar potencia de un indefinido');

    });

    test("factorial de un numero",()=>{
        let a : any = 5 ;
        let b : any = 1 ;
        expect(factorial(a,b)).toBe(120);

        a = 0
        expect(factorial(a,b)).toBe(1);

        a= -1
        expect(factorial(a,b)).toBe('El parámetro debe ser un número entero no negativo.');

        a = 4.5;
        expect(factorial(a,b)).toBe('El parámetro debe ser un número entero no negativo.');

    })


    test("test de endpoint /", async () => {
        return await request(app)
            .get("/")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("Hola mundo al usuario Tere");
            })
    });

    test("test de endpoint operar", async () => {
        return await request(app)
            .get("/operar?a=30&b=30&oper=suma")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("el resultado de la operacion suma de 30 y 30 es 60");
            })
    });

});