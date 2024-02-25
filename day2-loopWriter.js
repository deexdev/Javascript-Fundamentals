//loop
function forLoop(values) {
    for (let i = 1; i <= values; i++) {
        if (i == 5) {
            continue
        }
        if (i == 7) {
            break
        }
        console.log(i);
    }
    return "==="
}

//while
function forWhile(value) {
    let i = 1
    while (i <= value) {
        console.log(i);
        i++
    }
    return "==="
}

console.log(forLoop(8));
console.log(forWhile(9));