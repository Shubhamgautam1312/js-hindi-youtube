const myObject = {
    js: 'javascript',
    cpp: `c++`,
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","py","cpp","java","rb"]

for (const key in programming) {
    // console.log(programming[key]);
}


const map = new Map()

// map.set(`IN`, "India")
// map.set(`USA`, "United States Of America")
// map.set(`Fr`, "France")
// map.set(`IN`, "India")

// // console.log(map);

// for (const key in map) {
//    console.log(key)
// }