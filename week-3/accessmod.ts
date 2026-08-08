class Mobile {
    public brand: string;
    private price: number;
    protected model: string;

    constructor(brand: string, price: number, model: string) {
        this.brand = brand;
        this.price = price;
        this.model = model;
    }

    display() {
        console.log(this.brand);
        console.log(this.price);
    }
}

let m = new Mobile("realme", 20000, "p1");

console.log(m.brand);
m.display();