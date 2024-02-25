//declarative function
function yourName(name) {
    console.log(name);
    return "==="
};

//expression function
var yourAge = function(age){
    console.log(age);
    return "==="
}

//arrow function
const yourHobby = (hobby) => {
    console.log(hobby);
    return("===")
}

console.log(yourName("Dwi"));
console.log(yourAge(24));
console.log(yourHobby("Football"));