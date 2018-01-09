let f = function(){
     console.log("In function");
     return "hello"
    } 
console.log(f());


var func = function(x,y,z=1){ return x*y*z }; 
function product() { 
   var result; 
   result = func(10,20); 
   console.log("The product : "+result) 
} 
product();

console.log(func(10,25,65));