class Student {
    name: string;
    age:number;
    branch:string;

    constructor(name: string,age:number,branch:string) {
        this.name = name;
        this.age=age;
        this.branch=branch;

    }

    show() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.branch);

    }
}

let s1 = new Student("Haasini",19,"AI");
s1.show();

