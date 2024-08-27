// if

// const isUserloggedIn = true
// const tempreture = 41


// if(tempreture < 50 ){
//        console.log("Less than 50");
// }
// else{
//     console.log("greater than 50");
// }

// console.log("executed");

// <, >, <=, >= , ==, !=, ===, !==


// const score = 200

// if(score>100){
//       let power = "fly"
//       console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


const balance =1000

// if(balance> 500) console.log("test"),console.log("test2");

// if(balance <500){
//     console.log("less thaan 500");
// }
// else if(balance <750 )
// {
//     console.log("less than 750");
// }
// else if( balance <900)
// {
//     console.log("less than 900");
// }
// else{
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggInFromEmail){
    console.log("User logged in");
}