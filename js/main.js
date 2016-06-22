//----------------Creating deck---------------------
// Making 2 decks of cards
// creates an array deck containg objects as cards

var deck = [];
  for (var i = 0; i < 52; i++) {
    var card = i;
    deck.push(card);
  }

var gameDeck = [];
  for (var i = 0; i < 52; i++) {
    var card = i;
    gameDeck.push(card);
  }

//function to shuffle deck
function shuffle(deck) {
  var j,x,i;
      for (i = deck.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = deck[i - 1];
        deck[i - 1] = deck[j];
        deck[j] = x;
    }
}



//-----------make board using javascript-------------


// makes container in board
$('#board').append('<div class="container"></div>');

//creates 10 divs for card placement on board
var columns = '<div class="col-1"></div>' +
              '<div class="col-1"></div>' +
              '<div class="col-1"></div>' +
              '<div class="col-1"></div>' +
              '<div class="col-1"></div>' +
              '<div class="col-1"></div>' +
              '<div class="col-1"></div>' +
              '<div class="col-1"></div>' +
              '<div class="col-1"></div>' +
              '<div class="col-1"></div>';

// create 5 rows for inside board and container
for (var i = 0; i < 5; i++) {
   $('#board .container').append('<div class="row"></div>');
   var rows = $('#board .container .row');
}


//create 10 columns in each row
$.each(rows, function(ind, val) {
  $(val).append(columns);
}); 

var col = $('.col-1');

//add images of shuffles cards to board
// shuffle deck
// deal cards

shuffle(gameDeck);
var currHand = [];
var compHand = [];
function dealCards() {
  $('#board').append('<div class="container"><div class="row"><div class="hand"></div></div></div>');
  for (var i = 0; i < 5; i++) {
    var cardCur = gameDeck[i].toString();
    currHand[i] = cardCur;
    $('.hand').append('<div class="col-2"><img class="cards" src="images/' + cardCur + '.png"></div>');
    
  }
  for (var i = 0; i < 5; i++) {
    var compCard = gameDeck[i + 5].toString();
    compHand[i] = compCard;
  }
}

dealCards();
shuffle(deck);
// on click, draw red dot once
// only cards from players hand can be selected
// after a card is placed, draw a new card from hand

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
  // val specifies which column the new image will be added to
  var cardCur = deck[ind];
  // specifies that no dot exists in the space initially
  noDot[ind] = true;
  // adds image of card to board
  $(val).append('<img class="cards" src="images/' + cardCur + '.png">');
  // adding method that on click, the card will add a dot if the conditions are true
  $(val).click(function() {

    // if to determine if there is already a checker in the box and if the card in the box has a match
    // to a card in the hand
    if (noDot[ind] && (currHand[0] === cardCur.toString() || currHand[1] === cardCur.toString() || currHand[2] === cardCur.toString() || currHand[3] === cardCur.toString() || currHand[4] === cardCur.toString())) {
      // dot tracker adds the value where the card is placed on the board to its array
      dotTrackerUser.push(ind);
      // puts a circle in an appropriate box
      $(val).append('<div class="circle"></div>');
      // dot tracker plugged into the function to determine if the user has won
      if (didWin(dotTrackerUser)) {
        alert('we are the champions');
        location.reload();


      };

      // specifies that no other circle can be drawn in this box
      noDot[ind] = false;


      // now to determine how to get rid of card that has alreaady been played
      for (var i = 0; i < 5; i++) {
        //check each card in hand if it matches the one that was just filled 
        if (currHand[i] === cardCur.toString()) {
          // if so, increases the counter by 1 to draw a new card from the game deck
          counter++;
          // checks to see if the deck has been looped through once
          // CHECK THIS OUT FURTHER
          if (counter >= 51) {
            shuffle(gameDeck);
            counter = 0;
          }
          // determines what card has just been inserted into hand
          cardCurNew = gameDeck[9 + counter];
          //resets the values inthe new hand
          currHand[i] = cardCurNew.toString();
          // removes old card
          $('.col-2').remove();

          // inserts new card
          for (var i = 0; i < 5; i++) {
          var cardCur11 = currHand[i];

          $('.hand').append('<div class="col-2"><img class="cards" src="images/' + cardCur11 + '.png"></div>');
          }

        // THIS IS WHERE COMP MOVES SHOULD GO
        // make checkIfWon function outside this giant thing of code
        // ----todo----
        // 1. pick card from comps hand randomly
        // 2. place checker on board in black
        // 3. get rid of card from hand
        // 4. add new card to hand
        // 5. check if won
        // slow down computer;

        // swit determines if the computer has placed a checker
        var swit = true;
        // while loop to go through hand and make random play
        while (swit == true) {

          // creates random number from 0 to 4
          var whichMove = Math.round(Math.random() * 4);
          // card that is in the random position in the computer's hand
          var cardPlay  = compHand[whichMove];

          // for each col on the board, check if cardPlay is equal to that spot
          $.each(col, function(ind, val) {

            var cardCur2 = deck[ind].toString();

            if (cardCur2 == cardPlay) {

              $(val).append('<div class="circle1"></div>');
              // add a value where a chip was laid down
              dotTrackerComp.push(ind);
              // supposed to check if the computer won on the last play
              // NEEDS TO BE FIXED
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
              if (didWin(dotTrackerComp)) {
                alert('computers are the champions');
                location.reload();
              };
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
              // exits out of the while loop              
              swit = false;
            }
          });
          // increases counter
          counter++;
          // checks to see if the deck has been looped through once
          if (counter >= 51) {
            shuffle(gameDeck);
            counter = 0;
          }
          // creates new hand
          compCardNew = gameDeck[9 + counter];
          compHand[whichMove] = compCardNew; 

          }
        }
      }
    } 
  });
});









