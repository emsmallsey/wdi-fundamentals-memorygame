// console.log("User flipped " + cardOne);
// console.log ("User flipped " + cardThree);

const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

function checkMatch() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("It's a match!");
        }
        else {
            alert("Please pack your things and leave the house immediately. It's not a match.")
        }
    }
}

function flipCard(cardID) {
    console.log("User flipped " + cards[cardID]);
    cardsInPlay.push(cards[cardID]);
    checkMatch();
}


flipCard(0);
flipCard(2);

