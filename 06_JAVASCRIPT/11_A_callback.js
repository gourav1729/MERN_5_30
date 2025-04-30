function stepOne(callback) {
  setTimeout(() => {
    console.log("Signup completed");

    callback();
  }, 10000);
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


// setTimeout(() => {
//   console.log("1 LIke/comment completed");

// }, 1000);
// setTimeout(() => {
//   console.log("2 LIke/comment completed");

// }, 7000);
// setTimeout(() => {
//   console.log("3LIke/comment completed");

// }, 5000);

