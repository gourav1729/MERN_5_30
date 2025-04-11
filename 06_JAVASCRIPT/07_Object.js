// ### 1. Object Literals
// **What are Object Literals?**
// Object literals are a way to store multiple related values as key-value pairs. They are commonly used to represent entities or real-world objects in JavaScript.


//syntax 
// const objetname = {
//     key : value,
//     key : value
// }


const student = {

    name : "Nikhil",
    age : "23",
    gender : "male",
    course : "mern stack"

}


//  get values in object 


console.log(student.name)
console.log(student.age)
console.log(student.course)


// update values

const  person = {
    name : "Nikhil",
    age : 23,
}
//             0      1 
const arr = ["Nikhil",23 ]



console.log(person)
console.log(person.age)
person.age = 24

console.log("age " + person.age)


//DATE : 03-04-2025
// **Exercise:** Create a `blogPost` object with properties `title`, `content`, and `views`
// **Exercise:** Create a `instagram` object with properties `name`, `likes`, and `comments`


// {{}, {}, {}, {}, {}}


const object = {
    name : "Hello",
    address : {city : "India", address1 : {city : "india2"},  address3 : {city : "india3"}}

}



console.log(object.address.address1.city)

console.log(object.address.address1.city)


//7) Array of Objects :  Group multiple objects into an array.

const employe = [
    {name:"shudanshu", role : "student1"}, 
    {name : "nikhil", role: "student2"}, 
    {name : "kushal", role: "student2"}, 
    {name : "nikhil1", role: "student5"}
]





console.log(employe[3].name)
console.log(employe[3].role)

















console.log(employe[3])
console.log(employe[3].name)
// console.log({ name: 'nikhil1', role: 'student5' }.name)


//8)MATH OBJECTS 




// const math = {

//     pi : 3.14,
//     sqrt : fn,
//     sin : 0
// }




console.log(Math.PI)
console.log(Math.sqrt(225))
console.log(Math.round(3.2))
console.log(Math.floor(3.4))
console.log(Math.ceil(3.4))
console.log(Math.pow(3, 3))
// console.log(Math.sin(1))
// console.log(Math.c())
console.log(Math.random())
console.log((Math.floor(Math.random()*100)))
console.log((Math.floor(Math.random()*100)))
console.log((Math.floor(Math.random()*100)))
console.log((Math.floor(Math.random()*100)))
console.log((Math.floor(Math.random()*100)))
console.log((Math.floor(Math.random()*100)))
console.log((Math.floor(Math.random()*100)))
console.log((Math.floor(Math.random()*100)))
console.log((Math.floor(Math.random()*100)))
console.log((Math.floor(Math.random()*100)))


// let 20;







// - `Math.PI` - π value -> 3.14 -> 22/7
// - `Math.sqrt(x)` - Square root -> 9 -> 3 , 16->4
// - `Math.round(x)` - Rounds to the nearest integer -> 7.8 -> 8


// const math = {


// }

// console.log(Math.PI) // 3.14



// console.log(Math.PI)
// console.log(Math.sqrt(9))
// console.log(Math.round(9.1))
// console.log(Math.sin(1))
// 0 1/2 1/2 3/2 1



// let R = 5;
// console.log(Math.pow(R, 2)) // 5*5 = 25
// console.log(R**2)
// console.log(R**2)




// 4   50 


// 4, 5 => (4^3 + 5^3)1/3 = 64 + 125 = 189
//( 4^3 )^1/3














// pie*R*R*L


// console.log("This is random number " + Math.random()*10)
// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random()*10))




let result = (Math.random())*1000
console.log(result)

console.log(Math.floor(result))
console.log(Math.ceil(result))


// .9 | .2



// 57 = 60 


// 1)MAKE LIST OF 10 METHODS IN MATH OBJECT WHICH IS FRQUENTLY USED.
// 2)- Calculate the area of a circle, volume of cylinder using `Math.PI`.
// 3)-- Generate a random number between 1 and 100 using `Math.random()` AND MAEK A PROGRAM FOR GUSSING ANY RANDOM NUMBR AND IT SHOULD HAVE 1 WINING CONDITION.
// 5)Create a nested object `course` with properties `title`, `duration`, and a nested object `instructor` with `name` and `experience`.

// lottery ticket 1-1000






