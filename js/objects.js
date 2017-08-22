(function () {
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */

    var person = {
        firstName: "Daniel",
        lastName: "Strolle",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };
    person.sayHello = function () {
        console.log("Hello from " + this.fullName());
    };
    console.log(person.fullName());
    (person.sayHello());


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    for (var i = 0; i < shoppers.length; i++) {
        if (shoppers[i].amount >= 200)
            var discount = (shoppers[i].amount * .1);
        else
            discount = 0;
        var discountTotal =  (shoppers[i].amount - discount)
        console.log(shoppers[i].name + " has a total of: $" +shoppers[i].amount + " has a discount of: $" + discount + " for a final total of: $" + discountTotal);
    }



})();
