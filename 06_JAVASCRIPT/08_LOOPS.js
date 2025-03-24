// 


console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)


// init, condition, inc/dec 


// arr[i]

// ## Concept:
// A for loop is used to repeat a block of code a specific number of times. It’s best when the number of iterations is known beforehand. 

// let a = 11;
// for (let i = 100; i > 0; i--) {
//     console.log(i*a)
    
// }

// / let a = 11;
for (let i = 1; i<=10; i++) {
    console.log(i)
    
}

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
    console.log(i*a)
    
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


let  rows = 5;

for (let i = 1; i <= rows; i++) {

    let line = '';



    //
    for (let j = 1; j <= rows-i; j++){

        line += ' ';
    }

    
     for (let k = 1; k <= 2*i-1; k++){
// k === 2*i-1=2*1-1=1 | 2*2-1=3 | 2*3-1=5 | 2*4-1=7 | 2*5-1=9
       if(k === 1 || k === 2*i-1 || (i === rows && k%2 !== 0)){
        line += '*'
       }else {
        line += ' ';
       }

    }
    console.log(line)

}




//         *
//       *   *
//     *   *   *
//   *           *
// *   *   *   *   *



