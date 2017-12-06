// function printAddress(street: string, streetTwo?: string, state = 'UT') {
//   console.log(street);
//   if (streetTwo) {  
//     console.log(streetTwo);
//   }
//   console.log(state);
// }

// printAddress('543 Some Street');
// printAddress('543 Some Street', 'Apt. 45');
// printAddress('543 Some Street', 'Apt. 45', 'NY');

function lineupCard(team: string, ...players: string[]) {
  console.log('Team: ' + team);
  for (let player of players) {
    console.log(player);
  }
}

lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');