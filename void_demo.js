newFunction();

function newFunction() {
    void function iife_void() {
        var msg = function () { console.log("hello world"); };
        msg();
    } ();
}
