
/*
 * Create a list that holds all of your cards
 */
/* link for animation https://daneden.github.io/animate.css/*/
/*variables for cards*/
const card =  document.getElementsByClassName('card');
const cardDeck = Array.from(card);

/*variable for moves*/
let moves = 0;

/*variables for timer*/
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
let count = 0;
const start = document.querySelector('#timer');

/*variables to hold clicked cards*/

let matchedCards = [];

/*variables for stars to be used in loseStar function
const oneStar = ($'ul li:first-child');
const twoStar = ($'ul li:nth-child(2)');
const threeStar = ($'ul li:nth-child(3)');
const stars = document.getElementsByClassName('stars');*/

/*variable for restart button
const restartButton = document.getElementsByClassName('restart');*/



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

//puts the shuffled cards onto the board
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
window.onload = replaceDeck();//associate this with the reset button when I make it

/*function to start timer*/

function startTimer(){
  count += 1;
  minutes.innerHTML = Math.floor(count / 60).toString().padStart(2, "0");
  seconds.innerHTML = (count % 60).toString().padStart(2, "0");
}

//event listener for click on Start button
start.addEventListener('click', function() {
  const timer = setInterval(startTimer, 1000);
});

//function to flip the card, increase moves, start timer
//having problem where timer speeds up with click on each of the cards
//so made a start button

let flippedCards = [];//moved variable here for this specific function

function flipCards() {
   for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function() {
       card[i].classList.toggle('open');
       card[i].classList.toggle('show');
       flippedCards.push(card[i]);//adds flipped cards to the array for tracking?
       moves++;
       document.querySelector('.moves').textContent = moves;
     })
    }
  }
flipCards();

function matchedCards() {
  if (flippedCards.length === 2) {
    if (flippedCards[0] === flippedCards[1]) {
      flippedCards[0].classList.add('match');
      flippedCards[1].classList.add('match');
      matchedCards.push(flippedCards[0]);//add to matchedCards array
      matchedCards.push(flippedCards[1]);
      flippedCards.pop();//remove from flippedCards so array length will always be 2
      flippedCards.pop();
    } else {
      flippedCards[0].classList.remove('open', 'show');//flips card back over
      flippedCards[1].classList.remove('open', 'show');
    }
  }
}
matchedCards();




//NOTES

/*functions for checking for matches and tracking them

function addToFlippedCards(event) {
    flippedCards.push(event.target);
}

function addToMatchedCards(event) {
    matchedCards.push(event.target);
}

function checkForMatch(event) {
    flipCards(event.target);
    //add the card to a list of flipped cards
    if (event.target.classList.contains('card') && flippedCards.length < 2) {
        addToFlippedCards(event);
    }
    //if the list has another card, check to see if the two cards match
    if (flippedCards.length === 2) {
        if (flippedCards[0].children[0].className === flippedCards[1].children[0].className) {
            //if the cards match, keep cards flipped over
            addToMatchedCards();
        } else {
            //remove event listener
            for (let i = 0; i < cardDeck.length; i++) {
                cardDeck[i].removeEventListener("click", checkForMatch);
              }
            }
          }*/

//decrease stars as moves increase
/*function loseStars() {
  if (moves === 6) {
    oneStar.hide();
  }
  if (moves === 10) {
    twoStar.hide();
  }
  if (moves === 15) {
    threeStar.hide();
  }
  else {
    stars.style.visibility = 'visible';
  }
}
loseStars();*/
//un-messaged loseStar function and everything broke - click event listener didn't work, but why does a new function affect the event listener?
//any time I write a new functon, everything breaks.  need to figure out what the issue is.  Right now, I have the cards shuffling, clicking, moves incresing, and timer, and that's all. 5/24/18

/*function for winning
function winner() {
  if (matchedCards === 15) {//bc of zero indexing in arrays
    //display winning message
  }
}*/

/*resets moves and timer to zero, replaces stars, replaces deck
function restart() {
  restartButton.addEventListener('click', function (){
    moves = 0;
    count = 0;
    document.getElementsByClassName('fa fa-star').show();
    replaceDeck();
  })
}*/
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
