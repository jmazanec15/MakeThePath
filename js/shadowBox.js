// shadow boxes


$(".newGame").click(function() {
    window.location.reload();
  });
  $("body").append('<div class="ruleList"></div>');
  $(".ruleList").append('<h2>Rules</h2>');
  $(".ruleList").append('<p>1. 50 cards from a no-joker, shuffled, 52-card deck are laid out onto the board. </p>');
  $(".ruleList").append('<p>2. The player and the computer each are dealt 5 cards from a separate deck.</p>');
  $(".ruleList").append('<p>3. The player gets to move first. The player clicks on a card on the board that matches a card in their hand. They then receive a new card from the deck. The computer carries out this process next.</p>');
  $(".ruleList").append('<p>4. The goal of the game is to create a 2 by 2 square of your own cards on the board.</p>');
  $(".ruleList").append('<p>5. 2 cards in the deck are not on the board. They are called "dead cards".</p>');
  $(".ruleList").append('<button class="hideRule">Play Game</button>');
  $(".ruleList").hide();

  $(".rules").click(function() {
  $(".ruleList").show();
})

$(".hideRule").click(function() {
  $(".ruleList").hide();  
});

$("body").append('<div class="computerWon"><h1>Computer Won!</h2><button class="winnerReset1">Play Again</button></div>');
  $(".computerWon").hide();  
  
$("body").append('<div class="playerWon"><h1>You Won!</h1><button class="winnerReset2">Play Again</button></div>');
  $(".playerWon").hide();  
      // $(".playerWon").show(); 
 $("body").append('<div class="tie"><h1>Tie</h1><button class="winnerReset3">Play Again</button></div>');
  $(".tie").hide();  
        //$(".tie").show(); 
$(".winnerReset1").click(function() {
  location.reload();
});
$(".winnerReset2").click(function() {
  location.reload();
});
$(".winnerReset3").click(function() {
  location.reload();
});
