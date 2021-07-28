// Code your solutions in this file
// const names = ["Lisa", "Kaitlin", "Jan"]
// const event = ["surprise"]

// function writeCards(names, event){
//   for (let i = 0; i < cards.length; i++) {
//     console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!)
//   }
//   return names, event;
// }

const cards = [[ 'Lisa', 'Kaitlin', 'Jan' ], ['surprise']];
 
function writeCards(cards) {
  let array = [];
  for (let i = 0; i < cards.length; i++) {
    array[i] = `Thank you, ${cards[i]}, for the wonderful surprise gift!`;
     
} 
return array;
}

writeCards(cards); 

function countDown(number) {
  
  while(number>-1) {
    console.log(number)
    number--;
  }
}

countDown(10);