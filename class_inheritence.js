// 'use strict' 
// class Root { 
//    test() { 
//       console.log("call from parent class") 
//    } 
// } 
// class Child extends Root {} 
// class Leaf extends Child{}   

// //indirectly inherits from Root by virtue of inheritance {} 
// var obj = new Leaf()
// obj.test()

'use strict' ;

// class PrinterClass { 
//    doPrint() { 
//       console.log("doPrint() from Parent called… ");
//    }
// }

// class StringPrinter extends PrinterClass { 
//    doPrint() { 
//       console.log("doPrint() is printing a string…"); 
//    } 
// } 

// class ThirdPrinter extends PrinterClass{
    
// }
// var obj = new StringPrinter(); 
// var obj1 = new ThirdPrinter();
// obj.doPrint();
// obj1.doPrint();

// super keyword

class PrinterClass { 
   doPrint() {
      console.log("doPrint() from Parent called…") 
   } 
}  
class StringPrinter extends PrinterClass { 
   doPrint() { 
      console.log("doPrint() is printing a string…") 
      super.doPrint() 
   } 
} 
var obj = new StringPrinter() 
obj.doPrint()






