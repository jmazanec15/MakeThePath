// creates deck
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


