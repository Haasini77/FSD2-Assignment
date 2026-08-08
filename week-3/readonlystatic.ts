class Student {
    static college: string = "SVECW";
    readonly rollNo: number;
    name: string;

    constructor(name: string, rollNo: number) {
        this.name = name;
        this.rollNo = rollNo;
    }

    show(){
        console.log(this.name);
        console.log(this.rollNo);
    }
}
console.log(Student.college);

let s1 = new Student("Haasini", 101);
s1.show()

