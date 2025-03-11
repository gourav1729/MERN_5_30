// ARRAYS (DATA STRUCTURE)
// Arrays are data structures used to store multiple values in a single variable, they same or different types of datatype.
// They are ordered collections of items, accessible using indices (starting from 0).


// let name1 =  ram 
// let name2 = shyam 
// let name3 = kaise
// let name4 = albert


            //  0       1        2,   3  
// let name = ["ram", "shayma", ...................................]


let arr = ["apple", "mango", "cheery", "pineapple"]

// arr.push("ramdom")
// arr.pop()


arr.unshift("sdsfvdfssdgfv")
arr.shift()

console.log(arr)


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

let arr1 = ["one", "two", "three", "four"]

// console.log(arr1[1])



arr1.unshift("adfcsadvdsf")
arr1.shift()
console.log(arr1)

// 1. Create an array of five colors. Add a new color to the end and remove the first color.
// 2. Find the index of a specific color in the array.
// 3. Group Odd and Even:
// Separate an array of numbers [1, 2, 3, 4, 5, 6] into two arrays: one for odd numbers and one for even numbers.


let numbers = [10, 13, 14, 16, 19];

let oddnum = [];  // 13
let evennum = []; //10 


//      s               e          i/d
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%2 == 0) {  //0  14 
        evennum.push(numbers[i])
        
    }else{
        oddnum.push(numbers[i])  //13

    }
    
    
}

console.log("odd number",oddnum)
console.log("evennum number", evennum)



// indexof -> 

let arr10 = ["one", "two", "three", "four"]

console.log(arr10.indexOf("one"))
console.log(arr10.includes("one"))

const arr5 = [1, 2]
const arr4 = [3, 4]
const combined = arr5.concat(arr4)

console.log(combined)


//sort 
//slice 
//splice 