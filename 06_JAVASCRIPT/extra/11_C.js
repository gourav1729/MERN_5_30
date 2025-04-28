function stepOne() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Step 1 done");
        resolve();
      }, 1000);
    });
  }
  
  function stepTwo() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Step 2 done");
        resolve();
      }, 1000);
    });
  }
  
  function stepThree() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Step 3 done");
        resolve();
      }, 1000);
    });
  }
  
  // Async Await 👇
  async function runSteps() {
    try {
      await stepOne();
      await stepTwo();
      await stepThree();
      console.log("All steps done!");
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  runSteps();
  