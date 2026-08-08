
function add(a: number, b: number): number {
    return a + b;
}

// Arrow Function
const add1 = (a: number, b: number): number => {
    return a + b;
};

// Short Arrow Function
const greet = (name: string): string => "Hello " + name;

console.log(add(5, 3));
console.log(add1(5, 3));
console.log(greet("Haasini"));