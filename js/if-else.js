"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random() * colors.length)];

var favorite = 'blue'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

if (color === 'red') {
    console.log('Red is the color of blood');

} else if (color === 'orange') {
    console.log('Orange is the color of pumpkins');

} else if (color === 'yellow') {
    console.log('Yellow is the color of the Sun');

} else if (color === 'green') {
    console.log('Green is the color of grass');

} else if (color === 'blue') {
    console.log('Blue is the color of boisenberries');

} else {
    console.log('I do not know anything about that color');
}

'use strict';

var myFav = (color == favorite) ? console.log("Thats my favorite color too!") : console.log("I hate that color!");
// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.

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
