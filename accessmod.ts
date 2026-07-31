class Employee{

public name:string;

private salary:number;

protected dept:string;

constructor(name:string,salary:number,dept:string){

this.name=name;

this.salary=salary;

this.dept=dept;

}

display(){

console.log(this.name,this.salary,this.dept);

}

}

let emp=new Employee("Sahithi",50000,"IT");

emp.display();