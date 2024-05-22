// Question no.1how to compare  two JSON have the same properties without order
// a. let obj1 = {name: "Person1", age:5}
// b. let obj2 = {age:5,name: "Person1" }

let obj1 = {name: "Person1", age:5};
let obj2 = {age:5, name: "Person1"};
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
