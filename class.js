// class Polygon { 
//     constructor(height, width) { 
//        this.height = height; 
//        this.width = width; 
//     } 
//  }


//  var Polygon = class Polygon { 
//     constructor(height, width) { 
//        this.height = height; 
//        this.width = width; 
//     } 
//  }

//  var obj = new Polygon(10,12)

//  console.log(obj)


'use strict' 
class Polygon { 
   constructor(height=10, width=15) { 
      this.h = height; 
      this.w = width;
   } 
   test() { 
      console.log("The height of the polygon: ", this.h) 
      console.log("The width of the polygon: ",this. w) 
   } 
} 

//creating an instance  
var polyObj = new Polygon(); 
polyObj.test();
