(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ["Daniel", "Dan", "Danny", "Big D"];

    // TODO: Create a log statement that will log the number of elements in the names array.

    console.log(names.length);

    // TODO: Create log statements that will print each of the names array elements individually.

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    names.forEach(function (e) {
        console.log(e);
    });
})();
