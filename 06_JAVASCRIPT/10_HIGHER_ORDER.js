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


// 1. Use `map` to double the numbers in an array: `[1, 2, 3, 4]`.
// 2. Use `filter` to find all words starting with the letter "a" in `['apple', 'banana', 'avocado', 'cherry']`.
// 3. Combine `map` and `filter` to get the names of students who scored above 80 from:
//    ```javascript
//    let students = [
//      { name: "John", score: 75 },
//      { name: "Jane", score: 85 },
//      { name: "Jake", score: 95 }
//    ];
//    ```
// 4. Extract all even numbers greater than 10, square them, and return the new array from `[5, 12, 18, 7, 20]`.



// REDUCE : 





























// function (function)

// function hello(a, b){


// }

//sum


// hello(sum())