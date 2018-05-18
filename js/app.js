/*
 * Create a list that holds all of your cards
 */
/* link for animation https://daneden.github.io/animate.css/*/
/*variables*/
const card =  document.getElementsByClassName('card');
const cardDeck = Array.from(card);
let moves = 0;
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
let count = 0;

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
window.onload = replaceDeck();//associate this with the reset button?

/*Notes on timer function*/

function startTimer(){
  count += 1;
  minutes.innerHTML = Math.floor(count / 60).toString().padStart(2, "0");
  seconds.innerHTML = (count % 60).toString().padStart(2, "0");
  }

const timer = setInterval(startTimer, 1000);

//function to flip the card, increase moves, start timer
function flipCards() {
   for (let i = 0; i < card.length; i++) {
     card[i].addEventListener('click', function() {
       card[i].classList.toggle('open');
       card[i].classList.toggle('show');
       moves++;
       document.querySelector('.moves').textContent = moves;

     })
      if(moves == 1){
        second = 0;
        minute = 0;
        startTimer();
      }
    }
  }
flipCards();

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
