// ARRAYS (DATA STRUCTURE)
// Arrays are data structures used to store multiple values in a single variable, they may have same or different types of datatype.
// They are ordered collections of items, accessible using indices (starting from 0).

// let name1 =  ram
// let name2 = shyam
// let name3 = kaise
// let name4 = albert
// let name1 =  ram
// let name2 = shyam
// let name3 = kaise
// let name4 = albert
// let name1 =  ram
// let name2 = shyam
// let name3 = kaise
// let name4 = albert


// let name = ["kritanshu", "nikhil", "ram", "hello".............]

//  0       1        2,   3
// let name = ["ram", "shayma", ...................................]
// let ary = ["hello", false, 0, "kaise ho"]

let arr = ["apple", "mango", "cheery", "pineapple"];

arr.push("ramdom")
arr.pop()

arr.unshift("sdsfvdfssdgfv");
arr.shift();

console.log(arr);

//s         //e    //inc/decre
// for (let i = 0; i < 10; i++) {
//     console.log(i)

// }

// let a = 10
// let i = 1
// while(" "){
//     i = i + 1;
//     console.log(i )

// }

// 1) string pallindrome hai ya nahi:  tht,
// 2) string anagram hai ya nahi : "silent" "listen" -> letter same and no of letter same
// 3) odd, even, prime.

// unshit()

let arr1 = ["one", "two", "three", "four"];

console.log(arr1[1])

arr1.unshift("adfcsadvdsf");
arr1.shift();
console.log(arr1);

// 1. Create an array of five colors. Add a new color to the end and remove the first color.
// 2. Find the index of a specific color in the array.
// 3. Group Odd and Even:
// Separate an array of numbers [1, 2, 3, 4, 5, 6] into two arrays: one for odd numbers and one for even numbers.

let numbers = [10, 13, 14, 16, 19];

let oddnum = []; // 13
let evennum = []; //10

//      s               e          i/d
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    //0  14
    evennum.push(numbers[i]);
  } else {
    oddnum.push(numbers[i]); //13
  }
}

console.log("odd number", oddnum);
console.log("evennum number", evennum);

// indexof ->

let arr10 = ["one", "two", "three", "four"];

console.log(arr10.indexOf("one"));
console.log(arr10.includes("oe"));

const arr5 = [1, 2];
const arr4 = [3, 4];
const combined = arr5.concat(arr4);

console.log(combined);

//sort
//slice
//splice


let arrz = ["a", "c", "f", "b"]
console.log(arrz.sort())

let random = [998, 1000, 30, 20, 10001011, 10, 100, 900];
console.log(random.sort())
// [ 10, 100, 1000, 10001011, 20, 30, 900, 998 ]






random.sort((a, b) => a - b);
console.log(random);
//[ 10, 20, 30, 100, 900, 998, 1000, 10001011 ]

// a  b    => a-b
// 10 20    => -10
// =>               30-20
// ### Behavior of `(a - b)`
// - **Negative**: `a` is smaller, so it goes first.
// - **Positive**: `b` is smaller, so it goes first.
// - **Zero**: Both are equal.

//compariosn function => sorting algorithm hai

// 20 10 5 10 20
//   0    1    2  3  4
const numbers1 = [10, 20, 30, 40, 50]
const sliced = numbers1.slice(0, 5)
console.log(sliced)

const removed = numbers1.splice(2,1)
console.log("removed " + removed)  //[ 10, 20, 30 ]
console.log(numbers1) //20, 30, 40, 50

//03-MARCH-2024 : HW
// How do you use .slice() to extract the first three elements of an array?
// What is the difference between .splice() and .slice()?
// How can you remove an element from a specific index using .splice()?
// How do you reverse an array without modifying the original array?
//pallindrome
//fib 
//anagram 

//  H E L L O
//  L L H E O

// 1) same letter with same same number



// e h l l o
// e h l l o








//  c++ -> pointer 


// nikhil <--  nikh 

// nikhil(copy) -> isme changes(call by value)







// console.log(ar1.sort());
// console.log(ar1);
// console.log(ar2.sort());
// console.log(ar2);

// [ 'e', 'h', 'l', 'l', 'o' ]
// [ 'e', 'h', 'l', 'l', 'o' ]

// let flag = 0/1 ya true/false

// console.log(ar1 == ar2);

let ar1 = ["h", "l", "l", "e", "o"];
let ar2 = ["h", "o", "l", "l", "e"];

ar1.sort()
ar2.sort()

let flag = 0;

for (let i = 0; i < arr1.length; i++) {
  if (ar1[i] == ar2[i]) {
    flag = 1; 
    
  } else {
    flag = 0
    
   
  }
  break;
}

if (flag == 1) {
    console.log("anagram");
    
}else{
    console.log("not anagram");
}

// let 2sum
// taget sum = 20;
// [1, 10, 3, 10, 5] : [1, 3]
// [1, 10, 3, 10, 5] : [1, 3]
 
const arr1234 = [1, 2, 4, 5]
arr1234.push(10)
console.log(arr1234)

//  
let abc = [[10, 20], [30, 50], [100, 120], [150,200]]
// [ 100, 120 ]

console.log([ 100, 120 ][1])



// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.




// {
  

//   var b = 20
//   let a = 10




// }


// console.log(b)
// console.log(a)