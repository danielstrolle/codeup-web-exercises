(function () {
    "use strict";

    var person = {
        firstName: "Daniel",
        lastName: "Strolle",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };
    person.sayHello = function() {
        console.log("Hello from " + this.fullName());
    };
    console.log(person.fullName());
    (person.sayHello());


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // for (var i = 0; i < shoppers.length; i++) {
    //     if (shoppers[i].amount >= 200)
    //         var discount = (shoppers[i].amount * .1);
    //     else
    //         discount = 0;
    //     var discountTotal =  (shoppers[i].amount - discount)
    //     console.log(shoppers[i].name + " has a total of: $" +shoppers[i].amount + " has a discount of: $" + discount + " for a final total of: $" + discountTotal);
    // }

    for (var i = 0; i < shoppers.length; i++) {
        var shopper = shoppers[i];
        console.log(buildReceipt(shopper));
    }

    shoppers.forEach(function (shopper) {
        console.log(buildReceipt(shopper));
    });

    function buildReceipt(shopper) {
        var discount = 0;
        var totalAfterDiscount = shopper.amount;
        if (shopper.amount > 200) {
            discount = (.1 * shopper.amount);
            totalAfterDiscount = (shopper.amount - discount)
        }
        return shopper.name
        + " has to pay $" +shopper.amount
        + ", it has a discount of $" + discount
        + ", the total to pay after the discount is $" + totalAfterDiscount
    }
})();


"use strict";

// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author property.
// The author property should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
var books = [
    {
        title: "97 Things Every Programmer Should Know",
        author: {firstName:"Kelvin", lastName: "Henney"}
    },

    {
        title: "Growing Object-Oriented Software Guided by Tests",
        author: {firstName:"Steve", lastName: "Freeman"}
    },

    {
        title: "Working Efectively with Legacy Code",
        author: {firstName:"Michael", lastName: "Feathers"}
    },

    {
        title: "Refactoring",
        author: {firstName:"Martin", lastName: "Fowler"}
    },

    {
        title: "The Pragmatic Programmer",
        author: {firstName:"Andy", lastName: "Hunt"}
    }

];

// log out the books array
console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
books.forEach(function (book, i) {
console.log("Book #" + (i+1));
console.log("Title: " + book.title);
console.log("Author: " + book.author.firstName + " " + book.author.lastName);
console.log("---");

});
// end loop here
