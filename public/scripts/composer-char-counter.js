$(document).ready(function() {
  console.log('We are connected to the js file and ready to use jQuery');
});

let counter = $('#counter');

$('#text-input').on('input', function() {
  let currentLength = $(this).val().length;
  counter.val(140 - currentLength);
  if(currentLength >= 140) {
    counter.css('color', 'red');
  } else {
    counter.css('color', 'black');
  }
});








