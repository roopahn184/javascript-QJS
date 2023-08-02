// Main Question: Get the passengers' names using the data provided 
// Bonus Part (a)- Return vegetarians/vegans
// Bonus Part (b)- Sort passengers by the number of connected flights in descending order

const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 3,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
  ];

  //using for loop
//   const passengerName = [];
//   for(let i = 0; i<passengers.length; i++){
//     passengerName.push(passengers[i].passengerName)
//   }
//  console.log("passengers", passengerName);

// using foreach() method

// const passengerName = [];
// passengers.forEach((passenger)=>{
//   passengerName.push(passenger.passengerName)
// })
// console.log("passenger", passengerName);

// using map method
const passengerName = passengers.map((passenger)=>passenger.passengerName)
console.log("passengers", passengerName);






 


