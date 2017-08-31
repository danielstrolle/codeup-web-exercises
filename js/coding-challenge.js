var a = 0;
var b = 0;
var c = 0;
var sign = "";

// function product (a, b, c) {
//     return (a*b*c);
// if (a*b*c <0) {
//     sign = "-";
// } else {
//     sign = "+";
// }} console.log("The product of these 3 numbers is a " + sign + " value");
function product (a, b, c) {
    if (a*b*c < 0) {
        sign = "-";
    } else {
        sign = "+";
    }
    return sign;
}
console.log(product(3, 7, 2));

function atPy (word) {
    if (word.indexOf("Py") === 0) {
        return word;
    } else {
        return ("Py" + word.toLowerCase());
    }
}
console.log(atPy("Romania"));
console.log(atPy("Pyre"));

var sort = 0;
function order (a, b, c) {
    if (a > b && c){
        sort = a, b, c
    } else if (b > a && c){
        sort = b, a, c
    } else if (c > a && b) {
        sort = c, a, b
    }
    return sort;
}
console.log(order(0, -1, 4));