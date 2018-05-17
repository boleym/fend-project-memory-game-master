/*
 * Create a list that holds all of your cards
 */
/* link for animation https://daneden.github.io/animate.css/*/
/*variables*/
const card =  document.getElementsByClassName('card');
const cardDeck = Array.from(card);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

}
shuffle(cardDeck);

/*document.getElementsByClassName('deck').addEventListener('click', function(){
  let shuffledCards = shuffle(cardDeck);
  let deck = document.getElementsByClassName('deck');
  for (let i = 0; i < cardDeck.length; i++) {
    deck.appendChild(shuffledCards[i]);
  }
});*/






/*problem is on the replaceDeck() function.  When I comment out calling this function, the cards just flip when clicked, but the shuffle function also doesn't work.*/
function replaceDeck(){
  let deck = document.querySelector(".deck");
  let shuffledCards = shuffle(cardDeck);
    for (let i = 0; i < cardDeck.length; i++) {
        cardDeck[i].parentNode.removeChild(cardDeck[i]);
    }
    for (let x = 0; x < shuffledCards.length; x++) {
      deck.appendChild(shuffledCards[x]);
    }
}
/*this shuffles but when I click the card, it opens a card somewhere else.  problem is in the replaceDeck function*/
window.onload = replaceDeck();
  //shuffle(cardDeck);
  /*function to flip the card*/
function flipCards() {
   for (let i = 0; i < card.length; i++) {
     card[i].addEventListener('click', function() {
       card[i].classList.toggle('open');
       card[i].classList.toggle('show');
     })
   }
  }
flipCards();

/*function to start*/


  /*for (let i = 0; i < card.length; i++) {
    card[i].classList.remove('open', 'show', 'match');
  }
};*/

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */



 /*increment move counter
let moves=0;
function moveCounter() { /* timer function that starts with click on card*/

/*const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
let count = 0;

function beginTimer = () => {
  count += 1;
  minutes.innerHTML = Math.floor(count / 60).toString().padStart(2, "0");
  seconds.innerHTML = (count % 60).toString().padStart(2, "0");
  }

const timer = setInterval(beginTimer, 1000)

$('.card').click(function beginTimer);
    moves=moves+1;
    alert(moves);
 }

$('.card').click(function moveCounter());*/
