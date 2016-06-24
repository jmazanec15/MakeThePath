// Check for win script
//--------if connect funct----------
// this function will check if after each move
// either computer or player wins

function didWin(currentChips) {

  for (var i = 0; i < currentChips.length; i++) {

    var neg1 = false;
    var pos1 = false; 
    var neg11 = false; 
    var pos11 = false;
    var neg10 = false;
    var pos10 = false; 
    var neg9 = false; 
    var pos9 = false;
    for (var j = 0; j < currentChips.length; j++) {

      if ((currentChips[i] - 11) === currentChips[j]) {
        neg11 = true;
      } else if ((currentChips[i] + 11) === currentChips[j]) {
        pos11 = true;
      } else if ((currentChips[i] - 1) === currentChips[j]) {
        neg1 = true;
      } else if ((currentChips[i] + 1) === currentChips[j]) {
        pos1 = true;
      } else if ((currentChips[i] - 10) === currentChips[j]) {
        neg10 = true;
      } else if ((currentChips[i] + 10) === currentChips[j]) {
        pos10 = true;
      } else if ((currentChips[i] - 9) === currentChips[j]) {
        neg9 = true;
      } else if ((currentChips[i] + 9) === currentChips[j]) {
        pos9 = true;
      } else {
        //nothing happens
      }
    if ((neg10 && neg11 && neg1) || (neg1 && pos9 && pos10) || (pos10 && pos11 && pos1) || (pos1 && neg9 && neg10)){
      if ((currentChips[i] === 0) || (currentChips[i] === 10) || (currentChips[i] === 20) || (currentChips[i] === 30) || (currentChips[i] === 40)) {
        if ((pos10 && pos11 && pos1) || (pos1 && neg9 && neg10)) {
          return true;

        } else {

        }
      } else if ((currentChips[i] === 9) || (currentChips[i] === 19) || (currentChips[i] === 29) || (currentChips[i] === 39) || (currentChips[i] === 49)) {
          if ((pos9 && pos10 && neg1) || (neg1 && neg11 && neg10)) {
            return true;
        } else {

        }
      } else {
    return true; 
    } 
  }
}
}
  return false;

}



// var a = [39,29,30,40];

// var b = [41,40,31,30];

// console.log(didWin(a)+' should be false');
// console.log(didWin(b)+' should be true');




