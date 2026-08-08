
let value: any = 10;
value = "Hello";
console.log(value);


let data: unknown = "TypeScript";

if (typeof data === "string") {
    console.log(data);
}

function greet(): void {
    console.log("Welcome");
}

greet();