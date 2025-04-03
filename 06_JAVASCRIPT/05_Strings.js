
// 1) What is string in javascript?
// string is a sequence of characters enclosed in single or double quotes.
// "" or '' or ``

// 2) What is the difference between single quotes, double quotes and backticks?
// ``, "", ''


// 3)METHODS IN STRING:


//A)WHAT IS THE TRIM() MEHTHOD????

let str = "    HELLO WORLD, HOW       KAISE KP       "
console.log(str)
console.log(str.trim())

//              kritanshu chaurasiya                
//kritanshu chaurasiya                








let str1 = "  kaise heo   "


console.log(str1.toUpperCase())
console.log(str1.toLowerCase())

console.log(str1.indexOf("z"))

// console.log(str1.toLowerCase())
// console.log(str1.toLowerCase())

//  k + ""/0 = k 



// indexof

let hello = "random string"

console.log("acessing index 2 " + hello[11])
// r a n  d o m 
// 0 1  2 3 4 5  
// 1 2  3 4 5 6 
console.log(hello[11])  // random string 12 
console.log(hello.slice(1, 11))




// slice: 
let name  ="kritanshu chaurasiya"   
console.log(name.slice(1, 7)) //ritans

// replace : 




let hello123 = "jaivascript"
console.log(hello123.replace('iv', "hello"))



let str2 = "asddfgg"
let str3 = "asddfgg"

let str4 = str2 + " " + str3
console.log(str4)



//pallindrome
//fib 
//anagram 
//prime no 
// odd even 

let a = 20;


// 6
// 6/2, 6/3 ......6/5

// 7/2, 7/3, 7/4, 7/5, 7/6 a|





// namnan, 121, madam 


// i   j
// naman 
// i   j   = n = n 
// naman 
//  i j   = a = a 
// naman 
//  i j   = m = m  
// naman 

// namnan 

// str[i] == str[j]
// str.length/2




let n = 7

for(let i = 2; i < n; i++){

    if(n % i == 0){
        console.log("This is not a prime number")
    }else{
        console.log("This is a prime number")

    }

}


