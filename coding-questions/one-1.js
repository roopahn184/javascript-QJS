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
  //how to get vegitarian/vagan sigers

  // using for loop

//   const passengerName =[];
//   for(let i=0; i<passengers.length; i++){
//     if(passengers[i].isVegetarianOrVegan){
//         passengerName.push(passengers[i].passengerName)
//     }
//   }
//   console.log(passengerName)

  // using foreach method

//   const passengerName =[];
//   passengers.forEach((passenger)=>{
//     if(passenger.isVegetarianOrVegan){
//         passengerName.push(passenger.passengerName)
//     }
//   })
//   console.log(passengerName);

  // map method

  const passengerNames = passengers.filter((passenger)=> passenger.isVegetarianOrVegan ).map((passenger)=>
    passenger.passengerName
  )
  console.log(passengerNames);
  //here filter method verifies the true or false and map method returns the new array