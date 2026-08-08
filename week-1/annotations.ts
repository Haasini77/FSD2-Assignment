let name1: string = "Haasini";
let age: number =19;
let student: boolean = true;

// Function Annotation
function display(name: string, age: number): string {
    return name + " " + age;
}

// Array Annotation
let subjects: string[] = ["CN", "FSD2", "AI","COA","RES"];

console.log(display(name1, age));
console.log(subjects);
console.log(student);