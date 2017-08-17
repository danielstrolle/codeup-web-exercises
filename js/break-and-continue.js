"use strict";


while (true) {
    var userNumber = prompt("Enter an odd number between 1 and 50!");
    if (parseInt(userNumber) > 50) {
        console.log("Im sorry, " + userNumber + " is higher than 50")
    }
    else if (parseInt(userNumber) < 1) {
        console.log("Im sorry, " + userNumber + " is less than 1")
    }
    else if (parseInt(userNumber) % 2 === 0) {
        console.log("Im sorry, " + userNumber + " is an even number")
    }
    else {
        break
    }
}

for (var i=1; i < 50; i++) {
    if (i % 2 !== 0) {
        if (i===parseInt(userNumber)) {
            console.log("Yikes! Skipping number " + i);
            continue
        }
        console.log("Here is an odd number: " + i);
    }
}