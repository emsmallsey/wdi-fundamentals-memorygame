// console.log("User flipped " + cardOne);
// console.log ("User flipped " + cardThree);

const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

let cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped queen");

let cardTwo = cards[1];

cardsInPlay.push(cardTwo);

console.log("User flipped King");

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("It's a match!");
    }
    else {
        alert("Please pack your things and leave the house immediately. It's not a match.")
    }
}