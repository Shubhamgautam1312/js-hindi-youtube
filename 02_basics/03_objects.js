// singleton

// Object.crete
// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
   [mySym]: "mykey1",
    age:18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isloggedIn: false,
    lastLoginnDates: ["monday", "saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym]);

JsUser.email = "hiteh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email ="hitsh@microsoft.com"

// console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello JS user");
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser);

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());