const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
let declineEverything = arr => {
  arr.forEach(politelyDecline);
};

const acceptEverything = arr => {
  arr.forEach(e => {
    console.log(`Ok, Iguess I will eat some ${e}. `)
  });
}
