let num = 145;
let temp = num;
let sum = 0;

function fact(n: number): number {
    let f = 1;
    for (let i = 1; i <= n; i++)
        f *= i;
    return f;
}

while (temp > 0) {
    let digit = temp % 10;
    sum += fact(digit);
    temp = Math.floor(temp / 10);
}

console.log(sum == num ? "Strong Number" : "Not Strong");