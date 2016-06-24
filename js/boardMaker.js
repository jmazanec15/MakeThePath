// boardMaker


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
