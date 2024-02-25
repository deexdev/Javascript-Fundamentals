//if else statement
function iEs(age) {
  if (age < 18) {
    console.log("you are not allowed to watch this movie");
  } else {
    console.log("happy watching!");
  }
  return "===";
}

//if, else if, else statement
function iEies(clock) {
  if (clock < 0) {
    console.log("time is not valid, input 0 to 24");
  } else if (clock <= 12) {
    console.log("selamat pagi");
  } else if (clock <= 18) {
    console.log("selamat siang");
  } else if (clock <= 24) {
    console.log("selamat malam");
  } else {
    console.log("not above 24");
  }
  return "===";
}

//nested if
function nestedIf(clock) {
  if (clock < 0) {
    console.log("time is not valid, input 0 to 24");
  } else if (clock <= 12) {
    console.log("selamat pagi");
  } else if (clock <= 18) {
    // here is nested
    if (clock >= 15) {
      console.log("selamat sore");
    } else {
      console.log("selamat siang");
    }
  } else if (clock <= 24) {
    console.log("selamat malam");
  } else {
    console.log("not above 24");
  }
  return "===";
}

//ternary operation
function ternary(gender) {
    gender == "men" ? console.log("men's toilet is over there =>") : console.log("come in!");
    return "==="
}

//switch statement
function switc(color) {
    switch (color) {
        case "red":
            console.log("stop!");
            break;
        case "yellow":
            console.log("slow down!");
            break;
        case "green":
            console.log("let's go!");
            break;
        default:
            console.log("what is that color ?'big question of traffic light'");
            break;
    }
    return "==="
}

console.log(iEs(15));
console.log(iEies(16));
console.log(nestedIf(16));
console.log(ternary("men"));
console.log(switc("green"));
