// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const reguralUser = {
    email : "some@gmail.com",
    fullname : {
        userfulname: {
            firtsname : "hitesh",
            lastname : "gautam"
        }
    }
}

// console.log(reguralUser.fullname.userfulname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b" }
const obj4 = {5: "a", 6: "b" }

// const obj3 = {obj1 , obj2}

// obj3 = Object.assign({}, obj1,obj2,obj4)

obj3 ={...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }

 ]
// console.log(users[1].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructure : "hitesh"
}

// console.log(course.courseInstructure);

const {courseInstructure : instructure} = course

// console.log(courseInstructure);
console.log(instructure);

// {
//       "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},
]