// computer move tracker function

function computerMove(compHand, col, deck, dotTrackerComp, counter, gameDeck) {


        // swit determines if the computer has placed a checker
        var swit = true;
        // while loop to go through hand and make random play
        var tieIterater = 0;
        while (swit == true) {

          // creates random number from 0 to 4
          var whichMove = Math.round(Math.random() * 4);

          // card that is in the random position in the computer's hand
          var cardPlay  = compHand[whichMove];

          // for each col on the board, check if cardPlay is equal to that spot
          $.each(col, function(ind, val) {

            var cardCur2 = deck[ind].toString();

            if (cardCur2 === cardPlay && dotTrackerComp.indexOf(cardCur2) === -1) {

              $(val).append('<div class="circle1"></div>');
              // add a value where a chip was laid down
              dotTrackerComp.push(ind);
              // supposed to check if the computer won on the last play
              // NEEDS TO BE FIXED
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
              if (didWin(dotTrackerComp)) {
                $(".computerWon").show();
                // location.reload();
              };


          // creates new hand
              compCardNew = gameDeck[10 + counter].toString();
              compHand[whichMove] = compCardNew; 
              // exits out of the while loop              
              swit = false;
              }

            });

          };
          console.log(dotTrackerComp);
          console.log(compHand);

}


