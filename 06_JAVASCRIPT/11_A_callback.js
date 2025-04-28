function stepOne(callback) {
  setTimeout(() => {
    console.log("Signup completed");

    callback();
  }, 1000);
}
function stepTWO(callback) {
  setTimeout(() => {
    console.log("Login completed");

    callback();
  }, 5000);
}
function stepThree(callback) {
  setTimeout(() => {
    console.log("LIke/comment completed");

    callback();
  }, 7000);
}

stepOne(()=> {
    stepTWO(()=>{
        stepThree(() => {
            console.log("All task done.")
        })
    })
})

