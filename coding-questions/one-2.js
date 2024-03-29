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

  //how to sort passengers by connecting flights
  //descending order

  const numofFlights = passengers.sort(
    (passenger1, passenger2)=>
    passenger2.connectedFlights - passenger1.connectedFlights
  );
  console.log(numofFlights);
  //assending order//
  const totalFlights = passengers.sort(
    (passenger1, passenger2)=>
    passenger1.connectedFlights - passenger2.connectedFlights
  )
  console.log(totalFlights);

  