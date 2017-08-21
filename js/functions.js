"use strict";

var name = "";
var myName = "Daniel";

function sayHello (name) {
    return "Hello, " + name;
}

var helloMessage = sayHello(myName);

console.log(helloMessage);


// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random() * 100) + 1);

function isOdd (number) {
    return (number % 2 ===1 ? (number + " is odd!") : (number + " is not odd!"));
}

console.log(isOdd(random));



var billTotal = prompt("What was the total of your bill today?");
var tipPercentage = prompt("What percentage would you like to tip today?");


function calculateTip (tip, total) {
    return ((tipPercentage/100) * billTotal);
}

alert("$" + calculateTip());


