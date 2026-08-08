// Namespace
namespace Calculator {

    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }
}

// Using Namespace
console.log("Addition       :", Calculator.add(3,4));
console.log("Subtraction    :", Calculator.subtract(7,9));
console.log("Multiplication :", Calculator.multiply(8,10));
