console.log("Hello World 1");
console.log("Hello World 2");
console.log("Hello World 3");


// code : 10 sec  // 


console.log("Hello World 4");  // 50 sec 
console.log("Hello World 5");
console.log("Hello World 6");


// 5 


setTimeout(()=> {
  console.log("hello 1")
}, 1000)
setTimeout(()=> {
  console.log("hello 2")
}, 5000)
setTimeout(()=> {
  console.log("hello 3")
}, 3000)
setTimeout(()=> {
  console.log("hello 4")
}, 1000)


// data -> 







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

console.log("LINE 1");

function hello() {
  console.log("LINE 5");
}

console.log("LINE 2");

function demo() {
  console.log("LINE 4");
  hello();
}

console.log("LINE 3");

demo();

console.log("LINE 6");

console.log("start");

setTimeout(() => {
  console.log("middle"), 0;
});

console.log("end");

// Imagine making tea, but each step requires confirmation before moving on:

// Boil water

// → when done, add tea leaves

// → after a few minutes, add sugar and milk

// → then, pour into cup

// 1. What is Callback Hell/Pyramid of Doom/Christmas Tree of Callbacks?
// Callback Hell refers to a situation in JavaScript where multiple asynchronous functions are nested inside each other, forming a deep pyramid-like structure of code.

// This pattern appears when each callback performs an asynchronous task and passes the result to another callback, leading to deeply nested and hard-to-read code.

// 2. Why does Callback Hell happen?
// JavaScript is:

// Single-threaded (one task at a time),

// And asynchronous (can handle tasks like API calls, timeouts, or reading files without blocking other operations).

// To deal with async tasks, JavaScript initially used callbacks, which are functions passed as arguments to be executed later.

// When tasks are dependent on each other, like:

// Step 2 needs the result of Step 1,

// Step 3 needs the result of Step 2,

// ...we end up nesting callbacks inside callbacks.

step1(function (result1) {
  step2(result1, function (result2) {
    step3(result2, function (result3) {
      step4(result3, function (result4) {
        // and it continues...
      });
    });
  });
});

// 5. Problems with Callback Hell:
// Difficult to read & debug.

// Error handling is complex.

// Code is not modular.

// 🔁 2. Promises
// A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

// 2. Why use Promises?
// To avoid nested callbacks.

// To write more readable and manageable asynchronous code.

// if(){
//     if(){

//     }
// }

// 

// 3. Promise States:
// Pending: Initial state.

// Fulfilled: Operation completed successfully.

// Rejected: Operation failed.

const promise = new Promise((resolve, reject) => {
  if (sucess) {
    resolve("data recived");
  } else {
    reject("error occured");
  }
});

promise.then((data) => console.log(data)).catch((err) => console.log(err));

// 6. Real-life Analogy:
//     You order food from Zomato. A promise is like: "We’ll deliver it soon." You can handle the outcome when it’s delivered (then) or if there’s a delivery issue (catch).

// ⚡ 3. Async / Await
// 1. What is async/await?
// Syntactic sugar over Promises.

// Allows writing asynchronous code that looks like synchronous code.

// 2. Why use it?
// Code becomes clean, readable.

// Easier to debug.

// Looks synchronous but works asynchronously.

// bread -> butter -> jam
// sigup -> login -> like/comment

// function getBread(cb) {
//   setTimeout(() => {
//     console.log("Got the bread");
//     cb();
//   }, 4000);
// }
// function addButter(cb) {
//   setTimeout(() => {
//     console.log("add the butter");
//     cb();
//   }, 1000);
// }
// function addJam(cb) {
//   setTimeout(() => {
//     console.log("add the jam");
//     cb();
//   }, 1000);
// }

// getBread(() => {
//     addButter(()=>{
//         addJam(() => {
//             console.log("Sandwithc is ready")
//         })
//     })
// })

// function getBread() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Got the bread");
//       resolve();
//     }, 4000);
//   });
// }
// function addButter() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Got the bread");
//       resolve();
//     }, 4000);
//   });
// }
// function addJam() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Got the bread");
//       reject();
//     }, 4000);
//   });
// }


// // getBread()
// //     .then(addButter)
// //     .then(addJam)
// //     .then(()=>console.log("sandwich is ready"))


// async function makeSandwich() {
//     await getBread();
//     await addButter();
//     await addJam();
//     console.log("Sandwich is ready! 🥪🧈🍓");
//   }
  
//   makeSandwich();



function getBread() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2;
      if (success) {
        console.log("Got the bread");
        resolve();
      } else {
        reject("Failed to get the bread 🥖❌");
      }
    }, 4000);
  });
}

function addButter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2;
      if (success) {
        console.log("Added butter");
        resolve();
      } else {
        reject("Failed to add butter 🧈❌");
      }
    }, 4000);
  });
}

function addJam() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2;
      if (success) {
        console.log("Added jam");
        resolve();
      } else {
        reject("Failed to add jam 🍓❌");
      }
    }, 4000);
  });
}

async function makeSandwich() {
  try {
    await getBread();
    await addButter();
    await addJam();
    console.log("Sandwich is ready! 🥪🧈🍓");
  } catch (error) {
    console.log("Error while making sandwich:", error);
  }
}

makeSandwich();



// function getBread(successCallback, errorCallback) {
//   setTimeout(() => {
//     const success = Math.random() > 0.2;
//     if (success) {
//       console.log("Got the bread");
//       successCallback();
//     } else {
//       errorCallback("Failed to get the bread 🥖❌");
//     }
//   }, 4000);
// }

// function addButter(successCallback, errorCallback) {
//   setTimeout(() => {
//     const success = Math.random() > 0.2;
//     if (success) {
//       console.log("Added butter");
//       successCallback();
//     } else {
//       errorCallback("Failed to add butter 🧈❌");
//     }
//   }, 4000);
// }

// function addJam(successCallback, errorCallback) {
//   setTimeout(() => {
//     const success = Math.random() > 0.2;
//     if (success) {
//       console.log("Added jam");
//       successCallback();
//     } else {
//       errorCallback("Failed to add jam 🍓❌");
//     }
//   }, 4000);
// }

// function makeSandwich() {
//   getBread(
//     () => {
//       addButter(
//         () => {
//           addJam(
//             () => {
//               console.log("Sandwich is ready! 🥪🧈🍓");
//             },
//             (error) => {
//               console.log("Error while adding jam:", error);
//             }
//           );
//         },
//         (error) => {
//           console.log("Error while adding butter:", error);
//         }
//       );
//     },
//     (error) => {
//       console.log("Error while getting bread:", error);
//     }
//   );
// }

// makeSandwich();
