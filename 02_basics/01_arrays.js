//Array-----

const myArr = [0,1,2,3,4,5]
const myHeors = ["Shaktiman","naagraj"]

const mArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);

//Array Methods

// myArr.push(6)
// console.log(myArr);

// myArr.push(7)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));

//  const newArr = myArr.join()

//  console.log(myArr);
//  console.log( typeof newArr);

//   Slice,  Splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);

console.log("B ",myArr);

const myn2 =myArr.splice(1,3)  ///   Imp ///

console.log(myn2);

console.log("C ",myArr);

//A  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2, 3 ]
// C  [ 0, 4, 5 ]