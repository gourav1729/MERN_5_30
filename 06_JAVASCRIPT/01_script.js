// COMPARISON OPERATORS :

// 1) ==  -> it will check only value
// 2) ===  -> it will check value and datatype
// 3) !=
// 5)<
// 6)>
// 7)<=
// 8)>=

// console.log(5 == "5")  //value
// console.log(5 === "5") //value + datatype 
// console.log(10 != 5) 
// console.log(10 > 5) 
// console.log(10 < 5) 
// console.log(5 >= 5)
// console.log(5 <= 5)



// t   f    t
// f   f    t
// t   f    f






// f f
// t f
// t t


console.log(null > 0)    //f  0
console.log(null == 0)   //t
console.log(null >= 0)   //t  0
// STACKOVER-FLOW   :: == () || >=, > (0)



// Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false.

// The reason is that an equality check "==" and comparisons "> < >= <=" work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false. 

// 1 1 2 3 5 8   : 

console.log(5/3);
console.log(8/5);

// 1729 : ramanujans number 


// 1^3 + 12^3 = 9^3 + 10^3 = 1729
















