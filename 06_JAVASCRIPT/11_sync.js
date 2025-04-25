console.log("Hello World 1");
console.log("Hello World 2");
console.log("Hello World 3");
console.log("Hello World 4");
console.log("Hello World 5");
console.log("Hello World 6");


// kuch code 
// aisa code jo time lega()
// kuch code 


// time




// 1. Synchronous code executes in sequence, one after the other.
// 2. Each line of code is executed only after the previous line has completed.
// 3. This means that if one line of code takes a long time
// to execute, it will block the execution of the next line until it is finished.
// 4. This can lead to performance issues, especially in web applications where responsiveness is important.
// 5. Synchronous code is easier to read and understand, but it can lead to performance issues if not used carefully.
// 6. In JavaScript, synchronous code is executed in a single thread, meaning that only one piece of code can be executed at a time.

//what is callback hell : callback hell is a situation in which a program becomes difficult to read and maintain due to excessive nesting of callbacks. This can occur when multiple asynchronous operations are performed in sequence, and each operation relies on the completion of the previous one. As a result, the code can become deeply nested and difficult to follow, leading to what is commonly referred to as "callback hell."


// 1.async code executes in parallel, allowing multiple pieces of code to run at the same time.
// 2. This means that if one piece of code takes a long time
// to execute, it will not block the execution of other code.
// 3. This can lead to better performance, especially in web applications where responsiveness is important.
// 4. However, asynchronous code can be more difficult to read and understand, as the order of execution is not always clear.
// 5. In JavaScript, asynchronous code is executed using callbacks, promises, and async/await.
// 6. Asynchronous code is executed in a separate thread, meaning that multiple pieces of code can be executed at the same time.
// 7. This allows for better performance and responsiveness in web applications, but can also lead to complexity and confusion if not used carefully.
// 8. Asynchronous code is often used for tasks such as network requests, file I/O, and other operations that may take a long time to complete.
// 9. In JavaScript, asynchronous code is executed using the event loop, which allows for non-blocking I/O operations.
// 10. The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by using callbacks, promises, and async/await.


console.log("LINE 1")

function hello(){
    console.log("LINE 5"); 
   
}

console.log("LINE 2")

function demo(){
    console.log("LINE 4")
    hello();
}

console.log("LINE 3")

demo()

console.log("LINE 6");





console.log("start")

setTimeout(() => {
    console.log("middle"), 0}
);

console.log("end")







