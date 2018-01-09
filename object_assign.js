"use strict" 
// var det = { name:"Tom", ID:"E1001" }; 
// var copy = Object.assign({}, det); 
// console.log(copy);  
// for (let val in copy) { 
//    console.log(copy[val]) 
// }

// Merging of objects

// var o1 = { a: 10 }; 
// var o2 = { b: 20 }; 
// var o3 = { c: 30,d:60 }; 
// var obj = Object.assign(o1, o2, o3); 
// console.log(obj);  
// console.log(o1);
// console.log(o2);
// console.log(o3);

var o1 = { a: 10 }; 
var obj = Object.assign(o1); 
obj.a++ 
console.log("Value of 'a' in the Merged object after increment  ") 
console.log(obj.a);  
console.log("value of 'a' in the Original Object after increment ") 
console.log(o1.a);

// deleting properties

var myobj = new Object; 
myobj.a = 5; 
myobj.b = 12; 

// Removes the ‘a’ property 
delete myobj.a; 
console.log ("a" in myobj) // yields "false"


// comparing objects

var val1 = {name: "Tom"}; 
var val2 = {name: "Tom"}; 
console.log(val1 == val2)  // return false 
console.log(val1 === val2)  // return false

var val1 = {name: "Tom"}; 
var val2 = val1  

console.log(val1 == val2) // return true 
console.log(val1 === val2) // return true

