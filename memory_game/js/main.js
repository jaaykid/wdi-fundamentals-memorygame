var cards = ["queen", "queen", "king", "king"] 
var cardsInPlay = []
var cardOne = [cards[3]]
var cardTwo = [cards[0]]

cardsInPlay.push(cardOne)
cardsInPlay.push(cardTwo)

console.log("User flipped " + cardOne)
console.log("User flipped " + cardTwo )

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0][0] === cardsInPlay[1][0]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}



console.log(cardsInPlay)