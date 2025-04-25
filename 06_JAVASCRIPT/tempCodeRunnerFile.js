async function makeSandwich() {
    await getBread();
    await addButter();
    await addJam();
    console.log("Sandwich is ready! 🥪🧈🍓");
  }
  
  makeSandwich();