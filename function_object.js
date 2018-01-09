function Car() { 
    this.make = "Ford" 
    this.model = "F123" 
 }  
 var obj = new Car() 
 console.log(obj.make) 
 console.log(obj.model)


 function Car1() { 
    this.make = "Ford" 
 } 
 var obj = new Car1() 
  
 console.log(obj.make) 
 console.log(obj.model)
 obj.model = "F123"
 console.log(obj.model)