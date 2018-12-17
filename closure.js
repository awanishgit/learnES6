var calculate = function (a) {
    return function firstLevel(b) {
        return function secondLevel(c) {
            return a + b + c;
        }
    }
}
let x = calculate(4)(2)(6);

console.log(x);