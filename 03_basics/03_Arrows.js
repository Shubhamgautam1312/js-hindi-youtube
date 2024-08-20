const user = {
    username: "hitesh",
    price:999,

    welcomeMassage: function () {
        console.log(`${this.username} ,Welcome to website`)
        console.log(this);
    }

}

// user.welcomeMassage()
// user.username = "Sam"
// user.welcomeMassage()

// console.log(this);

// function chai(){
//     let username = "hitesh" 
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "hitesh" 
//     console.log(this.username);
// }

const chai = () => {
    let username = "hitesh" 
    console.log(this.username);
}

// chai()

// const addTwo =(num1, num2) => {
//     return num2 + num1
// }

// const addTwo =(num1, num2) => return num2 + num1

// const addTwo =(num1, num2) => (num2 + num1)

const addTwo =() => ({username : "hitesh"})


console.log(addTwo());


// const myArray = [2,4,5,8,5,4]

// myArray.forEach()
