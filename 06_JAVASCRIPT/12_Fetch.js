// 1. What is API?
// API stands for Application Programming Interface.

// It is a set of rules that lets different software talk to each other.

// Think of an API as a waiter in a restaurant — you (the frontend) ask for something, the waiter (API) tells the kitchen (backend/server), and brings the result back to you.


// https://dog.ceo/api/breeds/image/random


// What is fetch?
// fetch is a built-in JavaScript function used to make HTTP requests (like GET, POST, etc.) from a web browser or a JavaScript environment.

// It allows you to connect to servers, APIs, databases, and backend applications to retrieve or send data.

fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data)=> console.log(data))
    .catch((error)=>console.log("Error", error))

fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data)=> console.log(data))
    .catch((error)=>console.log("Error", error))

fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data)=> console.log(data))
    .catch((error)=>console.log("Error", error))

fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data)=> console.log(data))
    .catch((error)=>console.log("Error", error))



