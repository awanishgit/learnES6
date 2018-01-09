// hoist_function();  
// function hoist_function() { 
//    console.log("foo"); 
// } 


// hoist_function(); // TypeError: hoist_function() is not a function  
// var hoist_function = function() { 
//    console.log("bar"); 
// };

var main = function() { 
    var loop = function() { 
       for(var x = 0;x<5;x++) {
          console.log(x); 
       } 
    }(); 
    console.log("x can not be accessed outside the block scope x value is :"+x); 
 } 
 main();

// var main = function() { 
//     (function() { 
//        for(var x = 0;x<5;x++) { 
//           console.log(x); 
//        } 
//     })(); 
//     console.log("x can not be accessed outside the block scope x value is :"+x); 
//  } 
//  main();