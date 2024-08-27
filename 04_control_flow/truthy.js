const userEmail = []

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }

// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined ,NaN

// truthy values 

// "0", `false`, " ", [], {}, function(){}

// if(userEmail.length === 0)
// {
//     console.log("Array is empty");
// }

const emptyObjects = {}

if(Object.keys(emptyObjects).length === 0){
    console.log("object is empty");
}

// Nullish Coalescings Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// var1 = undefined ?? 15
var1 = null ?? 10 ?? 20


console.log(var1);

//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Greater than 80"): console.log("less than 80");
