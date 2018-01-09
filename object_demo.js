// var person = { 
//     firstname:"Tom", 
//     lastname:"Hanks", 
//     beha:function(){return 2+3;},    
//  }; 
//  //access the object values 
//  console.log(person.firstname)   
//  console.log(person.lastname) 
//  console.log(person.beha())


//  var foo = 'bar' 
//  var baz = { foo } 
//  console.log(baz.foo)

// var foo = 'bar' 
// var baz = { foo:foo } 
// console.log(baz.foo)


var myCar = new Object(); 
myCar.make = "Ford"; //define an object 
myCar.model = "Mustang"; 
myCar.year = 1987;  

console.log(myCar["make"]) //access the object property 
console.log(myCar["model"]) 
console.log(myCar["year"])
//OR
console.log(myCar.make) //access the object property 
console.log(myCar.model) 
console.log(myCar.year)

//undefined property

// var myCar1 = new Object(); 
// myCar1.make = "Ford"; 
// console.log(myCar1["model"])


var myCar2 = new Object()  
var propertyName = "make"; 
myCar2[propertyName] = "Ford"; 
console.log(myCar2.make)