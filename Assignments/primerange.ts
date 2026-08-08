let start = 10;
let end = 50;

for (let num = start; num <= end; num++) {
    let prime = true;

    if (num <= 1) prime = false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }

    if (prime) console.log(num);
}