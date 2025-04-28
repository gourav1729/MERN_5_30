// fetch("https://dog.ceo/api/breeds/image/random")
// .then((response) => response.json()) //parse json response
// .then((data) => console.log(data))
// .catch((error) => console.log("Error", error));


async function getData() {
    console.log("DATA IS COMMING");

    try {
      let response = await fetch("https://dog.ceo/api/breeds/image/random");
      let parsedata = await response.json();
      console.log(parsedata);

    //   document.getElementById("dog").innerHTML = `
    //   <img src = ${parsedata.message} alt="hello">`;
    } catch (error) {
      console.log("error", error);
    }
  }

  getData();