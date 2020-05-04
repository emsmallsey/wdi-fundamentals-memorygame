// console.log("User flipped " + cardOne);
// console.log ("User flipped " + cardThree);

const cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

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
    console.log("User flipped " + cards[cardID].rank);
    cardsInPlay.push(cards[cardID].rank);
    console.log(cards[cardID].suit);
    console.log(cards[cardID].cardImage);
    checkMatch();
}


flipCard(0);
flipCard(2);

