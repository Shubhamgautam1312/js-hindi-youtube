// Primitive DataTypes

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);


// Refrence  (Non Primitive)

// Object , Array , Function;



const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Shubham",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// Return type of variables in JavaScript

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//+++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) => Copy, Heap (Non-Primitive) => Refrence

let myYoutubename ="hitehchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
     email: "user@goole.com",
     upi: "user@ybl"
}

let userTwo = userOne

userTwo.emai ="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo);


