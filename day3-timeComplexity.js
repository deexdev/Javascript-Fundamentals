//O(i) "constant"
var nums = [1,2,3,4]

function constant() {
    console.log(nums[1]);
    return "==="
}

//O(n) "linear"
function linear() {
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }
    return "==="
}

//O(n*n) "quadratic"
function quadratic() {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            console.log(nums[j]);
        }
        console.log("----");
    }
}

//O(logn) "log n"


console.log(constant());
console.log(linear());
console.log(quadratic());
console.log(logn());