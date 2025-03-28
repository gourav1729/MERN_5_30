// 1. What is a Higher-Order Function?
// A higher-order function is a function that does at least one of the following:

// Takes another function as an argument (callback function).


// ## **2. Map **
// - **Map**:
//   - Creates a new array by applying a function to each element of the original array.



let arr = [20, 10]

let multi = arr.map( num => 2 * num )
console.log(multi)
console.log(arr)

let celsius = [0, 37, 20, 30];


let far = celsius.map( i =>( i*9/5) + 32)
console.log(far)


// far = (c * 9/5) + 32
// c = (f - 32 )5/9


// What is filter?
// filter is a higher-order function that iterates over an array and creates a new array containing only the elements that satisfy a given condition.

let arr1 = [20, 100, 220, 100, 10, 5, 4];

let even = arr1.filter(i => i > 20)
console.log(even)



let product = [
    {id : 1, name : "nikhil", present : true},
    {id : 2, name : "shudanshu",  presentt : false},
    {id : 3, name : "kritanshu",  present : true},
    {id : 4, name : "kritanshu",  present : false},
]


let preset = product.filter(i => i.present == true).map( i => i.name)
console.log(preset)



































// function (function)

// function hello(a, b){


// }

//sum


// hello(sum())