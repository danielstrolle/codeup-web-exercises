"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.
    case "red":
        console.log("Red is the color of blood");
        break;
    case "orange":
        console.log("Orange is the color of the Sun");
        break;
    case "yellow":
        console.log("Yellow is the color of a lemon");
        break;
    case "green":
        console.log("Green is the color of that dolla bill y'all");
        break;
    case "blue":
        console.log("Blue is the color of my eyes");
        break;
    default:
        console.log("I do not know anything about that color!");
        break;

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
}

var shopperNames = ['Cameron', 'Ryan', 'George'];
var shopperName = shopperNames[Math.floor(Math.random() * shopperNames.length)];
console.log('Shopper is ' + shopperName);

switch(shopperName) {
    case 'Cameron': var subTotal=180;
        console.log("Cameron's total before discount is $" + subTotal);
        var shopperTotal = (subTotal - (.0 * subTotal));
        console.log("Cameron's total after discount is $" + shopperTotal);
        break
    case 'Ryan': var subTotal=250;
        console.log("Ryan's total before discount is $" + subTotal);
        shopperTotal = (subTotal - (.1 * subTotal));
        console.log("Ryan's total after discount is $" + shopperTotal);
        break
    case 'George': var subTotal=320;
        console.log("George's total before discount is $" + subTotal);
        shopperTotal = (subTotal - (.1 * subTotal));
        console.log("George's total after discount is $" + shopperTotal);
        break
}


var flipACoin = Math.floor(Math.random() * 2)

// var coinFlip = (flipACoin === 0) ? console.log("Buy a Car!") : console.log("Buy a House!");
var coinFlip = flipACoin === 0 ? "buy a car" : "buy a house";
console.log(coinFlip);

var luckyNumber = Math.floor(Math.random() * 6);
var receiptSubtotal = 60;

//discount = ['0%', '10%', '25%', '30%', '50%', '100%'];

switch (luckyNumber) {
    case 0:
        var receiptTotal = ((receiptSubtotal) - (.0 * receiptSubtotal));
        console.log('For lucky number 0, you pay $' + receiptTotal + ' out of your $60 total');
        break;
    case 1:
        receiptTotal = ((receiptSubtotal) - (.1 * receiptSubtotal));
        console.log('For lucky number 1, you pay $' + receiptTotal + ' out of your $60 total');
        break;
    case 2:
        receiptTotal = ((receiptSubtotal) - (.25 * receiptSubtotal));
        console.log('For lucky number 2, you pay $' + receiptTotal + ' out of your $60 total');
        break;
    case 3:
        receiptTotal = ((receiptSubtotal) - (.3 * receiptSubtotal));
        console.log('For lucky number 3, you pay $' + receiptTotal + ' out of your $60 total');
        break;
    case 4:
        receiptTotal = ((receiptSubtotal) - (.5 * receiptSubtotal));
        console.log('For lucky number 4, you pay $' + receiptTotal + ' out of your $60 total');
        break;
    case 5:
        receiptTotal = ((receiptSubtotal) - (1 * receiptSubtotal));
        console.log('For lucky number 5, you pay $' + receiptTotal + ' out of your $60 total');
        break;
}