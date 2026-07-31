class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log(this.value);
    }
}

let box1 = new Box<number>(100);
let box2 = new Box<string>("Haasini");
let box3 = new Box<boolean>(true);

box1.display();
box2.display();
box3.display();