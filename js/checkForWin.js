// Check for win script
//--------if connect funct----------
// this function will check if after each move
// either computer or player wins
// 1. After turn,check each opponents chceckers for connections
// 2. If an initial connection is present, check it for a connection to its own checker type
// 3. If no initial connection, try a different connection
// 4. after 3 connections, start too look for opponents chip as well as your own
// 5. If atleast 3 connections are present bridging opponents 2 chips, end game

function didWin(arrayOfCurrentTurnChips) {


  // this for loops rolls through each opponent chips to see if they have any connections
  for (var i = 0; i < arrayOfCurrentTurnChips.length; i++) {
    var counter1 = 0;
    // this loop checks what current chips are connected to the opponent chip
    var firstConnectArray = [];
    for (var j = 0; j < arrayOfCurrentTurnChips.length; j++) {
      var neg1  = arrayOfCurrentTurnChips[i] - 1 == arrayOfCurrentTurnChips[j];
      var pos1  = arrayOfCurrentTurnChips[i] + 1 == arrayOfCurrentTurnChips[j];
      var neg7  = arrayOfCurrentTurnChips[i] - 7 == arrayOfCurrentTurnChips[j];
      var pos7  = arrayOfCurrentTurnChips[i] + 7 == arrayOfCurrentTurnChips[j];
      var neg6  = arrayOfCurrentTurnChips[i] - 6 == arrayOfCurrentTurnChips[j];
      var pos6  = arrayOfCurrentTurnChips[i] + 6 == arrayOfCurrentTurnChips[j];
      var neg8  = arrayOfCurrentTurnChips[i] - 8 == arrayOfCurrentTurnChips[j];
      var pos8  = arrayOfCurrentTurnChips[i] + 8 == arrayOfCurrentTurnChips[j];
      if ((neg7 & neg6 & pos1) || (neg1 & neg8 & neg7) ||(neg1 & pos6 & pos7) ||(pos1 & pos8 & pos7)) {
          console.log('game');
          return 'game over';
      }
    }
  }
  console.log('not over')
  return 'not over';
}

a = [1,4,5,64,3,2,4,5,6,7,2,3,5,3];

didWin(a);










