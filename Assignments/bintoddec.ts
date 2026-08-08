let secondValue: string = "1011";
let d: number = 0;
for (let i = 0; i < secondValue.length; i++) {
    d = d * 2;
    if (secondValue[i] === "1") {
        d++;
    }
}
console.log(d);