
function getSum(n1, n2) {   
    var isAnyNegative = function() {   
       return n1 < 0 || n2 < 0;   
    }   
    var promise = new Promise(function(resolve, reject) {   
       if (isAnyNegative()) {   
          reject("Negatives not supported");   
       }   
       resolve(n1 + n2)
    });   
    return promise;   
 } 

//console.log(getSum(5,4));

// getSum(-5,4)
// .then(function(result){
//     console.log(result)
// },
// function(error) {
//     console.log(error)
// }
// )

// Multiple then

getSum(5,4)
.then(function(result){
    console.log(result)
    return getSum(10,20);
    
    // this retrun one more promise
},
function(error){
    console.log(error)
}
)
.then(function(result2){
    console.log(result2)
    return getSum(30,50);
},
function(error2) {
    console.log(error2)
}
)
.then(function(result3){
    console.log(result3)
},
function(error3){
    console.log(error3)
})

console.log("End of script");








