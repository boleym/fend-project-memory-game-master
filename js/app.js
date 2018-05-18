
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
const start = document.querySelector('#timer');

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

/*function to start timer*/

function startTimer(){
  count += 1;
  minutes.innerHTML = Math.floor(count / 60).toString().padStart(2, "0");
  seconds.innerHTML = (count % 60).toString().padStart(2, "0");
}

start.addEventListener('click', function() {
  const timer = setInterval(startTimer, 1000);
});

//function to flip the card, increase moves, start timer
//having problem where timer speeds up with clicks
function flipCards() {
   for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function() {
       card[i].classList.toggle('open');
       card[i].classList.toggle('show');
       moves++;
       document.querySelector('.moves').textContent = moves;
     })
    }
  }
flipCards();
