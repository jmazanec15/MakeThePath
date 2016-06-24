  
// shuffle decks
// deal cards
shuffle(deck);
var lastCard = deck[51];
var secondLast = deck[50];
var deckSize = [];
for (var i = 0; i < gameDeck.length; i++) {
  if (lastCard === gameDeck[i] || secondLast === gameDeck[i]) {
    deckSize.push(i);
  }
}

gameDeck.splice(deckSize[1], 1);
gameDeck.splice(deckSize[0], 1);

shuffle(gameDeck);
var currHand = [];
var compHand = [];

function dealCards() {
  $('#board').append('<div class="container"><div class="row"><div class="hand"></div></div></div>');
  // deal cards to users hand
  for (var i = 0; i < 5; i++) {
    var cardCur = gameDeck[i].toString();
    currHand[i] = cardCur;
    $('.hand').append('<div class="col-2"><img class="cards" src="images/' + cardCur + '.png"></div>');
    
  }
  // deal cards to comp hand  
  for (var i = 0; i < 5; i++) {
    var compCard = gameDeck[i + 5].toString();
    compHand[i] = compCard;
  }
}

dealCards();


// 2 arrays to identify where each players chips are located on the board
var dotTrackerComp = [];
var dotTrackerUser = [];

// counter will be used to draw next card from deck
var counter = 0;

// no dot is for true/false thatll say whether a dot is in the col already
var noDot = []

// loop through each function to put images into cols
// also creates method to add dots on click if the player has that card 
$.each(col, function(ind, val) {
  // variable for current card being looped through for setting board
  var cardCur = deck[ind];

  // specifies that no dot exists in the space initially
  noDot[ind] = true;
  // adds image of card to board
  $(val).append('<img class="cards" src="images/' + cardCur + '.png">');
  // adding method that on click, the card will add a dot if the conditions are true
  $(val).click(function() {
    // to determine if there is already a checker in the box and if the card in the box has a match
    // to a card in the hand
    if (noDot[ind] && (currHand[0] === cardCur.toString() || currHand[1] === cardCur.toString() || currHand[2] === cardCur.toString() || currHand[3] === cardCur.toString() || currHand[4] === cardCur.toString())) {
      // dot tracker adds the value where the card is placed on the board to its array
      dotTrackerUser.push(ind);
      // puts a circle in the appropriate box
      $(val).append('<div class="circle"></div>');

      // dot tracker plugged into the function to determine if the user has won
      if (didWin(dotTrackerUser)) {
        $(".playerWon").show(); 

      };

      // specifies that no other circle can be drawn in this box
      noDot[ind] = false;
      // now to determine how to get rid of card that has alreaady been played
      for (var i = 0; i < 5; i++) {
        //check each card in hand if it matches the one that was just filled 
        if (currHand[i] === cardCur.toString()) {
          // if so, increases the counter by 1 to draw a new card from the game deck
          counter++;
          // determines what card has just been inserted into hand
          cardCurNew = gameDeck[10 + counter];
          //resets the values inthe new hand
          currHand[i] = cardCurNew.toString();
          // removes old card
          $('.col-2').remove();

          // inserts new card
          for (var i = 0; i < 5; i++) {
          var cardCur11 = currHand[i];

          $('.hand').append('<div class="col-2"><img class="cards" src="images/' + cardCur11 + '.png"></div>');
          }

          // increase counter for computer turn
          counter++;

          // computer completes turn       
          if (didWin(dotTrackerUser)) {

          } else {
          if (counter >= 40) {
            counter = 0;
          };
          computerMove(compHand, col, deck, dotTrackerComp, counter, gameDeck);
          if (counter >= 40) {
            counter = 0;
          };
        }

        }
      }
    } 
      if (ties(dotTrackerUser, dotTrackerComp)) {
        $(".tie").show();
      }
       
  });

});








