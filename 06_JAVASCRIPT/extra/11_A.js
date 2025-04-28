function stepOne(callback) {
    setTimeout(() => {
      console.log("Step 1 done");
      callback();
    }, 1000);
  }
  
  function stepTwo(callback) {
    setTimeout(() => {
      console.log("Step 2 done");
      callback();
    }, 1000);
  }
  
  function stepThree(callback) {
    setTimeout(() => {
      console.log("Step 3 done");
      callback();
    }, 1000);
  }
  
  // Callback Hell 👇 (nested)
  stepOne(() => {
    stepTwo(() => {
      stepThree(() => {
        console.log("All steps done!");
      });
    });
  });



  
