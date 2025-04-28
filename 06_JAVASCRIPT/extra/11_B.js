function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 done");
      resolve();
    }, 1000);
  });
}

function stepTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 2 done");
      reject("kaise ho");
    }, 1000);
  });
}

function stepThree() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 done");
      resolve();
    }, 1000);
  });
}

// Promises chaining 👇
stepOne()
  .then(stepTwo)
  .then(stepThree)
  .then(() => {
    console.log("All steps done!");
  })
  .catch((error) => {
    console.log("Error:", error);
  });
