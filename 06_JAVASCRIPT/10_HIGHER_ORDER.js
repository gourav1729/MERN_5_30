// 1. What is a Higher-Order Function?
// A higher-order function is a function that does at least one of the following:

// Takes another function as an argument (callback function).


// ## **2. Map **
// - **Map**:
//   - Creates a new array by applying a function to each element of the original array.



let arr = [20, 10, 30, 50, 40, 60, 70, 80, 90, 100]

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

let kuchbhi = arr1.filter(i => i > 20)
console.log(kuchbhi)



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


const numbers = [5, 12, 18, 7, 20]

const result = numbers.filter(num => num > 10 && num%2==0).map(num => num**2)
console.log(result)

//REDUCE : The reduce() method reduces an array to a single value by executing a callback function on each element of the array.


// Array.redduce((accumalator, currentvale) => {
//     return updatedAccumalator;
// }, initialvalue)


// accumulator: stores the running result.

// currentValue: the current element in the iteration.

// initialValue: the starting value of the accumulator.

// 0 + 1 = 1 
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// 15 + 6 = 21

let red = [1,2,3,4,5]  

let sum = red.reduce((acc, curr) => acc + curr, 0)

console.log(sum)


// Problem: Calculate Total Salary of Developers With Bonus
// Given an array of employees, return the total salary of only those who are developers, after adding a 10% bonus to each of their salaries.

const employees = [
    { name: "Alice", role: "developer", salary: 50000 },
    { name: "Bob", role: "designer", salary: 40000 },
    { name: "Charlie", role: "developer", salary: 60000 },
    { name: "David", role: "manager", salary: 70000 },
    { name: "Eve", role: "developer", salary: 55000 }
  ];



  // 55000 + 66000 + 50000 + 60500 = 187000










  const totalDevSalary = employees.filter(emp => emp.role == "developer").map(dev => dev.salary + dev.salary*0.1).reduce((total, curr) => total+curr, 0)

  console.log(totalDevSalary)

// 55000 + 66000 + 
//   0.1*50000
// 187000

// 100 * 100/10 = 1000
  



const cart = [
    { item: 'Book', price: 15 },
    { item: 'Pen', price: 5 },
    { item: 'Bag', price: 25 }
  ];


  const total = cart.reduce((acc, pro) => acc + pro.price, 0)



 


  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
    
  // }

  // for-of loop

  // for(let abc of arrz){
  //   console.log(abc)
  // }



  // let obj = {id : 1, name : "nikhil", present : true}

  
  // for (const key in obj) {
    
  //   console.log(key, obj[key])

  // }


  let arrz = [10, 20, 30, 40, 50, 60, 70]

  


  arrz.forEach((num, index) => {

    console.log(index, num, index)
  })




  

  // REMOVE DUPLICATE ELEMENTS FROM ARRAY : [1,1,2,3,44, 5]
  //  FIND FREQUENCY : frequecny of each element 
  // ALL SUB-ARRAY : [10, 20, 30, 40, 50]

10, 
10, 20
10, 20, 30
10, 20, 30 , 40 
10, 20 , 30, 40, 50

20
20, 30
20, 30 , 40 
20 , 30, 40, 50


30
30 ,40 
30, 40, 50

40 
40, 50

50



























// function (function)

// function hello(a, b){


// }

//sum


// hello(sum())