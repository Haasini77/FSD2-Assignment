function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));

// Default Parameter

function display(name: string = "Student"): void {
    console.log(name);
}

display();
display("Haasini");

// Optional Parameter

function info(city?: string): void {
    console.log(city);
}

info();
info("Bhimavaram");


// Rest Parameter

function total(...marks: number[]): void {
    console.log(marks);
}

total(80, 90, 95);