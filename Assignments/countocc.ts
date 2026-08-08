let arr = [1, 2, 2, 3, 4, 4, 4];
for (let i = 0; i < arr.length; i++) {
    let c = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            c++;
        }
    }
    let first = true;
    for (let k = 0; k < i; k++) {
        if (arr[i] == arr[k]) {
            first = false;
            break;
        }
    }
    if (first) {
        console.log(arr[i] + " : " + c);
    }
}
