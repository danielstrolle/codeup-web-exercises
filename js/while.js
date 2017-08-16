'use strict';

var limit = 65536;
var counter;

counter = 2;
while (counter <= limit) {
    console.log(counter);
    counter *= 2;

}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This is how you get a random number between 1 and 5
var conesLeft = allCones;

do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    if (conesLeft < conesSold) {
        console.log("Cannot sell you" +conesSold + ", I only have" + conesLeft);
    } else {
        conesLeft = (conesLeft - conesSold);
        console.log(conesSold + " cones sold...")
    }

} while (conesLeft > 0);

console.log("Yay I sold them all!");