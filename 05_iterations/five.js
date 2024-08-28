const coding = [ "js","ruby", "java", "python","cpp"]

// coding.forEach( function (item) {
//     console.log(item)
// } )

// coding.forEach((num) => {
//     console.log(num)
// }

// function printMe(items){
//     console.log(items);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item,":-",index,":-",arr);
// })

myCoding = [
    {
        langaugeName : "javascript",
        langaugeFileName: "js"
    },
    {
        langaugeName : "java",
        langaugeFileName: "java"
    },
    {
        langaugeName : "python",
        langaugeFileName: "py"
    },
]

myCoding.forEach((items) => {
    console.log(items.langaugeName)
});