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


// add/update values

const  person = {
    name : "Nikhil",
    age : 23,
}



console.log(person)
console.log(person.age)
person.age = 30

console.log(person.age)


// **Exercise:** Create a `blogPost` object with properties `title`, `content`, and `views`
// **Exercise:** Create a `instagram` object with properties `name`, `likes`, and `comments`


// {{}, {}, {}, {}, {}}


const object = {
    name : "Hello",
    address : {city : "India", address1 : {city : "india2"},  address3 : {city : "india3"}}
}


console.log(object.address.address1.city)


//7) Array of Objects :  Group multiple objects into an array.

const employe = [{name:"shudanshu", role : "student1"}, 
    {name : "nikhil", role: "student2"}, 
    {name : "kushal", role: "student2"}, 
    {name : "nikhil1", role: "student5"}
]


console.log(employe[3])
console.log(employe[3].name)
console.log({ name: 'nikhil1', role: 'student5' }.name)


//8)MATH OBJECTS 
// - `Math.PI` - π value -> 3.14 -> 22/7
// - `Math.sqrt(x)` - Square root -> 9 -> 3 , 16->4
// - `Math.round(x)` - Rounds to the nearest integer -> 7.8 -> 8


// console.log(Math.PI)
// console.log(Math.sqrt(9))
// console.log(Math.round(9.1))
// console.log(Math.sin(1))
// 0 1/2 1/2 3/2 1
// 


// pie*R*R*L


// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random()*10))
// console.log(Math.floor(Math.random()*10))




let result = (Math.random())*10

console.log(Math.floor(result))
console.log(Math.ceil(result))


// .9 | .2



// 57 = 60 


// 1)MAKE LIST OF 10 METHODS IN MATH OBJECT WHICH IS FRQUENTLY USED.
// 2)- Calculate the area of a circle, volume of cylinder using `Math.PI`.
// 3)-- Generate a random number between 1 and 10 using `Math.random()` AND MAEK A PROGRAM FOR GUSSING ANY RANDOM NUMBR AND IT SHOULD HAVE 1 WINING CONDITION.
// 5)Create a nested object `course` with properties `title`, `duration`, and a nested object `instructor` with `name` and `experience`.






