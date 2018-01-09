"use strict"; 
let v = "Hi!  I'm a strict mode script!";

function add(a, b = 1) { 
    return a+b; 
 } 
console.log(add(4,5)); 