// Generic Variable
let numbers: Array<number> = [10, 20, 30, 40];
let names: Array<string> = ["Hasini","shannu","sahithi"];

console.log();
console.log("Numbers :", numbers);
console.log("Names   :", names);

// Generic Function
function display<T>(value: T): T {
    return value;
}

console.log();
console.log(display<number>(100));
console.log(display<string>("TypeScript"));
console.log(display<boolean>(true));

// Generic Constraint
interface Length {
    length: number;
}

function printLength<T extends Length>(item: T): void {
    console.log("Length :", item.length);
}

printLength("Programming");
printLength([10, 20, 30, 40]);
