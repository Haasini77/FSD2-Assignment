let str: string = "Haasini";
for (let i = 0; i < str.length; i++) {
    let c = 0;
    for (let j = 0; j < str.length; j++) {
        if (str[i] == str[j]) {
            c++;
        }
    }
    let flag = true;
    for (let k = 0; k < i; k++) {
        if (str[i] == str[k]) {
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log(str[i] + " : " + c);
    }
}