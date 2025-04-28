function stepOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Signup completed");
      resolve()
    }, 1000);
  });
}
function stepTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login");
      resolve()
    }, 2000);
  });
}
function stepThree() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Like/comment");
      resolve()
    }, 1000);
  });
}

stepOne()
    .then(stepTwo)
    .then(stepThree)
    .then(() => {

        console.log("All task completed")
    })
    .catch((error) => {
        console.log("Error : ", error)
    })





