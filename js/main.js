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
function dealCards() {
  $('#board').append('<div class="container"><div class="row"><div class="hand"></div></div></div>');
  for (var i = 0; i < 5; i++) {
    var cardCur = gameDeck[i].toString();
    currHand[i] = cardCur;
    $('.hand').append('<div class="col-2"><img class="cards" src="images/'+cardCur+'.png"></div>');
    
}

}

dealCards();
console.log(currHand);
shuffle(deck);
console.log(gameDeck);
// on click, draw red dot once
// only cards from players hand can be selected
// after a card is placed, draw a new card from hand


var counter = 0;
// no dot is for true/false thatll say whether a dot is in the col already
var noDot = []
// loop through each function to put images into cols and add dots and link up the cards
$.each(col, function(ind, val) {
  var cardCur = deck[ind];
  noDot[ind] = true;
  $(val).append('<img class="cards" src="images/' + cardCur + '.png">');
  $(val).click(function() {
    // if to determine if there is already a checker in the box and if the card in the box has a mathc
    // to a card in the hand
    if (noDot[ind] && (currHand[0] === cardCur.toString() || currHand[1] === cardCur.toString() || currHand[2] === cardCur.toString() || currHand[3] === cardCur.toString() || currHand[4] === cardCur.toString())) {

      // puts a circle in an appropriate box
      $(val).append('<div class="circle"></div>');
      // specifies that no other circle can be drawn in this box
      noDot[ind] = false;
      // now to determine how to get rid of card that has alreaady been played
      for (var i = 0; i < 5; i++) {
        //check each card in hand if it matches the one that was just filled 
        if (currHand[i] === cardCur.toString()) {
          // if so, increases the counter by 1 to draw a new card from the game deck
          counter++;

          // determines what card has just been inserted into what was drawn
          cardCurNew = gameDeck[4 + counter];
          console.log(currHand);
          //resets the values inthe new hand
          // SOMETHING WRONG HERE
          currHand[i] = cardCurNew.toString();
          // removes old card
          $('.col-2:nth-child(' + (i + 1).toString() + ')').remove()
          // inserts new card

          console.log(currHand);

  
          // noDot[ind] = true;
        }
      }
        for (var i = 0; i < 5; i++) {
          var cardCur11 = currHand[i];
          $('.hand').append('<div class="col-2"><img class="cards" src="images/' + cardCur11 + '.png"></div>');
      }    
    } else {

    
  };
};
});
});





//-------Actual game logic-------

// after user chooses, comp chooses spot in diff color










