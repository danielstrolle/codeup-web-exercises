"use strict";

var userNumber = prompt("Enter a number between 1 and 10");

var userRealNumber = parseInt(userNumber);
console.log(userRealNumber);

for (var i=1; i<=10; i++) {
    var total = (userRealNumber * i);
    console.log(userRealNumber + "x" + i + "=" + total);
}



for (var i=1; i<=10; i++) {
    var randomNumber = Math.floor(Math.random() * 180) + 20;
    if (randomNumber % 2 === 0) {
    console.log(randomNumber + " is even")
    } else {
        console.log(randomNumber + " is odd")
    }
}

for (var i=1; i<=10; i++) {
    if (i<=9) {
    console.log (i.toString().repeat(i));
} else {
    console.log ("0".repeat(i));
}}


for (var i=100; i>=5; i -=5) {
    console.log(i);
}
