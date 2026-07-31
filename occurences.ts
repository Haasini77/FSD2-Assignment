let arr = [1, 2, 2, 3, 4, 4, 4];

let count: { [key: number]: number } = {};

for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
        count[arr[i]]++;
    } else {
        count[arr[i]] = 1;
    }
}

console.log(count);