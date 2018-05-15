/*
 * Create a list that holds all of your cards
 */
/* link for animation https://daneden.github.io/animate.css/*/

let card = document.querySelectorAll('.card');
let cardDeck = Array.from(card);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(cardDeck) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cardDeck[currentIndex];
        cardDeck[currentIndex] = cardDeck[randomIndex];
        cardDeckrandomIndex] = temporaryValue;
    }

    return cardDeck;
}


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
function moveCounter() {
    moves=moves+1;
    alert(moves);
 }

$('.card').click(function moveCounter());

 /* timer function that starts with click on card*/

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
