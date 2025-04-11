//

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);

// init, condition, inc/dec

for (let index = 0; index < 20; index++) {
  console.log(index);
}

// arr[i]

// ## Concept:
// A for loop is used to repeat a block of code a specific number of times. It’s best when the number of iterations is known beforehand.

let arr12 = [20, 30, 4, 50, 60, 70];

let arr1234 = [];

for (let i = arr12.length - 1; i > 0; i--) {
  arr1234.push(arr12[i]);
}

console.log(arr1234);

// / let a = 11;
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// / ### Explanation of the Syntax:
// - **Initialization:** `let i = 0` initializes the loop variable.
// - **Condition:** `i < 5` checks if the loop should continue running.
// - **Increment/Decrement:** `i++` increases the value of `i` by 1 after each iteration.

// HW : PRINT ODD AND EVEN NO USING LOOPS FROM 1 TO 100.
// HW : PRINT MULTIPLICATION TABE OF 21.
// HW : PRINT PRIME NUMBERS USING LOOP FROM 2 TO 100  :

// 10

// 7

let a = 21;
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// 21
// 42
// 63
// 84
// 105
// 126
// 147
// 168
// 189
// 210

//         *
//       *   *
//     *       *
//   *           *
// *   *   *   *   *

//         *
//       *   *
//     *   *   *

let rows = 10;

// for (let i = 1; i <= rows; i++) {
//   let line = "";

//   //
//   for (let j = 1; j <= rows - i; j++) {
//     line += " ";
//   }

//   for (let k = 1; k <= 2 * i - 1; k++) {
//     // k === 2*i-1=2*1-1=1 | 2*2-1=3 | 2*3-1=5 | 2*4-1=7 | 2*5-1=9
//     if (
//       k === 1 ||
//       k === 2 * i - 1 ||
//       (i === rows && k % 2 !== 0) ||
//       (i == rows / 2 && k === i)
//     ) {
//       line += "*";
//     } else {
//       line += " ";
//     }
//   }
//   console.log(line);
// }

//         *
//       *   *
//     *   *   *
//   *           *
// *   *   *   *   *

// while(true){
//   console.log("hello")
// }

do {
  console.log("It will run 1 time hello");
} while (false);
{
  console.log("hello");
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [20, 30, 40],
  [10, 20],
  [30, 40],
  [20, 30],
];

// [1, 2, 3].length

// for (let i = 0; i< arr.length; i++) {
//   for (let j = 0; j< arr[i].length; j++) {

//     console.log(arr[i][j])

//   }

// }

// function fibo(n) {
//   let a = 0;  // 1      1
//   let b = 1;  // 1      2

//   for (i = a; i < n; i++) {
//     console.log(a); // 0     1        1
//     let sum = a + b; // sum = 1  2    3
//     a = b;          // 1         1
//     b = sum;        // 1         2
//   }
// }

// fibo(10)

// 5!  =  5*4! = 5*4*3! = (n)*(n-1)!

// (n) + (n+1) =

// nth = a + (n-1)d

// function fib(n) {
//   let fib = [0, 1];

//   for (i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//     // 2    = 1  + 0
//   }

//   return fib;
// }

// console.log(fib(1000))

// [
//   0, 1,  1,  2,  3,
//   5, 8, 13, 21, 34
// ]

// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13 n-2
// 21 n-1
// 34 n

// pallindrome : ABBA, MADAM, NITIN :

// fib : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
