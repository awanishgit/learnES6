var func = new Function("x", "y","z=1" ,"return x*y*z;"); 
function product() { 
   var result; 
   result = func(10,20); 
   console.log("The product : "+result)
   console.log(func(5,2,4))
} 
product();